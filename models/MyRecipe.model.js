const { Schema, model } = require("mongoose");
require("./User.model")
require("./Recipe.model")
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const myrecipeSchema = new Schema(
  {
    
    UserId : {
        ref: 'User',
        type: Schema.Types.ObjectId
      } 
    ,
    
      RecipeId : {
        ref: 'Recipe',
        type: Schema.Types.ObjectId
      }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const MyRecipe = model("MyRecipe", myrecipeSchema);

module.exports = MyRecipe;
