const express = require("express")
const app = express()
const port = 3000

const postsData = require("./data/posts.js")
const postsRouter = require("./routers/posts.js")

app.use(express.static("pubblic"))
app.use("/posts", postsRouter)

// Server
app.get("/", (req, res) => {
    res.send("Server del blog")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})    