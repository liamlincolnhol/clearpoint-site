import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record) {
    // First request from this IP
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return false;
  }
  
  // Check if the time window has expired
  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    // Reset the counter
    record.count = 1;
    record.lastReset = now;
    return false;
  }
  
  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  // Increment counter
  record.count++;
  return false;
}

// Clean up old entries periodically (simple cleanup)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now - record.lastReset > RATE_LIMIT_WINDOW) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long').trim(),
  email: z.string().email('Invalid email format').max(255, 'Email too long'),
  phone: z.string().max(20, 'Phone number too long').optional(),
  address: z.string().max(500, 'Address too long').optional(),
  subject: z.string().max(100, 'Subject too long').optional(),
  windowCount: z.string()
    .transform((val) => val === '' ? undefined : Number(val))
    .refine((val) => val === undefined || (val >= 1 && val <= 200), 'Window count must be between 1 and 200')
    .optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long').trim(),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Spam detected').optional(),
});

// Type inferred from Zod schema
// type ContactFormData = z.infer<typeof contactSchema>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP address
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0] : req.connection.remoteAddress || 'unknown';

  // Check rate limiting
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    // Validate input with Zod
    const validationResult = contactSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationResult.error.issues 
      });
    }

    const { name, email, phone, address, subject, windowCount, message, website } = validationResult.data;

    // Honeypot check - if website field is filled, it's likely spam
    if (website && website.length > 0) {
      return res.status(400).json({ error: 'Invalid submission' });
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2C3E50; border-bottom: 2px solid #4A5D7A; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #F8F9FA; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4A5D7A; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
          ${subject ? `<p><strong>Service Type:</strong> ${subject}</p>` : ''}
          ${windowCount ? `<p><strong>Approximate Windows:</strong> ${windowCount}</p>` : ''}
        </div>

        <div style="background-color: #FAF9F8; padding: 20px; border-radius: 8px;">
          <h3 style="color: #4A5D7A; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #E8F4FD; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #6C757D;">
            This email was sent from the ClearPoint Window Services contact form.
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'ClearPoint Contact Form <noreply@clearpointwindowservices.com>',
      to: ['linc2liam@gmail.com'],
      subject: subject ? `Contact Form: ${subject}` : `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}