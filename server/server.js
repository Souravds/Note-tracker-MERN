const express = require("express");
const dotenv = require("dotenv");
const notes = require("../client/src/data/notes");

const app = express();

dotenv.config();
PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

//^^^^^^THESE R THE API's^^^^^^^^^

app.listen(PORT, console.log(`Server is running on ${PORT}`));
