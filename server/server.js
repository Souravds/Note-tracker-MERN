const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// ----------------- DEPLOYMENT -------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// ----------------- DEPLOYMENT -------------------

app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

//^^^^^^THESE R THE API's^^^^^^^^^

app.listen(PORT, console.log(`Server is running on ${PORT}`));
