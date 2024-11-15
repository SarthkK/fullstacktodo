const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sarthk:admin@backend.i9mpn.mongodb.net/todo");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
