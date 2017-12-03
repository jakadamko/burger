// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "givesick",
  database: "burgers_db"
});


if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'l9t0v8cgzfgl05r4',
    password: 'vmqixs76roqjw4br',
    database: 'burgers_db'
  })


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
