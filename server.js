const app = require("./app");

const cors = require('cors');

app.use(cors({
  origin: "https://foodsdsnitch.netlify.app/",
}))



// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
