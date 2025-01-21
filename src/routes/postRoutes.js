
const express = require("express");

const router = express.Router();

// GET localhost:5000/api/posts/
router.get("/" ,() => {
    console.log("This is a get all posts screen.");
});

// POST localhost:5000/api/posts/
router.post("/", () => {
    console.log("This is a create a post screen.");
});

module.exports = router;