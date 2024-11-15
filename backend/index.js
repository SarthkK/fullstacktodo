const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/todo", async (req, res) => {
  const payload = req.body;
  if (!createTodo.safeParse(payload).success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
    return;
  }
  try {
    await todo.create({
      title: payload.title,
      description: payload.description,
      completed: false,
    });
    res.json({
      msg: "todo created",
    });
  } catch (error) {
    res.json({
      msg: "couldn't create todo",
    });
  }
});
app.get("/todo", async (req, res) => {
  try {
    const todos = await todo.find({});
    return res.status(200).json({ todos });
  } catch (error) {
    return res.json({
      msg: "couldn't retrieve tasks",
    });
  }
});
app.put("/completed", async (req, res) => {
  const payload = req.body;
  if (!updateTodo.safeParse(payload).success) {
    res.status(411).json({
      msg: "wrong data inputs",
    });
    return;
  }
  try {
    await todo.updateOne(
      {
        _id: payload.id,
      },
      { completed: true }
    );

    return res.status(200).json({
      msg: "todo marked as completed",
    });
  } catch (error) {
    return res.json({
      msg: "error updating task",
    });
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
