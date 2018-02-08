var express = require('express')
var app = express()


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// app.use(express.static('public'));

app.get('/page', function (req, res) {
	var fileToSend = "index.html";
	res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
});


app.get('/processit', function(req, res) {
  var response = {
  "username" : req.query.username,
  "password" : req.query.password,
  "male" : req.query.male,
  "female" : req.query.female,
  "somecolor" : req.query.somecolor,
  "introduction" : req.query.introduction
   };

    res.end(JSON.stringify(response));
});
