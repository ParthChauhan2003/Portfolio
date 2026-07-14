import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, projectType, message } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: 'parthc004@gmail.com',
      subject: `New QA Consultation Request: ${projectType}`,
      text: `
Name: ${name}
Email: ${email}
Testing Type: ${projectType}

Project Details:
${message}
      `,
      html: `
        <h3>New QA Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Testing Type:</strong> ${projectType}</p>
        <p><strong>Project Details:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
