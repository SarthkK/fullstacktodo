const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/todo", (req, res) => {
  if (createTodo.safeParse(req.body).success === true) {
  } else {
  }
});
app.get("/todo", (req, res) => {});
app.put("/completed", (req, res) => {
  if (updateTodo.safeParse(req.body).success === false) {
  } else {
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
