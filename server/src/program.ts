import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Not implemented");
});

app.put("/", (req, res) => {
  res.send("Not implemented");
});

app.delete("/", (req, res) => {
  res.send("Not implemented");
});

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
