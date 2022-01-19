var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');
// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });
// readerStream.on('end',function() {
//    console.log(data);
// });
// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });
// console.log("Program Ended");


//Creating server and streaming data
const http=require('http');
const server =http.createServer();
server.on("request",(req,res)=>{
   // var fs=require("fs");
   fs.readFile("input.txt",(err,data)=>{
      if (err) return console.error(err);
      res.end(data.toString());
   })
})
server.listen(8000,"127.0.0.1")