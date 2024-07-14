
// exports.verifyOtp = async (req, res) => {
//     const User = require('../model/user');
// const { email, otp } = req.body;
// const user = await User.findOne({ email });
// if (!user) {
//   return res.status(404).json({ message: 'User not found' });
// }

// // Check if OTP exists and is not expired
// if (!user.otp || !user.otpExpiration) {
//   return res.status(400).json({ message: 'No OTP request found' });
// }

// if (user.otp !== otp) {
//   return res.status(400).json({ message: 'Invalid OTP' });
// }

// if (user.otpExpiration < new Date()) {
//   return res.status(400).json({ message: 'OTP has expired' });
// }

// // OTP is valid
// // Clear the OTP fields
// user.otp = null;
// user.otpExpiration = null;
// await user.save();

// res.json({ message: 'OTP verified successfully' });
// }