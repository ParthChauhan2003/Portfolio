import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'parthc004@gmail.com',
    pass: 'kbhx uvvj wiax kwuk'
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Send email to yourself (the site owner)
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address (doesn't always override gmail's from, but sets reply-to)
      replyTo: email, // ensure you can reply to the sender
      to: 'parthc004@gmail.com', // list of receivers
      subject: `New QA Consultation Request: ${projectType}`, // Subject line
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}
      `, // plain text body
      html: `
        <h3>New QA Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `, // html body
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
