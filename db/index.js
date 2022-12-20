// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5005;
// const app = require("./app");
const express = require("express");
const app = express();


// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/foodSnitch";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
