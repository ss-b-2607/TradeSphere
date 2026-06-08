const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    const token = createSecretToken(user._id);

res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 3 * 24 * 60 * 60 * 1000,
});

res.status(201).json({
  success: true,
  message: "User signed up successfully",
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
  },
});
  } catch (error) {
    console.error("Signup error:", error);

    res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

   const token = createSecretToken(user._id);

res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 3 * 24 * 60 * 60 * 1000,
});

res.status(201).json({
  success: true,
  message: "User signed up successfully",
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
  },
});
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};