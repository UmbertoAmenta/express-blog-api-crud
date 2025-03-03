// const express = require("express")

const postsData = require("../data/posts");
const postRouter = require("../routers/posts");

// index
const index = (req, res) => {
  let postsSelected = postsData;

  const { tag } = req.query;
  if (tag) {
    postsSelected = postsSelected.filter((post) => {
      return post.tags.includes(tag);
    });
  }

  res.json(postsSelected);
};

// show
const show = (req, res) => {
  const postSelected = postsData.find((elm) => elm.id == req.params.id);

  res.json(postSelected);
};

// store
const store = (req, res) => {
  // console.log(req.body)

  // se ne occuperà il database
  const newId = postsData[postsData.length - 1].id + 1;

  const newPost = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine || "https://placehold.co/600x400",
    tags: req.body.tags,
    difficoltà: req.body.difficoltà,
    tempistiche: req.body.tempistiche,
    dellaTradizione: req.body.dellaTradizione,
  };
  postsData.push(newPost);

  res.status(201).json(newPost);
};

// update
const update = (req, res) => {
  const postSelected = postsData.find((elm) => elm.id == req.params.id);

  postSelected.titolo = req.body.titolo;
  postSelected.contenuto = req.body.contenuto;
  postSelected.immagine = req.body.immagine;
  postSelected.tags = req.body.tags;
  postSelected.difficoltà = req.body.difficoltà;
  postSelected.tempistiche = req.body.tempistiche;
  postSelected.dellaTradizione = req.body.dellaTradizione;

  res.json(postSelected);
};

// modify
const modify = (req, res) => {
  const postSelected = postsData.find((elm) => elm.id == req.params.id);
  postSelected.titolo = req.body.titolo || postSelected.titolo;
  postSelected.contenuto = req.body.contenuto || postSelected.contenuto;
  postSelected.immagine = req.body.immagine || postSelected.immagine;
  postSelected.tags = req.body.tags || postSelected.tags;
  postSelected.difficoltà = req.body.difficoltà || postSelected.difficoltà;
  postSelected.tempistiche = req.body.tempistiche || postSelected.tempistiche;
  postSelected.dellaTradizione =
    req.body.dellaTradizione || postSelected.dellaTradizione;

  // res.send(`Modifica parziale della ricetta n° ${req.params.id}`)
  res.json(postSelected);
};

// delete
const destroy = (req, res) => {
  const postSelected = postsData.find((elm) => elm.id == req.params.id);
  postsData.splice(postsData.indexOf(postSelected), "1");

  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
