const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const restrictTo = (...roles) => {
  console.log(roles);
  return (req, res, next) => {
    // roles ['admin', 'user']. role='user'
    console.log("emntered");
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new Error("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

module.exports = { protect, restrictTo };
