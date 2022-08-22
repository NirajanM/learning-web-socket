const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 3001;
app.use(cors);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    socket.on("send_ping", (text) => {
        socket.broadcast.emit("alert", text);
    })
});

httpServer.listen(3001, () => {
    console.log("listening to port", port)
});