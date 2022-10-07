const express = require('express')
const app = express()
const path = require('path');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/webassembly-test1'));
app.use(express.static(__dirname + '/public/webassembly-test2'));
app.use(express.static(__dirname + '/public/webassembly-test3'));

app.get('/webassembly1', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/webassembly-test1/hello.html'));
})

app.get('/webassembly2', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/webassembly-test2/hello2.html'));
})

app.get('/webassembly3', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/webassembly-test3/hello3.html'));
})

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(8000)