const routes = require("express").Router();
const { getNotes, addNote, deleteNote } = require("../services/notes");

// notes routes
routes.get("/", getNotes);
routes.post("/add-note", addNote);
routes.delete("/delete-note/:id", deleteNote);

module.exports = routes;