'use strict';

//INIT EXPRESS
var express = require('express');
var app = express();
//INIT HTTP SERVER CODE
var http = require('http').Server(app);
//INIT SOCKET.IO
var io = require('socket.io')(http);

//PREPARE ACE STATIC LINK
app.use('/ace', express.static(__dirname + '/node_modules/ace-builds'));
//PREPARE BOOTSTRAP STATIC LINK
app.use('/bootstrap', express.static(__dirname+'/node_modules/bootstrap'))
//PREPARE STATIC FILES FOR DISTRIBUTION
app.use('/static', express.static(__dirname + '/public'));

//INIT PUG TEMPLATE ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


//BEGIN HOSTING THE APP
var port = process.env.PORT;
http.listen(port,function(){
    console.log("The process is running on port:"+port);
});

//HOME ROUTE
app.get("/",function(req,res){
    res.render('home.pug');
    initSocketIO();
});

//HOME ROUTE TOO
app.get("/home",function(req,res){
    res.render('home.pug');
    initSocketIO();
});

//SNIPPIT CREATOR
app.get("/snippitCreator",function(req,res){
    res.render("snippitCreator.pug")
    initSocketIO();
})

//INITIALIZE ALL OF SOCKET.IO'S FUNCTIONS
function initSocketIO(){
    io.on('connection', function(socket){

    });
}