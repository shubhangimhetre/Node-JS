const fs = require('fs')

// //***Eg=1 fs.readFile takes the file path and the callback
// fs.readFile('README.md', (err, data) => {
// 	// if there's an error, log it and return
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	// Print the string representation of the data
// 	console.log(data.toString())
// })

//Eg=2*** fs.writeFile('README.md', 'Hello World', (err) => {
// 	// If there is any error in writing to the file, return
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	// Log this message if the file was written to successfully
// 	console.log('wrote to file successfully')
// })

//Eg=3**** fs.writeFileSync('README.md', 'Hello Sync API!')
// // The readFileSync API reads the file and returns a
// // Buffer, whose `toString` method gives the string
// // representation of the file
// console.log(fs.readFileSync('README.md').toString())

// //Eg=4******
// // const fs = require('fs')
// // Initialize the time at which the program started
// const startTime = new Date()
// // create a read stream from the `words.txt` file
// const rStream = fs.createReadStream('words.txt')
// // initialize total word count
// let total = 0
// // the `on data` method registers a handler for everytime we
// // receive new data from the file stream
// rStream.on('data', b => {
// 	// `b` here is the chunk of data received from the
// 	// file stream
// 	const bStr = b.toString()
// 	// We split the string by spaces and new lines and add it to the
// 	// total -- we subtract one because of the extra space/newline/broken word
// 	// at the end of the chunk
// 	// we shouldn't do this for the last chunk of data, which we handle later
// 	total += bStr.split(/[\s\n]+/).length - 1
// })
// rStream.on('end', () => {
// 	// Finally, the `on end` handler is called once the data stream completes
// 	// we add one to the total, because we shouldn't subtract 1 from the last
// 	// chunk of data in the `data` handler, for which we're compensating here
// 	console.log('total words:', total + 1)
// 	// Print the total time taken, as well as the total used program memory
// 	console.log('total time:', (new Date()) - startTime)
// 	const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
// 	console.log('the program used', memoryUsedMb, 'MB')
// })


// //Eg=5*****
// // const fs = require('fs')
// // Initialize the time at which the program started
// // const startTime = new Date()
// fs.readFile('words.txt', (err, data) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	// Split the words based on spaces and newlines and print the length
// 	const nWords = data.toString().split(/[\s\n]+/).length
// 	console.log('total words:', nWords)

// 	// print the total time taken and total program memory used
// 	console.log('total time:', (new Date()) - startTime)

// 	const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
// 	console.log('the program used', memoryUsedMb, 'MB')
// })

// //Eg=7 **** Reading Directories
// // We can use the fs.readdir method to list all the files and directories within a specified path:
// // const fs = require('fs')
// fs.readdir('./', (err, files) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log('files: ', files)
// })
// // This will give the output:
// // files:[ 'AsyncAwait.js','Buffer.js','EventDrivenP.js', 'FREE CODE CAMP', 'Filesystem.js', 'Stream.js','input.txt','promise.js', 'words.txt' ]

// //Eg=8 ****Identifying files or directory
// fs.readdir('./', { withFileTypes: true }, (err, files) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log('files: ')
// 	files.forEach(file => {
// 		// the `isDirectory` method returns true if the entry is a directory
// 		const type = file.isDirectory() ? '📂' : '📄'
// 		console.log(type, file.name)
// 	})
// })

// // Which will give us:
// // files: 
// // 📄 AsyncAwait.js
// // 📄 Buffer.js
// // 📄 EventDrivenP.js
// // 📂 FREE CODE CAMP
// // 📄 Filesystem.js
// // 📄 Stream.js
// // 📄 input.txt
// // 📄 promise.js
// // 📄 words.txt

// //Eg=8 **** Creating and Deleting Directories
// // Directories can be created and removed with the fs.mkdir and fs.rmdir methods respectively:
// // Creating a new directory:
// // const fs = require('fs')
// fs.mkdir('./newdir', err => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log('directory created')
// })
// // Removing a directory:
// // const fs = require('fs')
// fs.rmdir('./newdir', err => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log('directory deleted')
// })

// On linux systems, running ls -l will print information about the files 
/*AsyncAwait.js
Buffer.js
EventDrivenP.js
Filesystem.js
'FREE CODE CAMP'
input.txt
promise.js
Stream.js
words.txt
*/

//node-files/deleteFile.js
//Eg=9*****
// The unlink() function accepts one argument: the file path of the file you want to be deleted
// const fs = require('fs').promises;
// async function deleteFile(filePath) {
//   try {
//     await fs.unlinkSync(filePath);
//     console.log(`Deleted ${filePath}`);
//   }catch (error) {
//     console.error(`Got an error trying to delete the file: ${error.message}`);
//   } 
// }

// deleteFile('hi.txt');
// fs.unlinkSync('hi.txt')
 
// //Eg=10 ****When using the rename() function, you need to provide the file path of the original file and the path of the destination location. 
// // const fs = require('fs').promises;
// async function moveFile(source, destination) {
//   try {
//     await fs.renameSync(source, destination);
//     console.log(`Moved file from ${source} to ${destination}`);
//   } catch (error) {
//     console.error(`Got an error trying to move the file: ${error.message}`);
//   }
// }
// moveFile('greetings-2.txt', 'greetings.txt');

//EG=10.2***
// var oldPath = 'hi.txt'
// var newPath = 'hii.txt'

// fs.rename(oldPath, newPath, function (err) {
//   if (err) throw err
//   console.log('Successfully renamed - AKA moved!')
// })
