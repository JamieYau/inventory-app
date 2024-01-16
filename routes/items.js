// items.js
const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/", itemsController.index); // Show all items
// router.get("/create", itemsController.showCreateForm); // Show the form to create a new item
// router.post("/", itemsController.create); // Save a new item
// router.get("/:id", itemsController.show); // Show a single item
// router.get("/:id/edit", itemsController.showEditForm); // Show the form to edit an existing item
// router.put("/:id", itemsController.update);
// router.delete("/:id", itemsController.delete);

module.exports = router;
