// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('GFG');
var buffer3 = Buffer.from([1, 2, 3, 4]);
// console.log(buffer3)
 
// Writing data to Buffer
buffer1.write("Happy Learning");
 
// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);
 
// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));
 
// Check length of Buffer
console.log(buffer1.length);
 
// Copy buffer
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(4);
bufferSrc.copy(bufferDest);
console.log(bufferDest);
 
var Data = bufferDest.toString('utf-8');
console.log(Data);
 
// Slicing data
var bufferOld = new Buffer('GeeksForGeeks');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());
 
// concatenate two buffer
var bufferOne = new Buffer('Happy Learning ');
var bufferTwo = new Buffer('With GFG');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());