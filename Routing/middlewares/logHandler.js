const logHandler = (req, res, next) => {
    console.log("started Executing the request", req)
    next();
}

module.exports = logHandler;