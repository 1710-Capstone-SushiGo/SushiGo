const crypto = require('crypto');
const _ = require('lodash');
const Sequelize = require('sequelize');

const db = require('../_db');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    wins: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    password: Sequelize.STRING,
    salt: Sequelize.STRING
}, {
        hooks: {
            beforeCreate: setSaltAndPassword,
            beforeUpdate: setSaltAndPassword
        }
    });

User.prototype.correctPassword = function (candidatePassowrd) {
    return this.Model.encrytPassword(candidatePassowrd, this.salt) === this.password;
};

User.prototype.sanitize = function () {
    return _.omit(this.toJSON(), ['password', 'salt']);
};

User.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

User.encrytPassword = function (plainText, salt) {
    const hash = crypto.createHash('RSA-SHA256');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

function setSaltAndPassword(user) {
    if (user.changed('password')) {
        user.salt = User.generateSalt();
        user.password = User.encrytPassword(user.password, user.salt);
    }
}

module.exports = User;