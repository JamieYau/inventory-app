const asyncHandler = require("express-async-handler");
const Category = require("../models/category");
const Game = require("../models/game");

// show all categories
exports.index = asyncHandler(async function (req, res, next) {
  const categories = await Category.find(); // Retrieve all categories from the database
  console.log(categories);
  res.render("categories", { title: "Categories", categories }); // Render the 'categories/index' view, passing the categories data
});

// crate new category
exports.create = asyncHandler(async function (req, res, next) {
  const newCategory = new Category(req.body); // Create a new Category document with the data from the request body
  await newCategory.save(); // Save the new Category document to the database
  res.redirect("/categories"); // Redirect the user to the categories list
});

// show all games in a category
exports.showGames = asyncHandler(async function (req, res, next) {
  const categoryId = req.params.categoryId;
  const categories = await Category.find();
  const category = await Category.findById(categoryId);
  const games = await Game.find({ category: categoryId }).populate("category");
  res.render("games", { title: category.name, games, categories });
});

// delete category
exports.delete = asyncHandler(async function (req, res, next) {
  const categoryId = req.params.categoryId;
  await Game.deleteMany({ category: categoryId });
  await Category.findByIdAndDelete(categoryId);
  res.redirect("/categories");
});
