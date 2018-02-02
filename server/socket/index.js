module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)

<<<<<<< HEAD
        socket.on('new-state', (message) => {
            console.log('--------------',message)
            // socket.broadcast.emit('new-state', message)
=======
        socket.on('help', (msg) => {
        	socket.emit('sendhelp', 'help sent')
>>>>>>> 485e2c74ebff76eb626a629bc47efc6c200c6550
        })
        socket.on('new-thing', (msg) => {
            socket.emit('new-thing', 'back to front!')
        })
        
        // socket.on('disconnect', () => {
        //     console.log(`Connection ${socket.id} has left the building`)
        // })
    })
}