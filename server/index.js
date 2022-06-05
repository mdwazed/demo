const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const messages = []

app.get('/', (req, res) => {

  // Sending the response
  res.send('Hello World!')

  // Ending the response
  res.end()
})

io.on('connection', (socket) => {
  const username = socket.handshake.query.username
  socket.on('message', (data) => {
    const message = {
      message: data.message,
      senderUsername: username,
      sentAt: Date.now()
    }
    messages.push(message)
    io.emit('message', message)

  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});