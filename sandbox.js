// alert('hello World');


// console.log(1);
// console.log('Syed Ishad hussain');
// console.log(2);
//  How to declare varaibles
// let age = 25;
// let year = 2001;
// to console in one line
// console.log(age, year);
// to console in separate line
// console.log(year);

// to upadte a varible
// age = 30;
// console.log(age);
// if we dont dont to upadte any varaible then use const keyword
// we can use Var keyword which is the older version of js






// strings
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// getting individual characters
// console.log(fullName[2]);

// string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log('index of the @ sign:', index);


// day 2
// common string methods

let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

//let result = email.slice(0, 5); (from 0 to5)

//let result = email.substr(5, 12);

//let result = email.replace('m', 'w');

// let result = email.replace('n', 'w');

// console.log(result);



// numbers

let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S (bracket,integer,devision,mutli,add,sub)

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
// let likes = 10;

//to add

// likes = likes + 1;

//easy methodd

// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way
//gigantic string(conmbinaton of lettter numbers)
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way
//anather way(easy way)
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array length
// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// let result = ninjas.pop();

// console.log(result);
// console.log(ninjas);



// booleans & comparisons
// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');



// type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
// let result = Boolean('');

