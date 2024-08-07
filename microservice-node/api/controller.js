'use strict';
const properties = required('../package.json');
var distance = require('../service/distance');

const controller = {
    about: function (req, res) {
        let aboutInfo = { name: properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    get_distance: function (req, res) {
        distance.find(req, res, function (err, dist) {
            if (err) res.send(err);
            res.json(dist)
        })
    }
}
module.exports = controller;