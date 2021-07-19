const e = require("express");
const expressAsyncHandler = require("express-async-handler");
const { removeListener } = require("../models/noteModel");
const Note = require("../models/noteModel");

//user._id COME FROM authMiddleware

//GET THE NOTES FROM DATABASE
const getNotes = expressAsyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });

  res.json(notes);
});

//CREATE NOTE TO DATABASE CHECKING THE CREDENTIALS
const createNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Plaease fill all the fields");
  } else {
    const note = new Note({ user: req.user._id, title, content, category });
    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

//GET ONE'S NOTES BY ID
const getNoteById = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

//UPDATE THE NOTE FROM USER
const updateNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    (note.title = title), (note.content = content), (note.category = category);

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

//DELETE NOTE FROM USER
const deleteNote = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    await note.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
