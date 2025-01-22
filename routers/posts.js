const express = require("express")
const postsData = require("../data/posts")
const router = express.Router()

// Index
router.get("/", (req, res) => {
    // res.send("Ricettario")
    res.json(postsData)
})

// Show
router.get("/:id", (req, res) => {
    // res.send(`Ricetta: ${req.params.id}`)
    const postSelected = postsData.find(function (elm) {
        return elm.id == req.params.id
    })
    res.json(postSelected)
})

// Store
router.post("/", (req, res) => {
    res.send("Aggiunta di una nuova ricetta")
})

// Update
router.put("/:id", (req, res) => {
    res.send(`Modifica integrale della ricetta n° ${req.params.id}`)
})

// Modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale della ricetta n° ${req.params.id}`)
})

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione della ricetta n° ${req.params.id}`)
})

module.exports = router