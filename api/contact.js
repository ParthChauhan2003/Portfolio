import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle CORS preflight
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

  // Read credentials from environment variables (set in Vercel dashboard)
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Missing email credentials in environment variables');
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration before sending
    await transporter.verify();

    await transporter.sendMail({
      // IMPORTANT: 'from' must be YOUR authenticated Gmail account.
      // Gmail does not allow spoofing a different sender address.
      from: `"Portfolio Contact Form" <${GMAIL_USER}>`,
      // replyTo lets you reply directly to the person who filled the form
      replyTo: `"${name}" <${email}>`,
      to: GMAIL_USER,
      subject: `New QA Consultation Request from ${name}: ${projectType}`,
      text: `
You have a new QA Consultation request submitted via your portfolio website.

──────────────────────────────
Name:         ${name}
Email:        ${email}
Testing Type: ${projectType}
──────────────────────────────

Project Details:
${message}

──────────────────────────────
Reply directly to this email to respond to ${name}.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 20px;">
            📬 New QA Consultation Request
          </h2>
          <p style="color: #555; margin-bottom: 20px;">
            You have a new inquiry submitted via your portfolio website.
          </p>
          <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
            <tr style="background: #eff6ff;">
              <td style="padding: 12px 16px; font-weight: bold; color: #1e40af; width: 35%; border-bottom: 1px solid #e5e7eb;">Name</td>
              <td style="padding: 12px 16px; color: #374151; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #1e40af; width: 35%; border-bottom: 1px solid #e5e7eb;">Email</td>
              <td style="padding: 12px 16px; color: #374151; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr style="background: #eff6ff;">
              <td style="padding: 12px 16px; font-weight: bold; color: #1e40af; width: 35%; border-bottom: 1px solid #e5e7eb;">Testing Type</td>
              <td style="padding: 12px 16px; color: #374151; border-bottom: 1px solid #e5e7eb;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #1e40af; width: 35%; vertical-align: top;">Project Details</td>
              <td style="padding: 12px 16px; color: #374151; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">
            💡 Hit <strong>Reply</strong> to respond directly to <strong>${name}</strong> at <strong>${email}</strong>.
          </p>
          <div style="margin-top: 16px; padding: 12px 16px; background: #dbeafe; border-radius: 6px; font-size: 12px; color: #1e40af;">
            Submitted via <strong>parthchauhanqa.vercel.app</strong> contact form
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message || error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
