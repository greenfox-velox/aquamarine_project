'use strict';

var db = require('./db.js');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('../client'));

app.get('/meals', function(req, res) {
  db.readAll(req, function(err, meal) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.send(meal);
    }
  });
});

app.post('/meals', function(req, res) {
  var item = {
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date.split('T')[0]
  };
  db.createNewMeal(item, function(err, meal) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.send(meal);
    }
  });
});

app.delete('/meals/:id', function(req, res) {
  db.deleteCalorie(req.params.id, function(err) {
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

app.listen(3000);
