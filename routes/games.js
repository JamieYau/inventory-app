// items.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.index); // Show all games
router.post("/", gamesController.create); // Save a new game
router.post("/edit/:gameId", gamesController.edit); // Edit a game
router.post("/delete/:gameId", gamesController.delete); // Delete a game

module.exports = router;
