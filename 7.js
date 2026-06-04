var http = require('http');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/values', function (req, res) {
    var rr = "<html>";
    rr += "<body>";
    rr += "<form method='post' action='addition'>";
    rr += "First number"+"<input type='text' name='one' value=' '>";
    rr += "Second number:"+"<input type='text' name='two' value=''>";
    rr += "<input type='submit' name='t' value='Add '>";
    rr += "</form>";
    rr += "</body>";
    rr += "</html>";

    res.send(rr);
})
app.post('/addition', urlencodedParser, function (req, res) {
    var a = req.body.one;
    var b = req.body.two;

    a = parseInt(a);
    b = parseInt(b);

    var c = a + b;

    res.send("Sum of " + a + " and " + b + " is " + c);
}).listen(9000);

//to run: http://localhost:9000/values