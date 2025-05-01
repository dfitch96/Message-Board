
const { Router } = require("express");
const { getMessages, getMessage } = require("../controllers/indexController");

const indexRouter = Router();


indexRouter.get("/", getMessages);
indexRouter.get("/details/:id", getMessage);



module.exports = { indexRouter };

