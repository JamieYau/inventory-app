const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.index); // Show all items
router.post("/", categoriesController.create); // Create new item

module.exports = router;
