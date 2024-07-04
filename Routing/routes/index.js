
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to home page');
})

router.get('/about', (req, res) => {
    res.send('About page');
})

router.get('/contact', (req, res) => {
    res.send('Contact US page');
});

module.exports = router;
