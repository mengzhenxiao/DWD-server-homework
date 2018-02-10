// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// app.get('/', function (req, res) {
// 	res.sendFile("moodpalette.html", {root: './public'}); // Files inside "public" folder
// });

app.use(express.static('public'));


// index page

app.get('/templatetest', function(req, res) {
	var data = {person: {name: req.query.inputEmail, other: req.query.inputPassword}};
    res.render('pages/index', data);
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');
