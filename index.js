var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 80;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
    console.log('A user has connected');
});