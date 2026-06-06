const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.userId = data.id;
    next();
  });
};

module.exports = { requireAuth };