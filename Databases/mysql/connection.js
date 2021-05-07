const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'movies',
});

connection.connect();

//CREATE TABLE IF NOT EXIST actors (id INT AUTOINCREMENT, name VARCHAR(70), height INT, PRIMARY KEY id)

if (process.argv.includes('--createdb')) {
    connection.query(`CREATE TABLE IF NOT EXIST actors (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(70), height INT)`), (error, result) => {
        if(error) {
            throw error;
        }
        console.log(result)
    }
  console.log('Sucess!!');
}
