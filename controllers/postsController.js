// const express = require("express")

const postsData = require("../data/posts")
const postRouter = require("../routers/posts")

// index
const index = (req, res) => res.json(postsData)

// show
const show = (req, res) => {
    const postSelected = postsData.find(elm => elm.id == req.params.id)
    console.log(req.params.id)
    res.json(postSelected)
}

// store
const store = (req, res) => {
    // console.log(req.body)

    // se ne occuperà il database
    const newId = postsData[postsData.length -1].id +1

    const newPost = {
        id: newId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    }

    postsData.push(newPost)
    res.status(201).json(newPost)
}

// update
const update = (req, res) => {
    const postSelected = postsData.find((elm) => elm.id == req.params.id)

    postSelected.titolo = req.body.titolo
    postSelected.contenuto = req.body.contenuto
    postSelected.immagine = req.body.immagine
    postSelected.tags = req.body.tags    

    // res.send(`Modifica integrale della ricetta n° ${req.params.id}`)
    res.json(postSelected)
}

// modify
const modify = (req, res) => {
    res.send(`Modifica parziale della ricetta n° ${req.params.id}`)
}

// delete
const destroy = (req, res) => {
    const postSelected = postsData.find((elm) => elm.id == req.params.id)
    postsData.splice(postsData.indexOf(postSelected), "1")
    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}