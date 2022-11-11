const router = require("express").Router();
const authRoutes = require("./auth.routes");
var cors = require('cors')
var app = express()
app.use(cors())
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

module.exports = router;