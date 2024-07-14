const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function connectMon(url) {
    return mongoose.connect(url);
};

module.exports = connectMon;