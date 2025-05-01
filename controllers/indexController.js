const asyncHandler = require('express-async-handler');
const db = require("../model/messages");


const getMessages = asyncHandler(async (req, res) => {

  const messages = await db.getMessages();
  res.render("index", { linkText: "Add New Message", route: "/new", messages: messages});

});

const getMessage = asyncHandler(async (req, res) => {

  const id = req.params.id;
  const message = await db.getMessage(Number(id));

  res.render("details", { linkText: "Messages", route: "/", message: message});
});



module.exports = { getMessages, getMessage };