const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var routes = require('./api/routes');
routes(app);

app.listen(port, () =>
    console.log(`Server strated on http://localhost:${port}`));