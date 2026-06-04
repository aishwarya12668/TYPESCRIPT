var url = require('url');
var http = require('http');
function add(var1,var2)
{
    var ans;
    ans=var1+var2;
    return ans;
}
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var a = q.a;
    var b = q.b;

    a = parseInt(a);
    b = parseInt(b);

    var c = add(a,b);
    res.write("THE ANSWER IS "+c);
    res.end();
}).listen(4000);

