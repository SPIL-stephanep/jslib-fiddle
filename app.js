var express = require('express'),
	app = express(),
	server = require('http')
		.createServer(app)
		.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./view.html');
});