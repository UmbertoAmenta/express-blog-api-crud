const express = require("express")
const app = express()
const port = 3000

const postsData = require("./data/posts.js")
const postsRouter = require("./routers/posts.js")
const routeNotFound = require("./middlewares/routeNotFound.js")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(express.static("pubblic"))
app.use(express.json())

app.use("/posts", postsRouter)

// Server
app.get("/", (req, res) => {
  res.send("Server del blog")
})

app.use(errorHandler)
app.use(routeNotFound)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})    