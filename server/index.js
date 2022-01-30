const express = require("express");
const app = express();
const cors = require("cors");
const catsRouter = require("./routes/cats");

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/cats", catsRouter);
app.use("/img", express.static("public/images"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
