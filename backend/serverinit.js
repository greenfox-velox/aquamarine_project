var api = require('./createapp.js');
var mysqlconnection = require('./mysqlconnection.js')

var app = api.createApp(mysqlconnection)

app.listen(3000);
