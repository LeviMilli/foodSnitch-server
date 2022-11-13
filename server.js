const app = require("./app");
const express = require("express");
const apper = express();
const cors = require('cors');
const PORT = process.env.PORT || 5005;


apper.use(cors())

apper.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// tried https://foodsdsnitch.netlify.app/ as well


// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000





app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
