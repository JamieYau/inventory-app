const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.index); // Show all items
router.post("/", categoriesController.create); // Create new item
router.get("/:categoryId/games", categoriesController.showGames); // Show all games in a category
router.post("/edit/:categoryId", categoriesController.edit);
router.post('/delete/:categoryId', categoriesController.delete);

module.exports = router;
