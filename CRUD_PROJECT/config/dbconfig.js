// // 'use strict';

// var mysql=require('mysql');



// //local mysql db connection

// const dbconn=mysql.createConnection({
//     host:'localhost',
//     root:'root',
//     password:'Shubh@7171',
//     database:'crud_db_project'
// });

// dbconn.connect(function(err){

//     if (err){
//         console.log("Error While connecting..")
//         // throw err;
//     }else{
//         console.log("Database connected..")
//     }
// })

var mysql = require('mysql');

var dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shubh@7171",
  database:'crud_db_project',
  insecureAuth : true

});

dbconn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=dbconn;