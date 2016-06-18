'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/ace', express.static(__dirname + '/node_modules/ace-builds'));
app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');



var port = process.env.PORT;
http.listen(port,function(){
    console.log("The process is running on port:"+port);
});

app.get("/",function(req,res){
    res.render('home.pug');
});
