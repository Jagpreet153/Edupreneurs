const express = require('express');
const User = require('../model/user'); // Adjust the path as needed
const nodemailer = require('nodemailer');
const Class = require('../model/class');
// Create a new class

function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({length: 6}, () => 
    characters[Math.floor(Math.random() * characters.length)]
  ).join('');
}

exports.createClass=async(req,res)=>{ 
  try {
    const {email,role, packageName, className, amount, maxStudents, parent } = req.body;
    
    // Assuming you have the user's ID from authentication
    // const userId = user.email;
    const user = await User.findOne({email});
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "localhost",
      port: 587,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass : process.env.SENDER_PASSWORD
      },
    });
      const code = generateCode();

      const mailOptions = {

        from: process.env.SENDER_EMAIL,
        to: email, 
        subject: 'Details of class created',
        text: `Congratulations , for creating a new class . Your code for joining class: ${code}`
      };
      await transporter.sendMail(mailOptions);
    const newClass = {
      role,
      packageName,
      className,
      amount,
      maxStudents,
      parent: parent || null,
      createdAt: new Date(),
      code:code
    };
    
    user.classes.push(newClass);
    await user.save();
    
  //  const classMembers = await Class.create({
  //       email: user?.email,
  //       participant: null,
  //  });
  //  console.log(classMembers);
    
    res.status(201).json(
      { message: 'Class created successfully', class: newClass }
    );
  } catch (error) {
    console.error('Error creating classes:', error);
    res.status(500).json({ message: 'Error creating class', error: error.message });
  }
};

