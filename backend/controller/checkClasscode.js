const User = require("../model/user");
const Class = require("../model/class");
exports.checkClasscode = async (req, res) => {
    const { email, classCode } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const classExists = user.classes.some(cls => cls && cls.code === classCode);

        if (classExists) {
            const classMembers = await Class.create({
                // name,
                // email,
                // password: hashedPass
                })

            return res.status(200).json({
                success: true,
                message: 'Class found'
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Invalid class code"
            });
        }
    } catch (err) {
        console.error('Error in checkClasscode:', err, req.body);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error"
        });
    }
};