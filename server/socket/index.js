const reducer = require('../store').endTurn.reducer
const store = require('../store').store
const passHand = require('../store').endTurn.passHand
const state = require('../store').endTurn.state

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)

        socket.on('help', (msg) => {
            socket.emit('sendhelp', 'Pass Hand')
        })

        socket.on('passHand', playerId => {
            socket.emit('newHand', reducer(state,passHand(playerId)))
        })

        socket.on('disconnect', () => {
            console.log(`Connection ${socket.id} has left the building`)
        })
    })
}