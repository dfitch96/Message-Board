const asyncHandler = require('express-async-handler');
const db = require("../model/messages");



const getMessages = asyncHandler(async (req, res) => {

  const messages = await db.getMessages();

  res.send(messages);

});



module.exports = { getMessages };