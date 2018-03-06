var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: true
}); // for parsing form data
app.use(urlencodedParser);

var mongojs = require('mongojs');
var db = mongojs("subuser:177607040421@ds021989.mlab.com:21989/dwdtesting", ["myjournal"]);

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static('public'));




app.get('/myjournal', function(req, res) {
  var data = {
    dailyChallenge: req.query.checkBox,
    learnt: req.query.thingsIlearnt,
    better: req.query.thingsToBetter,
    gratefulthings: {
      first: req.query.grateful1,
      second: req.query.grateful2,
      third: req.query.grateful3
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
        // console.log(mongoData);
        var sendData = {data: mongoData};
        res.render('pages/index', sendData);
      });

      /* Alternatively you could loop through the records with a "for"
  	for (var i = 0; i < saved.length; i++) {
	  	console.log(saved[i]);
	}
	*/
    }
  });

});





app.listen(3000);
console.log('3000 is the magic port');
