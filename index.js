const express = require('express')
const app = express()
const path = require('path');

//app.use(express.staticProvider(__dirname + '/public'));
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   // res.render('hello.html')
    res.sendFile(path.join(__dirname+'/public/hello.html'));
})

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(8000)