var app = require('express')();
var http = requre('http').server(app);

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
    console.log('Listening on port 3000');
});