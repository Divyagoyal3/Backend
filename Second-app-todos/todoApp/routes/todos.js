const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById}    = require("../controllers/getTodo");
const {updateTodo}   = require("../controllers/updateToDo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo", createTodo);

router.get("/getTodo",getTodo);
// by id
router.get("/getToDo/:id",getTodoById);

// update
router.put("/updateToDo/:id",updateTodo);

// delete to do
router.delete("/deleteToDo/:id", deleteTodo);

module.exports = router;