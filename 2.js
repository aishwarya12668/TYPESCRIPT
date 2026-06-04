var url = require('url');
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var a = q.a;
    var b = q.b;

    a = parseInt(a);
    b = parseInt(b);

    var c = a+b;
    res.write("THE ANSWER IS "+c);
    res.end();
}).listen(4000);

//http://localhost:4000/?a=10&b=20 run this address