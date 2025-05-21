const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  summarizeAndSend,
} = require("../controllers/todoController");

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
router.post("/summarize", summarizeAndSend);

module.exports = router;
