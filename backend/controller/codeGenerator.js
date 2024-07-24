const express = require('express');
const nodemailer = require('nodemailer');


exports.codeGenerator=async(req,res)=>{ 
  const User = require('../model/user') 
// Function to generate a random 6-digit OTP
function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({length: 6}, () => 
    characters[Math.floor(Math.random() * characters.length)]
  ).join('');
}




// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "localhost",
  port: 587,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass : process.env.SENDER_PASSWORD
  },
});
  const { email } = req.body;
  const code = generateCode();

  const mailOptions = {

    from: process.env.SENDER_EMAIL,
    to: email, 
    subject: 'Code for joining class',
    text: `Your code for joining class: ${code}`
  };

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // console.log(user.otp);
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Code sent successfully' });
  }  catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send code' });
  }
}
