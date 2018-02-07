const generateHand = require('../../utils/gameLogic').generateHand
const passHand = require('../../utils/gameLogic').passHand
const updateUsersObject = require('../../utils/endRound')
const updateForEndGame = require('../../utils/endGame')

module.exports = (io) => {
    let counter = 0;
    let allUsers = [];
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)
        
        socket.on('endTurn', (current, room) => {
            counter++;
            allUsers.push(current);
            if (counter === current.numberOfPlayers) {
                let newState = passHand(allUsers);
                let updatedUsers
                counter = 0;
                allUsers = [];
                if (newState[0].hand.length === 0) updatedUsers = updateUsersObject(newState)
                if (updatedUsers && updatedUsers[0] && updatedUsers[0].score.length === 3) io.in(room).emit('endGame',updateForEndGame(updatedUsers))
                else io.in(room).emit('newUsersInfo', newState, updatedUsers);
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

        socket.on('disconnect', () => {
            console.log(`Connection ${socket.id} has left the building`)
        })
    })
}
