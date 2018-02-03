const router = require('express').Router();
const { User, Game } = require('../db/models');

router.get('/', (req, res, next) => {
    User.findAll({
        attributes: ['id', 'name']
    })
        .then(users => res.json(users))
        .catch(next);
});

router.post('/', (req, res, next) => {
    User.create(req.body)
        .then(user => res.status.json(user))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    if (req.user && req.user.id === req.params.id)
        User.findById(req.params.id, { include: [Game] })
            .then(user => {
                if (!user) res.status(404).end();
                else res.json(user);
            })
            .catch(next);
    else next();
});

module.exports = router;
