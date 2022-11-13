const app = require("./app");
const express = require("express");
const apper = express();
const cors = require('cors');
const PORT = process.env.PORT || 5005;
var corsOptions = {
  origin: 'https://foodsdsnitch.netlify.app/',
  optionsSuccessStatus: 200,
  credentials: true, origin: true
}

apper.use(cors(corsOptions))

// tried https://foodsdsnitch.netlify.app/ as well


// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000





app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
