const asyncHandler = require("express-async-handler");
const Category = require("../models/category");

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
