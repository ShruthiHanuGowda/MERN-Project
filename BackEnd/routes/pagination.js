const express = require("express")
const router = express.Router()
const Subscriber = require("../models/subscriber")

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

        //Calculate total pages
        const totalItems = await model.countDocuments()
        const totalPages = Math.ceil(totalItems / limit)
        results.totalItems = totalItems
        results.totalPages = totalPages

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
