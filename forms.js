const form =document.querySelector('.submit-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener('form', e =>{
    e.preventDefault();
    console.log(submit.username.value);
})

// regular expression

const username = 'shaunyp';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result){
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed :(');
// }

// let result = username.search(pattern);

// console.log(result);

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const username =  form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if(usernamePattern.test(username)){
    feedback.textContent = 'that username is valid!'
  } else {
    feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
  }
});

// live feedbck
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    //console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});
