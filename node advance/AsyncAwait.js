// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

// // Eg=1
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
// // Eg=2  asyncCall();
// async function foo() {
//     return 1
//  }
// console.log(foo()); 
// //o/p=Promise { 1 }
// ...is similar to:
// function foo() {
//    return Promise.resolve(1)
// }
// console.log(foo());
// //o/p=Promise { 1 }
  
//Eg=3
// const p = new Promise((res, rej) => {
//     res(1);
//   })
  
//   async function asyncReturn() {
//     return p;
//   }
  
//   function basicReturn() {
//     return Promise.resolve(p);
//   }
  
//   console.log(p === basicReturn()); // true
//   console.log(p === asyncReturn()); // false

// // Eg=4 In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously. 
// async function foo() {
//    await 1
// }
//  console.log(foo());
// //  ..is equivalent to:
// function foo() {
//     return Promise.resolve(1).then(() => undefined)
// }
//  console.log(foo());
// //o/p =  Promise { <pending> }
// //       Promise { <pending> }

// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//     return ([result1,result2])
//  }
//  foo().then((value)=>console.log(value))

// async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 200))
//     const p2 = new Promise((_,reject) => setTimeout(() => reject('error'), 500))
//     results=Promise.all([await p1, await p2] )
//     return results// Do not do this! Use Promise.all or Promise.allSettled instead.
//  }
//  foo().catch((err) =>console.log(err)) // Attempt to swallow all errors...
 
// // Eg=5 Async function and their execution order
// function resolveAfter2Seconds() {
//     console.log("starting slow promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("slow")
//         console.log("slow promise is done")
//       }, 2000)
//     })
//   }
  
//   function resolveAfter1Second() {
//     console.log("starting fast promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("fast")
//         console.log("fast promise is done")
//       }, 1000)
//     })
//   }
  
//   async function sequentialStart() {
//     console.log('==SEQUENTIAL START==')
  
//     // 1. Execution gets here almost instantly
//     const slow = await resolveAfter2Seconds()
//     console.log(slow) // 2. this runs 2 seconds after 1.
  
//     const fast = await resolveAfter1Second()
//     console.log(fast) // 3. this runs 3 seconds after 1.
//   }
  
//   async function concurrentStart() {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds() // starts timer immediately
//     const fast = resolveAfter1Second() // starts timer immediately
  
//     // 1. Execution gets here almost instantly
//     console.log(await slow) // 2. this runs 2 seconds after 1.
//     console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
//   }
  
//   function concurrentPromise() {
//     console.log('==CONCURRENT START with Promise.all==')
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//       console.log(messages[0]) // slow
//       console.log(messages[1]) // fast
//     })
//   }
  
//   async function parallel() {
//     console.log('==PARALLEL with await Promise.all==')
  
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async()=>console.log(await resolveAfter2Seconds()))(),
//         (async()=>console.log(await resolveAfter1Second()))()
//     ])
//   }
  
//   sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
//   // wait above to finish
//   setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"
  
//   // wait again
//   setTimeout(concurrentPromise, 7000) // same as concurrentStart
  
//   // wait again
//   setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
  
//Game=Eg=6
// function yayOrNay() {
//   return new Promise((resolve, reject) => {
//     const val = Math.round(Math.random() * 1); // 0 or 1, at random

//     val ? resolve('Lucky!!') : reject('Nope 😠');
//   });
// }

// async function msg() {
//   try {
//     const msg = await yayOrNay();
//     console.log(msg);
//   } catch(err) {
//     console.log(err);
//   }
// }

// msg(); // Lucky!!
// msg(); // Lucky!!
// msg(); // Lucky!!
// msg(); // Nope 😠

//Second async func type  Eg=6.5
// async function msg() {
//   const msg = await yayOrNay();
//   console.log(msg);
// }
// msg().catch(x => console.log(x));

// //Eg=7
// function caserUpper(val) {
//   return new Promise((resolve, reject) => {
//     resolve(val.toUpperCase());
//   });
// }

// async function msg(x) {
//   try {
//     const msg = await caserUpper(x);
//     console.log(msg);
//   } catch(err) {
//     console.log('Ohh no:', err.message);
//   }
// }

// msg('Hello'); // HELLO
// msg(34); // Ohh no: val.toUpperCase is not a function