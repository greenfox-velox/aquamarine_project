'use strict';

var data = require('./config.js');

function handleError (err) {
  if(err) {
    console.log(err.toString());
    return;
  }
}

var serverQueries = {
    getMeals: 'SELECT * FROM meals',
    postMeals: 'INSERT INTO meals SET ?',
    deleteMeals: 'DELETE FROM meals WHERE id = ?'
  };

var readTheFunctions = (function () {

  var mysql = require('mysql');

  var con = mysql.createConnection(data);

  con.connect();

  function readAll (data, callback) {
    con.query(serverQueries.getMeals, function(err,rows){
      handleError(err);
      callback(rows);
    });
  }

  function createNewMeal(item, callback) {
    console.log(item);
    con.query(serverQueries.postMeals, item, function(err, rows){
      handleError(err);
      console.log(rows);
      callback({id: rows.insertId, name: item.name, calories: item.calories, date: item.date})
    });
  }

  function deleteCalorie(id, callback) {
    con.query(serverQueries.deleteMeals, id, function(err,rows){
      handleError();
      callback({id: id});
    });
  }

  return {
    readAll: readAll,
    createNewMeal: createNewMeal,
    deleteCalorie: deleteCalorie
  }
})();

module.exports = readTheFunctions;
