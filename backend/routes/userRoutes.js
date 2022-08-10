const express = require("express");
const router = express.Router();

const { protect, restrictTo } = require("../middleware/authMiddleware");

const { registerUser, loginUser } = require("../controllers/userController");

router.post("/signup", protect, registerUser);
router.post("/login", loginUser);

module.exports = router;
