const createLoggerConfig = require("./CreateLoggerConfig");
const createProdLoggerConfig = require("./CreateProdLoggerConfig");

let logger;

if (process.env.NODE_ENV !== "production") {
    logger = createLoggerConfig();
}
else if (process.env.NODE_ENV === "production") {
    logger = createProdLoggerConfig();
}

module.exports = logger;