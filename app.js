const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { messageRouter } = require("./routers/messageRouter");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true} ));
app.use("/", messageRouter);


app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});