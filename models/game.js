const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    description: {
      type: String,
      maxLength: 200,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: String,
    qty: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
