import devConfig from "../src/config/config.js";
import dotenv from "dotenv"
import nodemailer from 'nodemailer'



export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: devConfig.GOOGLE_USER,
    clientId: devConfig.GOOGLE_CLIENT_ID,
    clientSecret: devConfig.GOOGLE_CLIENT_SECRET,
    refreshToken: devConfig.GOOGLE_REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error:any, success:any) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
export const sendEmail = async (to:any, subject:any, text:any, html:any) => {
  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

