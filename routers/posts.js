const express = require("express")
const router = express.Router()
const postsController = require("../controllers/postsController")
const posts = require("../data/posts")

// Index
router.get("/", postsController.index)

// Show
router.get("/:id", postsController.show)

// Store
router.post("/", postsController.store)

// Update
router.put("/:id", postsController.update)

// Modify
router.patch("/:id", postsController.modify)

// Delete
router.delete("/:id", postsController.destroy)

module.exports = router