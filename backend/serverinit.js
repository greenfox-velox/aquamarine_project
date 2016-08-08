var api = require('./createapp.js');
var mysqlconnection = require('./mysqlconnection.js')


var app = api.createApp(mysqlconnection)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.listen(3000);
