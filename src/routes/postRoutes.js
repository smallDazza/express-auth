const express = require("express");

const router = express.Router();

// GET localhost:5000/api/posts/
router.get("/", getAllPosts);

// POST localhost:5000/api/posts/
router.post("/", createPost);

module.exports = router;
