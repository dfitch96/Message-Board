
const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);
messageRouter.get("/details/:id", messageController.getMessage);
messageRouter.get("/new", messageController.createMessageGet);
messageRouter.post("/new", messageController.createMessagePost);



module.exports = { messageRouter };

