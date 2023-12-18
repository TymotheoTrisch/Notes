const Sequelize = require('sequelize');
// Create a connection to the SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});
 
module.exports = sequelize;

// var sqlite3 = require('sqlite3').verbose();
// var md5 = require('md5');

// const DBSOURCE = './db/database.sqlite';

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       // Cannot open database
//       console.error(err.message);
//       throw err
//     }else{
//         console.log('Connected to the SQLite database.');
//         db.run(`CREATE TABLE IF NOT EXISTS notes (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             title TEXT, 
//             description TEXT, 
//             id_user INTEGER, 
//             FOREIGN KEY(id_user) REFERENCES user(id)
//             );`,
//         (err) => {
//             if (err) {
//                 // Table already created
//             }
//             // else{
//             //     // // Table just created, creating some rows
//             //     // var insert = `INSERT INTO user(email, password) VALUES(?, ?)`;
//             //     // db.run(insert, ["admin","admin@example.com",md5("admin123456")]);
//             // }
//         });  
//     }
// });
    
// module.exports = db;