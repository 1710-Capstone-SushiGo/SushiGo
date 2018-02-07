const calculateWasabi = require('./cards/wasabi')
const calculateDumpling = require('./cards/dumpling')
const calculateSashimi = require('./cards/sashimi')
const calculateTempura = require('./cards/tempura')
const calculateEgg = require('./cards/nigiri').calculateEgg
const calculateSalmon = require('./cards/nigiri').calculateSalmon
const calculateSquid = require('./cards/nigiri').calculateSquid

var defaultDeck = [
'chopsticks','chopsticks','chopsticks','chopsticks',
'egg','egg','egg','egg','egg',
'dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling','dumpling',
'makiOne','makiOne','makiOne','makiOne','makiOne','makiOne',
'makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo','makiTwo',
'makiThree','makiThree','makiThree','makiThree','makiThree','makiThree','makiThree','makiThree',
'pudding','pudding','pudding','pudding','pudding','pudding','pudding','pudding','pudding','pudding',
'salmon','salmon','salmon','salmon','salmon','salmon','salmon','salmon','salmon','salmon',
'sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi','sashimi',
'squid','squid','squid','squid','squid',
'tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura','tempura',
'wasabi','wasabi','wasabi','wasabi','wasabi','wasabi'
]

var cardsToDeal= {
  2:10,
  3:9,
  4:8,
  5:7
}

function generatePlayerId(number){
  let playerIdArray = []
  for(var i=0; i<number; i++){
    playerIdArray.push(i)
  }
  return shuffle(playerIdArray)
}

function shuffle(deck) {
  var m = deck.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}

function generateHand(users, deck){
  if (!deck) deck = defaultDeck
  var deck = shuffle(deck)
  var playerIdArray
  var numberPeople = users.length;
  var numberCards = cardsToDeal[numberPeople];
  if(!users[0].playerId) playerIdArray = generatePlayerId(numberPeople)
  users = users.map((user) => {
    if(playerIdArray) user.playerId = playerIdArray.splice(0,1)[0]
    user.keep = []
    if(!user.score) user.score = []
    if(!user.pudding) user.pudding = 0
    user.hand = deck.splice(0, numberCards)
    return user
  })
  users = users.map((user) => {
    user.deck = deck
    return user
  })
  return users
}
function passHand(arrayOfUsers) {
    arrayOfUsers = arrayOfUsers.sort((user1, user2) => { return user1.userId - user2.userId })
    let temp = arrayOfUsers.map(elem => {
      return elem.hand
    })
    for (var i = 0; i < temp.length - 1; i++) {
      arrayOfUsers[i].hand = temp[(i + 1)]
    }
    arrayOfUsers[temp.length - 1].hand = temp[0]
    return arrayOfUsers;
}

function calculateRoundScore(userKeep) {
  let score = 0
  let wasabiInfo = calculateWasabi(userKeep)
  let newKeep = wasabiInfo.arrayOfCards;
  score += wasabiInfo.score;
  score += calculateDumpling(newKeep.filter((card) => card === 'dumpling').length)
  score += calculateSashimi(newKeep.filter((card) => card === 'sashimi').length)
  score += calculateTempura(newKeep.filter((card) => card === 'tempura').length)
  score += calculateEgg(newKeep.filter((card) => card === 'egg').length)
  score += calculateSalmon(newKeep.filter((card) => card === 'salmon').length)
  score += calculateSquid(newKeep.filter((card) => card === 'squid').length)
  return score;
}

module.exports ={
  generateHand,
  passHand,
  calculateRoundScore
}
