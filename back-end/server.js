const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.use(express.static('public'))

io.on('connection', (socket) => {
    socket.on('bar1', (msg) => {
       io.emit('bar1',msg)
    })
    socket.on('bar2', (msg) => {
        io.emit('bar2',msg)
    })
});
  

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})