var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var helpers = require('express-helpers')(app);


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/candies-app');

var methodOverride = require('method-override');
app.use(methodOverride('_method')) ;     // overides post method

var routes = require('./config/routes');        //specify where the routes.js file is

app.use(logger('dev'));                         //using in dev mode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));     // settings for Body Parser


// Set up our app to accept to use EJS
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));     // built in file server


app.use(routes);

app.listen(3000);       // specify where the port us
