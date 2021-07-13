const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

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
