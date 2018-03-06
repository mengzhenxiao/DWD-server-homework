var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: true
}); // for parsing form data
app.use(urlencodedParser);

var mongojs = require('mongojs');

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static('public'));


var db = mongojs("subuser:177607040421@ds021989.mlab.com:21989/dwdtesting", ["thesubmissions"]);

app.get('/myjournal', function(req, res) {
  var data = {
    person: {
      name: req.query.inputEmail,
      other: req.query.inputPassword
    }
  };
  res.render('pages/index', data);

  db.thesubmissions.save({
    "user": data
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");
  });
});



app.listen(3000);
console.log('3000 is the magic port');
