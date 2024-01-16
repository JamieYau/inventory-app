const Category = require("../models/category");
const Game = require("../models/game");

async function createSampleData() {
  // Define some sample categories
  const categories = [
    { name: "Category 1", description: "This is category 1" },
    { name: "Category 2", description: "This is category 2" },
    { name: "Category 3", description: "This is category 3" },
  ];

  // Save each category to the database and collect their _ids
  const categoryIds = [];
  for (let categoryData of categories) {
    let category = await Category.findOne({ name: categoryData.name });
    if (!category) {
      category = new Category(categoryData);
      await category.save();
    }
    categoryIds.push(category._id);
  }

  // Define some sample games
  const games = [
    {
      name: "Game 1",
      description: "This is game 1",
      category: categoryIds[0],
      price: 10,
      img: "https://via.placeholder.com/150",
      qty: 10,
    },
    {
      name: "Game 2",
      description: "This is game 2",
      category: categoryIds[0],
      price: 20,
      img: "https://via.placeholder.com/150",
      qty: 20,
    },
    {
      name: "Game 3",
      description: "This is game 3",
      category: categoryIds[1],
      price: 30,
      img: "https://via.placeholder.com/150",
      qty: 30,
    },
    {
      name: "Game 4",
      description: "This is game 4",
      category: categoryIds[1],
      price: 40,
      img: "https://via.placeholder.com/150",
      qty: 40,
    },
    {
      name: "Game 5",
      description: "This is game 5",
      category: categoryIds[2],
      price: 50,
      img: "https://via.placeholder.com/150",
      qty: 50,
    },
    {
      name: "Game 6",
      description: "This is game 6",
      category: categoryIds[2],
      price: 60,
      img: "https://via.placeholder.com/150",
      qty: 60,
    },
  ];

  // Save each game to the database
  for (let gameData of games) {
    const game = new Game(gameData);
    await game.save();
  }

  console.log("Sample data has been created");
}

module.exports = createSampleData;