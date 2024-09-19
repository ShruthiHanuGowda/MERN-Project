const express = require("express")
const router = express.Router()
const Subscriber = require("../models/subscriber")

const users = [
    { id: 1, name: "user 1" },
    { id: 2, name: "user 2" },
    { id: 3, name: "user 3" },
    { id: 4, name: "user 4" },
    { id: 5, name: "user 5" },
    { id: 6, name: "user 6" },
    { id: 7, name: "user 7" },
    { id: 8, name: "user 8" },
    { id: 9, name: "user 9" },
    { id: 10, name: "user 10" },
    { id: 11, name: "user 11" },
    { id: 12, name: "user 12" },
    { id: 13, name: "user 13" },
    { id: 14, name: "user 14" },
    { id: 15, name: "user 15" },
]

//use router which needs to be paginated
router.get("/", paginatedResults(Subscriber), (req, res) => {
    res.json(res.paginatedResult)
})

//created paginate middleware function which will work for any models
function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        //set up the start and end index
        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }

        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResult = results
            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = router
