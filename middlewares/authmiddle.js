const {getAdmin} = require("../services/auth.js");

async function restrictToLoggedIn(req, res, next) {
    const sessionId = req.cookies?.sessionId;
    if(!sessionId) return res.status(401).json({message: "Unauthorized access"});
    const admin = getAdmin(sessionId);
    if(!admin) return res.status(401).json({message: "Unauthorized access"});
    else {
        req.admin = admin;
        next();
    }
}

module.exports = restrictToLoggedIn;

