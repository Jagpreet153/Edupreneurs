const express = require('express');
const nodemailer = require('nodemailer');


exports.getotp=async(req,res)=>{ 
// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "localhost",
  port: 25,
  auth: {
    user: "jskhurana153@gmail.com",
    pass : "jgqm ojrf ynpn zmuq"
  },
});
  const { email } = req.body;
  const otp = generateOTP();

  const mailOptions = {

    from: "jskhurana153@gmail.com",  // My gmail address
    to: email, 
    subject: 'Your OTP for verification',
    text: `Your OTP is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    // Here you might want to save the OTP in your database associated with the user's email
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
}

