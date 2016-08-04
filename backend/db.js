'use strict';

var config = require('./config.js');

function handleError(err) {
  if (err) {
    console.log(err.toString());
    return;
  }
}

var serverQueries = {
  getMeals: 'SELECT * FROM meals',
  postMeals: 'INSERT INTO meals SET ?',
  deleteMeals: 'DELETE FROM meals WHERE id = ?'
};

var readTheFunctions = (function() {
  function readAll(data, connection, callback) {
    connection.query(serverQueries.getMeals, function(err, rows) {
      handleError(err);
      callback(err, rows);
    });
  }

  function createNewMeal(item, connection, callback) {
    connection.query(serverQueries.postMeals, item, function(err, rows) {
      handleError(err);
      callback(err, {id: rows.insertId, name: item.name, calories: item.calories, date: item.date});
    });
  }

  function deleteCalorie(id, connection, callback) {
    connection.query(serverQueries.deleteMeals, id, function(err) {
      handleError();
      callback(err, {id: id});
    });
  }

  return {
    readAll: readAll,
    createNewMeal: createNewMeal,
    deleteCalorie: deleteCalorie
  };
})();

module.exports = readTheFunctions;
