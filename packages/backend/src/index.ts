import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { dirname, join } from 'node:path';
import {ChatMessage} from "shared/src/index.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


const __dirname = dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log("Connected clients:", io.sockets.sockets.size);
  io.emit('clients count', io.sockets.sockets.size);

  socket.on('chat message', (msg: ChatMessage) => {
    io.emit('chat message', msg);
  });

  socket.on("disconnect", () => {
    console.log("Connected clients:", io.sockets.sockets.size);
    io.emit('clients count', io.sockets.sockets.size);
  });
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});