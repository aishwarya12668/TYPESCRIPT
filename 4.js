var url = require('url');
var http = require('http');
var dt = require('./mymodule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var a = q.a;
    var b = q.b;

    a = parseInt(a);
    b = parseInt(b);

    res.write("THE  ADDITION ANSWER IS "+dt.add(a,b)+'<br>');
    res.write("THE  SUBTRACTTION ANSWER IS "+dt.sub(a,b)+'<br>');
    res.write("THE  MULTIPLICATION ANSWER IS "+dt.mul(a,b)+'<br>');
    res.write("THE  DIVISION ANSWER IS "+dt.div(a,b)+'<br>');
    res.end();
}).listen(4000);