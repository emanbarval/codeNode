var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end("<html><head><script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js'></script><script src='http://fantas.hol.es/uno.js'></script><script src='http://fantas.hol.es/otro.js'></script></head><body><h3>Hello World</h3><br><div ng-app='myApp' ng-controller='myCtrl'><p>The hexadecimal value of <input ng-model='valor'></input> is:</p><h1>{{hex}}</h1></div><p>A custom service whith a method that converts a given number into a hexadecimal number.</p></body></html>");
}).listen(1337, "127.0.0.1");
console.log('yeah');