var api = require('../server.js');
var request = require('supertest');
var tape = require('tape');

tape('Get method content type is json', function(t){
  request(api)
    .get('/meals')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});

tape('Post method content type is json', function(t){
  var item = { id: 400, name: 'watermelon', calories: 100, date: '2016-08-15' }
  request(api)
    .post('/meals')
    .send(item)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});

tape('Delete method content type is json', function(t){
  var item = { id: 400 }
  request(api)
    .delete('/meals/:id')
    .send(item)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});

// tape('Delete method throws error when incorrect input type', function(t){
//   var item = { id: '34' }
//   request(api)
//     .delete('/meals/:id')
//     .send(item)
//     .end(function(err, res) {
//       if (err) {
//         t.fail();
//       } else {
//         t.end();
//       };
//     });
// });
