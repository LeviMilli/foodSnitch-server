// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
  origin: "*",
}))


const session = require('express-session');
const MongoStore = require('connect-mongo');
var corsOptions = {
  origin: 'https://foodsdsnitch.netlify.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}






app.use(session({
  secret: 'SQU14TL3', //Ideally this will be in you env file
  resave: false,
  saveUninitialized: false, 
  cookie: {
    maxAge: 1000 * 24* 60 * 60 // your cookie will be cleared after these seconds
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/foodSnitch",
    // Time to Live for sessions in DB. After that time it will delete it!
    ttl: 24* 60 * 60 // your session will be cleared after these seconds
  })
}));



// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const recipeRoutes = require("./routes/recipe.routes");
app.use("/api", recipeRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const uploadRoutes = require("./routes/file-upload.routes");
app.use("/api", uploadRoutes);






// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;