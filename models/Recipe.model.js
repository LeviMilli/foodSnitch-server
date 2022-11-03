const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
  {
    
    makepublic: Boolean,
    ingredients: [Object],
    title: String,
    summary: String,
    image: String,
    readyInMinutes: Number,
    sourceUrl: String,
    dishTypes: [Object],
  },

);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
