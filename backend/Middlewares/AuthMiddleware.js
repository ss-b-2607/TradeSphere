const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    console.log("COOKIE:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
      return res.json({
        status: false,
        message: "No token found",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    console.log("DECODED:", decoded);

    const user = await User.findById(decoded.id);

    console.log("USER:", user);

    if (!user) {
      return res.json({
        status: false,
        message: "User not found",
      });
    }

    return res.json({
      status: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("VERIFY ERROR:", err);

    return res.json({
      status: false,
      message: "Invalid token",
    });
  }
};