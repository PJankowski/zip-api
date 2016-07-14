var Zip = require('../models/Zips');

exports.searchByZip = function(req, res) {
  var zip = parseInt(req.params.zip);

  Zip.findOne({ZIP: zip}, function(err, doc){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
};

exports.searchByLatLng = function(req, res) {
    var lat = parseFloat(req.params.lat),
          lng = parseFloat(req.params.lng);

    Zip.findOne({LAT: lat, LNG: lng}, function(err, doc){
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(doc);
      }
    });
};
