const Sequelize = require('sequelize');
const db = require('../_db');

const UserGame = db.define('user_game', {
    winner: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    score: Sequelize.ARRAY(Sequelize.INTEGER)
});

module.exports = UserGame;