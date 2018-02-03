const store = require('../store').store


module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)
        
        let counter = 0;
        let allUsers = [{ username: 'Nick', userId: '2', socketId: '678', keep: ['wasabi'], hand: ['maki1', 'makiTwo'] }];
        socket.on('passHand', current => {
            counter++;
            allUsers.push(current);
            if (counter === 1) {
                let newState = passHand(allUsers);
                counter = 0;
                allUsers = [];
                socket.emit('newUsers', newState);
            }
        })

        socket.on('disconnect', () => {
            console.log(`Connection ${socket.id} has left the building`)
        })
    })
}

const passHand = (arrayOfUsers) => {
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