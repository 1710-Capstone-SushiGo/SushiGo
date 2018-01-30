const router = require('express').Router()
module.exports = router

//Make sure to add all routes here
router.use('/users', require('./users'));
router.use('/games', require('./games'));
