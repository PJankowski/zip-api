'use strict';

var ZipController = require('./controllers/ZipController');

module.exports = function(app) {
  app.get('/api/zip/:zip', ZipController.searchByZip);

  app.get('/api/latlng/:lat/:lng', ZipController.searchByLatLng);
};
