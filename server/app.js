var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	router = require('./routes/index');



app.use(morgan('tiny'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:false}));


app.use('/js', express.static(__dirname + "/../client/javascripts"));
app.use('/stylesheets', express.static(__dirname + "/../client/stylesheets"));
app.use('/views', express.static(__dirname + "/../client/views"));

app.use('/api/pirates', router.pirates)

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/../client/views/layout.html')
// });

app.get('*', function(req, res) {
  res.sendFile('layout.html', {root: './client/views'});
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});