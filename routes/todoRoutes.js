const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

/* GET /todos */
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* POST /todos */
router.post("/", async (req, res) => {
  try {
    const { title, completed } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({ title, completed });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* GET /todos/:id */
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* PUT /todos/:id */
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* DELETE /todos/:id */
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

module.exports = router;