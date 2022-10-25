// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('callBack Function Fired');
// },2000);
// console.log(3);
// console.log(4);


//http requests..

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request, request.readyState);
//   if (request.readyState === 4 && request.status === 200) {
//     // console.log(request);
//     console.log(request.responseText);

//   } else if (request.readyState === 4) {
//     console.log('could not fetch the data');
//   }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

//IF THE LINK IS INCORRECT
// request.open('GET', 'https://jsonplaceholder.typicode.com/todoos/');
// request.send();

//  call back lesson-91
// const getTodos = (callback) => {

//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {

//     if(request.readyState === 4 && request.status === 200){
//       callback(undefined, request.responseText);
//     } else if (request.readyState === 4){
//       callback('could not fetch the data', undefined);
//     }

//   });
  
//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//   request.send();

// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//   console.log('callback function fired');
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log(3);
// console.log(4);

// lesson-92

// const getTodos = (callback) => {

//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {

//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4){
//       callback('could not fetch the data', undefined);
//     }

//   });
  
//   request.open('GET', 'todos.json');
//   request.send();

// };

// getTodos((err, data) => {
//   console.log('callback function fired');
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });


//lesson-93
// const getTodos = (resource, callback) => {

//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {

//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4){
//       callback('could not fetch the data', undefined);
//     }

//   });
  
//   request.open('GET', resource);
//   request.send();

// };

// getTodos('todos/luigs.json', (err, data) => {
//   console.log(data);
//   getTodos('todos/mario.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/shaun.json', (err, data) => {
//       console.log(data);
//     });
//   });
// });

//lesson-94
// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4){
//         reject('could not fetch the data');
//       }
  
//     });
    
//     request.open('GET', resource);
//     request.send();
//   });

// };

// getTodos('todos/luigs.json').then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

// // promise example
// const getSomething = () => {

//   return new Promise((resolve, reject) => {
//     // do something (fetch data)
//     // resolve('some data');
//     reject('some error');
//   });

// };
// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });


//lesson-95

// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4){
//         reject('could not fetch the data');
//       }
  
//     });
    
//     request.open('GET', resource);
//     request.send();
//   });

// };
// getTodos('todos/luigs.json').then(data => {
//   console.log('promise 1 resolved:', data);
//   return getTodos('todos/mario.json');
// }).then(data => {
//   console.log('promise 2 resolved:', data);
//   return getTodos('json/shaun.json');
// }).then(data => {
//   console.log('promise 3 resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

// lesson-96   fetch api


// fetch('todos/luigs.json').then(response => {
//   //console.log(response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

//lesson-97

// asynn and Wait

// const getTodos = async () => {

//   let response = await fetch('todos/luigs.json');
//   let data = await response.json();
//   return data;

// };

// console.log(1);
// console.log(2);

// getTodos()
//   .then(data => console.log('resolved:', data));

// console.log(3);
// console.log(4);

// // console.log(getTodos());

//lesson-98 throwing and catching errors


const getTodos = async () => {

  let response = await fetch('todos/luigs.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  let data = await response.json();
  return data;

};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));