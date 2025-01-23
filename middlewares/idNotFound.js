const postsData = require("../data/posts")

const mw_IsIdPresent = (req, res, next) =>{
    const postSelected = postsData.find(elm => elm.id == req.params.id)
    if (!postSelected) {
        return res.status(404).json({
          error: "Post not found",
        });
    }
    next()
}

module.exports = mw_IsIdPresent