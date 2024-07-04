const express = require('express');
const app = express();
const port = 3000;

//Importing Routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');

//Importing middlewares

const errorHandler = require('./middlewares/errorHandler');

//Middle ware to parse Json bodies
app.use(express.json());

//Use ROutes
app.use(express.static('public'))
app.use('/', indexRoutes);
app.use('/user', userRoutes);


//Catall
app.use((req, res, next) => {
    res.status(404).send('NOT FOUND');
})

//Use Error Handler Middle ware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

