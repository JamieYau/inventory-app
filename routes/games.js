// items.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.index); // Show all games
router.post("/", gamesController.create); // Save a new game
// router.get("/:id", itemsController.show); // Show a single item
// router.get("/:id/edit", itemsController.showEditForm); // Show the form to edit an existing item
// router.put("/:id", itemsController.update);
// router.delete("/:id", itemsController.delete);

module.exports = router;
