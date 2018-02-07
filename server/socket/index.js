const generateHand = require('../../utils/gameLogic')
/*
server will receive start game signal from creater
server will send start game signal to other players with generated hands
*/
module.exports = (io) => {
    let counter = 0;
    let allUsers = [];
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)
        
        socket.on('endTurn', (current, room) => {
            counter++;
            allUsers.push(current);
            console.log(counter, allUsers)
            if (counter === 2) {
                let newState = passHand(allUsers);
                counter = 0;
                allUsers = [];
                io.in(room).emit('newUsersInfo', newState);
            }
        })

        socket.on('room', (room, user) => {
            socket.join(room)
            socket.in(room).emit('receiveUser', user)
        })

        socket.on('updatedUsers', (room, users) => {
            socket.in(room).emit('newUsers', users)
        })

        socket.on('readyStart', (room, users) => {
            startUsers = generateHand(users)
            io.in(room).emit('gameStart',startUsers)
        })

        socket.on('endRound', () => {
            socket.emit('refreshRound')
        })

        socket.on('endGame', () => {
            socket.emit('endGameFlag', true)
        })

        socket.on('test', () => {
            console.log('worked!')
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