const router = require("express").Router()
const todoController = require("./../controllers/Todo.controller")
router
    .get("/", todoController.getAlltodos)
    .post("/", todoController.addtodo)
    .put("/:id", todoController.updetetodo)
    .delete("/:id", todoController.deletetodo)

module.exports = router

