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

module.exports = function generateHand(users, deck){
  if (!deck) deck = defaultDeck
  var deck = shuffle(deck)
  var numberPeople = users.length;
  var numberCards = cardsToDeal[numberPeople];
  var playerIdArray = generatePlayerId(numberPeople)
  users = users.map((user) => {
    if(!user.playerId) user.playerId = playerIdArray.splice(0,1)[0]
    if(!user.keep) user.keep = []
    if(!user.score) user.score = []
    user.hand = deck.splice(0, numberCards)
    return user
  })
  users = users.map((user) => {
    user.deck = deck
    return user
  })
  return users
}
