const express = require("express");
const app = express();

app.get('/test', (req, res) => {
    console.log('Request Received');
    debugger
    res.send("Hello world")
});

app.listen(3000)