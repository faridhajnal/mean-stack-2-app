var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index'); //'root' route for the server (localhost:3000/)
});

module.exports = router;
