// objects literals

// let user = {
//     name: 'syed ishad',
//     age: 21,
//     email: 'syedishad009@gmail.com',
//     location: 'hyderabad',
//   };
  
//    console.log(user);
//   console.log(user.age);
  
//   user.age = 35;
//   console.log(user.age);
  
//array method
  
// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);


// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login(){
//       console.log('the user logged in');
//     },
//     logout(){
//       console.log('the user logged out');
//     },
//     logBlogs(){
//       // access the blogs here
//       // console.log(this);
//       console.log('this user has written these blogs:');
//       this.blogs.forEach(blog => {
//         console.log(blog);
//       })
//     }
//   };
  
//   // console.log(this);
//   user.logBlogs();

// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//       {title: 'why mac & cheese rules', likes: 30},
//       {title: '10 things to make with marmite', likes: 50}
//     ],
//     login(){
//       console.log('the user logged in');
//     },
//     logout(){
//       console.log('the user logged out');
//     },
//     logBlogs(){
//       // access the blogs here
//       // console.log(this);
//       console.log('this user has written these blogs:');
//       this.blogs.forEach(blog => {
//         console.log(`${blog.title} has ${blog.likes} likes`);
//       })
//     }
//   };
  
//   // console.log(this);
//   user.logBlogs();

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers
// //between 0-1
// const random = Math.random();

// // for 0 or1 

// console.log(random);

// //for number between 1-100
// console.log(Math.round(random * 100));

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);