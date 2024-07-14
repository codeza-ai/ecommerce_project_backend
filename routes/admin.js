const express = require("express");
const adminRouter = express.Router();
const {adminSignup, adminLogin} = require("../controllers/admin.js");

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);

module.exports = adminRouter;