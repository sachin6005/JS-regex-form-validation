var form = document.getElementById("form")
var username = document.getElementById("username")
var usernameErr = document.getElementById("username-error")
username.addEventListener('input', function (e) {
  console.log(e.target.value)
  var pattern = /^[\w]{6,9}$/;
  var inputValue = e.target.value;
  var validUser = pattern.test(inputValue);

  if (validUser) {
    usernameErr.style.display = 'none'
    username.style.borderStyle = 'solid'
    username.style.borderColor = 'green'
  }
  else {
    usernameErr.style.display = 'block'
    username.style.borderStyle = 'solid'
    username.style.borderColor = 'red'
  }
  username.addEventListener('blur', function () {
    usernameErr.style.display = 'none'
  })
})

var email = document.getElementById("email")
var emailErr = document.getElementById("email-error")
email.addEventListener('input', function (e) {
  console.log(e.target.value)
  var pattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[a-zA-Z]{2,10}?)$/;
  var emailValue = e.target.value;
  var validmail = pattern.test(emailValue);

  if (validmail) {
    emailErr.style.display = 'none'
    email.style.borderStyle = 'solid'
    email.style.borderColor = 'green'

  }
  else {
    emailErr.style.display = 'block'
    email.style.borderStyle = 'solid'
    email.style.borderColor = 'red'
  }
  email.addEventListener('blur', function () {
    emailErr.style.display = 'none'
  })

})

var mobile = document.getElementById("mobile")
var mobileErr = document.getElementById("mobile-error")
mobile.addEventListener('input', function (e) {
  console.log(e.target.value)
  var pattern = /^91-[0-9]{10}$/;
  var mobileValue = e.target.value;
  var validNum = pattern.test(mobileValue);
  if (validNum) {
    mobileErr.style.display = 'none'
    mobile.style.borderStyle = 'solid'
    mobile.style.borderColor = 'green'
  }
  else {
    mobileErr.style.display = 'block'
    mobile.style.borderStyle = 'solid'
    mobile.style.borderColor = 'red'
  }
  mobile.addEventListener('blur', function () {
    mobileErr.style.display = 'none'
  })

})

var password = document.getElementById("password")
var passwordErr = document.getElementById("password-error")
password.addEventListener('input', function (e) {
  console.log(e.target.value)
  var pattern1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*](?=.*\d)).{8,}$/;
  var passwordValue = e.target.value;
  var validPassword = pattern1.test(passwordValue);

  if (validPassword) {
    passwordErr.style.display = 'none'
    password.style.borderStyle = 'solid'
    password.style.borderColor = 'green'
  }
  else {
    passwordErr.style.display = 'block'
    password.style.borderStyle = 'solid'
    password.style.borderColor = 'red'
  }
  password.addEventListener('blur', function () {
    passwordErr.style.display = 'none'
  })
})


function formsubmit() {
  if
    (username.style.borderColor == 'green' &&
      email.style.borderColor == 'green' &&
      mobile.style.borderColor == 'green' &&
      password.style.borderColor == 'green')
  {
    alert('Submitted');
  }
  else{
    alert('please enter correct input');
  }
}
   

