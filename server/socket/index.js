const store = require('../store').store
const passHand = require('../store').passHand


module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`A socket connection to the server has been made: ${socket.id}`)


        socket.on('help', (msg) => {
            socket.emit('sendhelp', 'Pass Hand')
        })
        
        let counter = 0;
        let allUsers = [];
        socket.on('passHand', current => {
            counter++;
            allUsers.push(current);
            if (counter === 4) {
                let newState = passHand(allUsers);
                counter = 0;
                allUsers = [];
                socket.emit('newHand', newState);
            }
        })

        socket.on('disconnect', () => {
            console.log(`Connection ${socket.id} has left the building`)
        })
        
        // socket.on('disconnect', () => {
        //     console.log(`Connection ${socket.id} has left the building`)
        // })
    })
}