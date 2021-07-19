const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//GET ALL THE NOTES
router.route("/").get(protect, getNotes);

//CREATE THE NOTES
router.route("/create").post(protect, createNote);

//READ ONE'S ID NOTES
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;
