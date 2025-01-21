const express = require("express");

const router = express.Router();

// POST localhost:5000/api/auth/register
router.post("/register", registerUser);

// POST localhost:5000/api/auth/login
router.post("/login", loginUser);

module.exports = router;