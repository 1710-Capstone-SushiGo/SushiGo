const User = require('./user');
const Game = require('./game');
const UserGame = require('./user_game')

Game.hasMany(User);
User.belongsToMany(Game, { through: UserGame });

module.exports = {
  User,
  Game
}