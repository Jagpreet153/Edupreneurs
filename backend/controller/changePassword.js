const express = require('express');
const bcrypt = require('bcrypt');

exports.changePassword = async (req, res) => {
   const User = require('../model/user');
try {
  const { email, otp, newPassword } = req.body;

//   // Input validation
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: 'Email, OTP, and new password are required' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check if OTP exists and is not expired


if (!user.otp || !user.otpExpiration) {
  return res.status(400).json({ message: 'No OTP request found' });
}

if (user.otp !== otp) {
  return res.status(400).json({ message: 'Invalid OTP' });
}

if (user.otpExpiration < new Date()) {
  return res.status(400).json({ message: 'OTP has expired' });
}

   // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

   // Update user's password and clear OTP fields
  user.password = hashedPassword;
  user.otp = null;
  user.otpExpiration = null;

  await user.save();

  res.json({ message: 'Password changed successfully' });
} catch (error) {
  console.error('Error in change-password:', error);
  res.status(500).json({ message: 'Internal server error' });
}

};