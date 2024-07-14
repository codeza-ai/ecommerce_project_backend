const fs = require("fs");

function logReqRes(fileName) {
    return (req, res, next) => {
        fs.appendFile(
            fileName,
            `Method: ${req.method}, URL: ${req.url}, Time: ${new Date()}\n`,
            (err, data) => {
                if (err) {
                    console.log(err);
                }
            });
        next();
    }
}

module.exports = logReqRes;