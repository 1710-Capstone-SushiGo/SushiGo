const Sequelize = require('sequelize');
const db = require('../_db');

const Game = db.define('game', {
	started: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Game;