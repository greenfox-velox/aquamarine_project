var api = require('../backend/createapp.js');
var request = require('supertest');
var tape = require('tape');
var mockConnection = require('./mockconnection.js')

tape('Get method response status is 200, content type is json', function(t) {
  var app = api.createApp(mockConnection.mockConnectionMoreItems);
  request(app)
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

tape('Get method responses error when receives error', function(t) {
  var app = api.createApp(mockConnection.mockConnectionMoreItemsError);
  request(app)
    .get('/meals')
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});

tape('Post method response status is 200, content type is json', function(t) {
  var app = api.createApp(mockConnection.mockConnectionOneItem);
  var item = { id: 400, name: 'watermelon', calories: 100, date: '2016-08-15' }
  request(app)
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

tape('Post method responses error when receives error', function(t) {
  var app = api.createApp(mockConnection.mockConnectionOneItemError);
  var item = { id: 400, name: 'watermelon', calories: 100, date: '2016-08-15' }
  request(app)
    .post('/meals')
    .send(item)
    .expect(400)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
       };
    });
});

tape('Delete method response status is 200, content type is json', function(t){
  var app = api.createApp(mockConnection.mockConnectionOneItem);
  var item = { id: 400 }
  request(app)
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

tape('Delete method responses error when receives error', function(t){
  var app = api.createApp(mockConnection.mockConnectionOneItemError);
  var item = { id: 400 }
  request(app)
    .delete('/meals/:id')
    .send(item)
    .expect(400)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});
