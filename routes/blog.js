const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Route to render the publish form
router.get("/publish", (req, res) => {
    res.render("publish", { title: "Publish a Post" });
});

// Route to handle new post submission
router.post("/publish", async (req, res) => {
    const { title, content, author } = req.body;

    // Trim input to remove leading and trailing whitespace
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    const trimmedAuthor = author.trim();

    // Validate input lengths
    if (trimmedTitle.length < 3 || trimmedContent.length < 10 || trimmedAuthor.length < 2) {
        return res.status(400).send("Invalid input. Title must be at least 3 characters, content 10 characters, and author 2 characters.");
    }

    try {
        const newPost = new Post({
            title: trimmedTitle,
            content: trimmedContent,
            author: trimmedAuthor,
            createdAt: new Date(), // Ensure createdAt is set
        });

        await newPost.save();
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving the post. Please try again.");
    }
});

// Route to display all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.render("home", { posts });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving posts. Please try again.");
    }
});

module.exports = router;
