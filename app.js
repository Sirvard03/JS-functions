http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('isPrime!');
}).listen(8080);
function isPrime(n)
{
  if (n<=1)
  { return 0

  }
  else if (n==2)
  {
    return 1
  }else
  {
    for (var i=2; i<n; i++)
    {
      if(n%i==0)
      {
        return 0
      }
    }
    return 1;
  }
}