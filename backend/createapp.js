'use strict';

var db = require('./db.js');
var mysqlcon = require('./mysqlconnection.js')

var express = require('express');


function createApp(connection) {
  var app = express();
  var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(express.static('../client'));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

  app.get('/meals', function(req, res) {
    db.readAll(req, connection, function(err, meal) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.send(meal);
      }
    });
  });
  app.delete('/meals/:id', function(req, res) {
    db.deleteCalorie(req.params.id, connection, function(err) {
      var item = {
        id: req.params.id
      };
      if (err) {
        res.status(400).json(err);
      } else {
        res.send(item);
      }
    });
  });
  app.post('/meals', function(req, res) {
    var item = {
      name: req.body.name,
      calories: req.body.calories,
      date: req.body.date.split('T')[0]
    };
    db.createNewMeal(item, connection, function(err, meal) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.send(meal);
      }
    });
  });
  return app;
}

module.exports = {
  createApp: createApp
};
