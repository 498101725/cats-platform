const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const cors = require("cors");
const catsRouter = require("./routes/cats");

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.use("/cats", catsRouter);
app.use("/img", express.static("public/images"));
app.use("/uploads", express.static("public/uploads"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
