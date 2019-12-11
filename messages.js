  
const express = require("express")
const router = express.Router()
const queries = require("./queries_messages.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(messages => res.status(200).send(messages))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(messages => res.status(200).send(messages))
    })
    router.post("/", (req, res, next) => {
        queries.createOrder(req.body).then(messages => res.status(201).send(messages))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteOrder(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateOrder(req.params.id, req.body).then(messages => res.json(messages))
    })   

    module.exports = router