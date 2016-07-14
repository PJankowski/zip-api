var request = require('supertest');

describe('Loading Express', function(){
  var server;

  beforeEach(function(){
    server = require('../server.js');
  });

  it('Returns Latitude and Longitude code', function testZip(done){
    request(server)
      .get('/api/zip/48030')
      .expect(200, done);
  });

  it('Returns Zip code', function testLatLng(done){
    request(server)
      .get('/api/latlng/42.461924/-83.097689')
      .expect(200, done);
  });
});
