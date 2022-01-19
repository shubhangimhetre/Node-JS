//Eg=1 

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then((v)=>{ console.log(v) });

// o/p= The output is: 1.
// The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.


// // Eg=2
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => console.log('runs after 3 seconds'));



// //***********  Promise.all**************//
// eg=1
//const f1 = 3+4
// const f2 = 5+4
// Promise.all([f1, f2])
//   .then(res => {
//     console.log('Array of results', res)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//Eg=2
//   Promise.all([f1, f2]).then(([res1, res2]) => {
//     console.log('Results', res1, res2)
//   })

//Eg=3
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// //0/p=[ 3, 42, 'foo' ]

// Eg=4
// // this will be counted as if the iterable passed is empty, so it gets fulfilled
// var p = Promise.all([1,2,3]);
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// var p3 = Promise.all([1,2,3, Promise.reject("error")]);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function() {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// })

// // logs
// // Promise { <state>: "fulfilled", <value>: Array[3] }
// // Promise { <state>: "fulfilled", <value>: Array[4] }
// // Promise { <state>: "rejected", <reason>: 555 }

// // Eg=5
// // we are passing as argument an array of promises that are already resolved,
// // to trigger Promise.all as soon as possible
// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p = Promise.all(resolvedPromisesArray);
// // immediately logging the value of p
// console.log(p);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function() {
//     console.log('the stack is now empty');
//     console.log(p);
// });

// // logs, in order:
// // Promise { <state>: "pending" }
// // the stack is now empty
// // Promise { <state>: "fulfilled", <value>: Array[2] }

// //Eg=6
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('one'), 1000);
//   });
//   var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('two'), 2000);
//   });
//   var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('three'), 3000);
//   });
//   var p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('four'), 4000);
//   });
//   var p5 = new Promise((resolve, reject) => {
//     reject(new Error('reject'));
//   });
  
//   // Using .catch:
//   Promise.all([p1, p2, p3, p4, p5])
//   .then(values => {
//     console.log(values);
//   })
//   .catch(error => {
//     console.error(error.message)
//   });
  
// //   Eg=7
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1_delayed_resolution'), 1000);
//   });
  
//   var p2 = new Promise((resolve, reject) => {
//     reject(new Error('p2_immediate_rejection'));
//   });
  
//   Promise.all([
//     p1.catch(error => { return error }),
//     p2.catch(error => { return error }),
//   ]).then(values => {
//     console.log(values[0]) // "p1_delayed_resolution"
//     console.error(values[1]) // "Error: p2_immediate_rejection"
//   })
  



// //*************Promise.race()***************//
// // Eg=1
// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 600, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'second')
//   })
  
//   const Third = new Promise((resolve, reject) => {
//    
//     setTimeout(resolve,100,'Third')
//   })
  
//   Promise.race([first, second,Third]).then(result => {
//     console.log(result) // second
//   })

// // Eg=2
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
//   // expected output: "two"

// //   Eg=3 This following example demonstrates the asynchronicity of Promise.race
// // we are passing as argument an array of promises that are already resolved,
// // to trigger Promise.race as soon as possible
// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p = Promise.race(resolvedPromisesArray);
// // immediately logging the value of p
// console.log(p);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function(){
//     console.log('the stack is now empty');
//     console.log(p);
// });

// //Eg=4 If the iterable contains one or more non-promise value and/or an already settled promise, 
// then Promise.race will resolve to the first of these values found in the array: 

// var foreverPendingPromise = Promise.race([]);
// var alreadyFulfilledProm = Promise.resolve(100);

// var arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
// var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
// var p = Promise.race(arr);
// var p2 = Promise.race(arr2);

// setTimeout(function(){
//     console.log('the stack is now empty');
//     console.log(p);
//     console.log(p2);
// });


// // Eg=5 An empty iterable causes the returned promise to be forever pending:
// var foreverPendingPromise = Promise.race([]);
// console.log(foreverPendingPromise);
// setTimeout(function(){
//     console.log('the stack is now empty');
//     console.log(foreverPendingPromise);
// });



//*****************Promise.any()**************//
//Eg=1
// const first = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'second')
//   })
  
//   Promise.any([first, second]).catch(error => {
//     console.log(error) // AggregateError
//   })
//o/p= quick
  
//Eg=2
// const p1 = Promise.reject(1);
// const p2 = new Promise((resolve) => setTimeout(resolve, 200, 2));
// const p3 = new Promise((resolve) => setTimeout(resolve, 300, 3));

// const promises = [p1, p2, p3];

// Promise.any(promises).then((value) => console.log(value));
// o/p= 2

// // Eg=3 First to fulfil, Promise.any() resolves with the first promise to fulfil, even if a promise rejects first.
// const pErr = new Promise((resolve, reject) => {
//     reject("Always fails");
//   });
//   const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Done eventually");
//   });
//   const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Done quick");
//   });
//   Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfils first
//   })
//   // expected output: "Done quick"

// // Eg=4 Promise.any() rejects with an AggregateError if no promise fulfils.

// const pErr = new Promise((resolve, reject) => {
//   reject('Always fails');
// });

// Promise.any([pErr]).catch((err) => {
//   console.log(err);
// })
// // expected output: "AggregateError: No Promise in Promise.any was resolved"


  
//***************Promise.allsettled */
// Eg=1
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));

// // expected output:
// // "fulfilled"
// // "rejected"

// // Eg=2
// Promise.allSettled([
//     Promise.resolve(33),
//     new Promise(resolve => setTimeout(() => resolve(66), 0)),
//     99,
//     Promise.reject(new Error('an error'))
//   ])
//   .then(values => console.log(values));
  
//   // [
//   //   {status: "fulfilled", value: 33},
//   //   {status: "fulfilled", value: 66},
//   //   {status: "fulfilled", value: 99},
//   //   {status: "rejected",  reason: Error: an error}
//   // ]
  

  