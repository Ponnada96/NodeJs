const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const userid = req.params.id;
    res.send(`User Id:  ${userid}`);
});

module.exports = router;