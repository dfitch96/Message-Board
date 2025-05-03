
const { Router } = require("express");
const { getMessages, getMessage, addMessage } = require("../controllers/messageController");

const messageRouter = Router();


messageRouter.get("/", getMessages);
messageRouter.get("/details/:id", getMessage);

messageRouter.get("/new", (req, res) => {
  res.render("form", { linkText: "Messages", route: "/"});
});


messageRouter.post("/new", addMessage);



module.exports = { messageRouter };

