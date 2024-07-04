const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const userid = req.params.id;
    res.send(`User Id:  ${userid}`);
});

router.get('userInfo/:id', (req, res) => {
    throw new Error("User Info not found");
})

module.exports = router;