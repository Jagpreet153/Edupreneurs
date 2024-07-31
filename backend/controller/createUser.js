const user = require("../model/user")   
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET

  try {
    const {name, email, password} = req.body;

    const salt = await bcrypt.genSalt(10);

    // Hash the password
    const hashedPass = await bcrypt.hash(password, salt)

    // Create the user
    const newUser = await user.create({
      name,
      email,
      password: hashedPass
    })

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    )

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        },
        token
      },
      message: "User created successfully"
    })
  }
  catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    })
  }
}