const postsData = require("../data/posts")

const mw_IsIdValid = (req, res, next) => {
    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }
    next()
}

module.exports = mw_IsIdValid