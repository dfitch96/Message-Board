const asyncHandler = require("express-async-handler");
const db = require("../model/messages");



const addMessage = asyncHandler(async (req, res) => {
  await db.addMessage(req.body);
  res.redirect("/");
});


module.exports = { addMessage }