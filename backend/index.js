const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/todo", (req, res) => {
  if (!createTodo.safeParse(req.body).success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
    return;
  }
  //   add to backend
});
app.get("/todo", (req, res) => {});
app.put("/completed", (req, res) => {
  if (!updateTodo.safeParse(req.body).success) {
    res.status(411).json({
      msg: "wrong data inputs",
    });
    return;
  }
  //   send to backend
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
