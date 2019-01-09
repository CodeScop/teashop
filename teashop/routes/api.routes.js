var express = require('express')

var router = express.Router()
var teas = require('./api/teas.route')
var userRoutes = require('./api/user.route');

router.use('/teas', teas);
router.use('/user', userRoutes);

module.exports = router;