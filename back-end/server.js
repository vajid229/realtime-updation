const express = require('express')
const io = require('socket.io')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})