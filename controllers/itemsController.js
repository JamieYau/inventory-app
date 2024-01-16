const asyncHandler = require("express-async-handler");
const Item = require("../models/item");

exports.index = asyncHandler(async function (req, res, next) {
  const items = await Item.find(); // Retrieve all items from the database
  res.render("items", { items }); // Render the 'items/index' view, passing the items data
});
