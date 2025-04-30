const asyncHandler = require('express-async-handler');
const db = require("../model/messages");


const getMessages = asyncHandler(async (req, res) => {

  const messages = await db.getMessages();
  res.render("index", { linkText: "Add New Message", messages: messages});

});



module.exports = { getMessages };