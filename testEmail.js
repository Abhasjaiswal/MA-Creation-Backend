import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendTestEmail = async () => {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Test domain
      to: 'your-email@example.com', // Replace with your email
      subject: 'Test Email from Resend',
      text: 'This is a test email from Resend!',
    });

    console.log('Email sent:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

sendTestEmail();

