const { Router } = require("express");
const { addMessage } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", { linkText: "Messages", route: "/"});
});


newRouter.post("/", addMessage);



module.exports = { newRouter };