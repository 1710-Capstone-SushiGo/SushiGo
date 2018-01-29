const router = require('express').Router()
module.exports = router

//Make sure to add all routes here
router.use('/users', require('./users'));
router.use('/games', require('./games'));

router.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
})