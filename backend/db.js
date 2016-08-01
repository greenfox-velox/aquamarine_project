'use strict';

function handleError (err) {
  if(err) {
    console.log(err.toString());
    return;
  }
}

var readTheFunctions = (function () {

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kiwitorta9',
    database: 'calorie_counter'
  });


  con.connect();

  function readAll (data, callback) {
    con.query('SELECT * FROM meals;', function(err,rows){
      handleError(err);
      callback(rows);
    });
  }

  function createNewMeal(item, callback) {
    console.log(item);
    con.query("INSERT INTO meals SET ?", item, function(err, rows){
      handleError(err);
      console.log(rows);
      callback({id: rows.insertId, name: item.name, calories: item.calories, date: item.date})
    });
  }

  function deleteCalorie(id, callback) {
    con.query('DELETE FROM meals WHERE id = ?', id, function(err,rows){
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
