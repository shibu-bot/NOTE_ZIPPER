const express = require("express");
const notes = require("./data/notes");
require("dotenv").config();

const app = express(); // craete an object
app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER IS RUNNING"));
