var app = require('express')();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    console.log('Connection from a user established');
    socket.on('disconnect',function(){
        console.log("User disconnected");
    });
    socket.on('chat message',function(msg){
        console.log('Message: '+msg);
        io.emit('chat message',msg);
    });        
});

http.listen(port, function(){
    console.log("listening on *:"+port);
});
