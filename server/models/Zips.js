var mongoose = require('mongoose');

var ZipsSchema = mongoose.Schema({
  zip: {type: Number, unique: true},
  latitude: Number,
  longitude: Number
});

var Zip = mongoose.model('Zip', ZipsSchema);

module.exports = Zip;
