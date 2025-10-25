import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { dirname, join } from 'node:path';
import {ChatMessage} from "shared/src/index.js";
import dotenv from 'dotenv';
import {readFileSync} from "node:fs";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


const __dirname = dirname(__filename);
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: envFile });

app.get('/', (req, res) => {
  const filePath = join(__dirname, 'index.html');
  let html = readFileSync(filePath, 'utf8');

  html = html
    .replace(/{{BACKEND_PATH}}/g, process.env.BACKEND_PATH || '')

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.get('/master-arbeit', (req, res) => {
  res.sendFile(join(__dirname, 'master_arbeit.pdf'));
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