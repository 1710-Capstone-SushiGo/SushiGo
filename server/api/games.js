const router = require('express').Router();
const { Game, User } = require('../db/models');

router.get('/', (req, res, next) => {
    Game.findAll()
        .then(games => res.json(games))
        .catch(next);
});

router.post('/', (req, res, next) => {
    Game.create(req.body)
        .then(game => res.status(201).json(game))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Game.findById(req.params.id,
        {
            include: [User],
            attributes: ['id', 'email']
        })
        .then(game => {
            if (!game) res.status(404).end()
            else res.json(game)
        })
        .catch(next);
});

module.exports = router;