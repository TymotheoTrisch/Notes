// var sqlite3 = require('sqlite3').verbose();
// var md5 = require('md5');

// const DBSOURCE = './db/database.sqlite';

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       // Cannot open database
//       console.error(err.message);
//       throw err;
//     }else{
//         console.log('Connected to the SQLite database.');
//         db.run(`CREATE TABLE IF NOT EXISTS user (
//             id INTEGER PRIMARY KEY, 
//             email TEXT, 
//             password TEXT
//             );`,
//         (err) => {
//             if (err) {
//                 // Table already created
//             }else{
//                 // Table just created, creating some rows
//                 // var insert = `INSERT INTO user(email, password) VALUES(?, ?)`;
//                 // db.run(insert, ["admin@example.com",md5("admin123456")]);
//             }
//         });  
//     }
// });
    
// module.exports = db;