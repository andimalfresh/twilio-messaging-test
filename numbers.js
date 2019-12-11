  
const express = require("express")
const router = express.Router()
const queries = require("./queries_numbers.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(numbers => res.status(200).send(numbers))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(numbers => res.status(200).send(numbers))
    })
    router.post("/", (req, res, next) => {
        queries.createOrder(req.body).then(numbers => res.status(201).send(numbers))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteOrder(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateOrder(req.params.id, req.body).then(numbers => res.json(numbers))
    })   

    module.exports = router