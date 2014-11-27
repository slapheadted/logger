var restify = require('restify');
var server = restify.createServer();
var allowCrossDomain = require('./lib/allow-cross-domain');

server.use(restify.bodyParser());
server.use(allowCrossDomain);

server.post('api/error', function(req, res, next) {
	res.send(200);
});

server.listen(8080, function() {
	console.log('Listening for errors on 8080.');
});