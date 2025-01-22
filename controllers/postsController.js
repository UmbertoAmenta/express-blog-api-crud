const postsData = require("../data/posts")

// index
const index = (req, res) => res.json(postsData)

// show
const show = (req, res) => {
    const postSelected = postsData.find(elm => elm.id == req.params.id)
    res.json(postSelected)
}

// store
const store = (req, res) => res.send("Aggiunta di una nuova ricetta")

// update
const update = (req, res) => {
    res.send(`Modifica integrale della ricetta n° ${req.params.id}`)
}

// modify
const modify = (req, res) => {
    res.send(`Modifica parziale della ricetta n° ${req.params.id}`)
}

// delete
const destroy = (req, res) => {
    res.send(`Eliminazione della ricetta n° ${req.params.id}`)
}

module.exports = {index, show, store, update, modify, destroy}