'use strict';

var express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      mongoose = require('mongoose'),
      app = express(),
      config = require('./server/config');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

if (config.env === "development") {
  mongoose.connect('mongodb://localhost:27017/zipapi', function(){
    console.log('Connected to DB');
  });
} else {
  mongoose.connect(config.mongoUri);
}

require('./server/routes')(app);

app.listen(config.port, function(){
  console.log('Serving on port: ' + config.port);
});

exports = module.exports = app;
