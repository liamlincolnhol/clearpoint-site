import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  subject?: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, address, subject, message }: ContactFormData = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
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
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
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