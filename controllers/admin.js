const Admin = require("../models/admin.js")
const { v4: uuidv4 } = require('uuid');
const { setAdmin} = require("../services/auth.js");

async function adminSignup(req, res) {
    const body = req.body;
    await Admin.create({
        userId: body.userId,
        email: body.email,
        password: body.password
    })

    return res.status(201).json({ status: "Created new admin" });
}

async function adminLogin(req, res) {
    const body = req.body;

    const admin = await Admin.findOne({userId: body.userId, password: body.password});
    if(!admin) return res.status(400).json({status: "Incorrect username or password"});

    const sessionId = uuidv4();
    setAdmin(sessionId, admin);
    res.cookie("sessionId", sessionId)
    //Using cookies to store session id
    return res.status(201).json({ status: "Access granted" });
    // .redirect("/products/update");
}

module.exports = {adminSignup, adminLogin};