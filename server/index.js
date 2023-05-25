const http=require("http");
const express = require("express");
const cors = require("cors");

const socketIO = require ("socket.io");

const app = express();

const port = 4500 || process.env.PORT;

const users=[{}];

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello It's Working")

})



const server = http.createServer(app);

const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");

    socket.on('joined',({user})=>{
        users[socket.id]=user;
        console.log(`${user}has joined`);
        console.log(socket.id);

        socket.broadcast.emit('userjoined',{user:"Admin",message:`${users
        [socket.id]}has joined`});

        socket.emit('Welcome',{user:"Admin",message:`Welcome to the chat,$
        {users[socket]}`})
    });
});

server.listen(port,()=>{
    console.log(`Working`);
})
