const express = require('express')
const app = express()
const path = require('path');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/hello.html'));
})

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(8000)