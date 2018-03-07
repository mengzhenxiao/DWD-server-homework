var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: true
}); // for parsing form data
app.use(urlencodedParser);

var mongojs = require('mongojs');
var db = mongojs("", ["myjournal"]);

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static('public'));




app.post('/myjournal', function(req, res) {
  var data = {
    dailyChallenge: req.body.checkBox,
    learnt: req.body.thingsIlearnt,
    better: req.body.thingsToBetter,
    gratefulthings: {
      first: req.body.grateful1,
      second: req.body.grateful2,
      third: req.body.grateful3
    }
  };

  db.myjournal.save({
    "journal": data
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");
  });

  db.myjournal.find({}, function(err, saved) {
    if (err || !saved) {
      console.log("No results");
    } else {
      saved.forEach(function(record) {
        // console.log(record);
        var mongoData = [];
        for (var i = 0; i < saved.length; i++) {
          mongoData.push(saved[i]);
        }
        var sendData = {
          data: mongoData
        };
        res.render('pages/index', sendData);
      });

    }
  });

});





app.listen(80);
console.log('80 is the magic port');
