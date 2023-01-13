const express = require("express");
const {
  getNotes,
  createNote,
  DeleteNote,
  UpdateNote,
  getNoteById,
} = require("../controllers/noteControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getNotes); //get all the notes.
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, createNote);

module.exports = router;
