const asyncHandler = require('express-async-handler');
const db = require("../model/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessages = asyncHandler(async (req, res) => {

  const messages = await db.getMessages();
  if(!messages){
    throw new CustomNotFoundError("Messages not found");
  }
  res.render("index", { linkText: "Add New Message", route: "/new", messages: messages});
});

const getMessage = asyncHandler(async (req, res) => {

  const id = req.params.id;
  const message = await db.getMessage(Number(id));
  if(!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("details", { linkText: "Messages", route: "/", message: message});
});

const createMessageGet = asyncHandler( async (req, res) => {
  res.render("form", { linkText: "Messages", route: "/"});
});


const createMessagePost = asyncHandler(async (req, res) => {
  await db.addMessage(req.body);
  res.redirect("/");
});




module.exports = { 
  getMessages, 
  getMessage, 
  createMessagePost,
  createMessageGet,
};