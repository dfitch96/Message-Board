const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { indexRouter } = require("./routers/indexRouter");
const { newRouter } = require("./routers/newRouter");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true} ));
app.use("/", indexRouter);
app.use("/new", newRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});