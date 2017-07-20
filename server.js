var express   = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/index', function(req, res) {
  res.render('index');
});

app.get('/list', function(req, res) {
  res.render('list');
});

app.get('/carte', function(req, res) {
  res.render('carte');
});

app.get('/livraison', function(req, res) {
  res.render('livraison');
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
