var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
// myConnection.connect();
// connection.connect();
 
// connection.query('SELECT * from crumbs', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
module.exports = connection