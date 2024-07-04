
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

router.get('/error', (req, res) => {
    // Simulate an error
    throw new Error('This is a simulated error!');
  });

module.exports = router;


