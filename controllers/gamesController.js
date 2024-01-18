const asyncHandler = require("express-async-handler");
const Game = require("../models/game");
const Category = require("../models/category");

exports.index = asyncHandler(async function (req, res, next) {
  const games = await Game.find().populate("category"); // Retrieve all games from the database
  const categories = await Category.find(); // Retrieve all categories from the database
  res.render("games", { title: "All Games", games, categories }); // Render the 'games/index' view, passing the games data
});

exports.create = asyncHandler(async function (req, res, next) {
  const newGame = new Game(req.body); // Create a new Game document with the data from the request body
  await newGame.save(); // Save the new Game document to the database
  res.redirect("/games"); // Redirect the user to the games list
});

exports.edit = asyncHandler(async function (req, res, next) {
  const gameId = req.params.gameId;
  const gameData = req.body;
  await Game.findByIdAndUpdate(gameId, gameData);
  res.sendStatus(200); // Send a 200 status code to indicate success
});

exports.delete = asyncHandler(async function (req, res, next) {
  const gameId = req.params.gameId;
  await Game.findByIdAndDelete(gameId);
  res.sendStatus(200); // Send a 200 status code to indicate success
});
