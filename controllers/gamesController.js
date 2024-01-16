const asyncHandler = require("express-async-handler");
const Game = require("../models/game");

exports.index = asyncHandler(async function (req, res, next) {
  const games = await Game.find(); // Retrieve all games from the database
  console.log(games);
  res.render("games", { games }); // Render the 'games/index' view, passing the games data
});
