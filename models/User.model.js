const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: String,
    googleId: String,
    password: String,
    
  },
  {
 
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
