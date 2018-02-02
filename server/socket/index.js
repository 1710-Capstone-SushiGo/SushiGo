module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)

        socket.on('new-state', (message) => {
            console.log('--------------',message)
            // socket.broadcast.emit('new-state', message)
        })
        socket.on('new-thing', (msg) => {
            socket.emit('new-thing', 'back to front!')
        })
        
        // socket.on('disconnect', () => {
        //     console.log(`Connection ${socket.id} has left the building`)
        // })
    })
}