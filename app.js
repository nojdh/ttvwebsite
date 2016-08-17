var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/roster', function (req, res) {
    res.render('roster');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.listen(3000);
