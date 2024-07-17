const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
exports.auth = (req, res, next) => {
    try {
        console.log('Cookies:', req.cookies);
        console.log('Body:', req.body);
        console.log('Authorization Header:', req.header("Authorization"));

        const token = req.cookies?.token || req.body?.token || req.header("Authorization")?.replace("Bearer ", "");
        
        console.log('Extracted token:', token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
    } catch (err) {
        console.error('General error:', err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};