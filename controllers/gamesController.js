const asyncHandler = require("express-async-handler");
const Game = require("../models/game");
const Category = require("../models/category");

exports.index = asyncHandler(async function (req, res, next) {
  const games = await Game.find().populate("category"); // Retrieve all games from the database
  console.log(games);
  const categories = await Category.find(); // Retrieve all categories from the database
  res.render("games", { title: "All Games" , games, categories}); // Render the 'games/index' view, passing the games data
});
