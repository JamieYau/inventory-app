const asyncHandler = require("express-async-handler");
const Category = require("../models/category");

exports.index = asyncHandler(async function (req, res, next) {
  const categories = await Category.find(); // Retrieve all categories from the database
  console.log(categories);
  res.render("categories", { title: "Categories",categories }); // Render the 'categories/index' view, passing the categories data
});
