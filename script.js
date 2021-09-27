const form = document.getElementById('form');



form.addEventListener('submit', e => {
  e.preventDefault();

const firstName = form['firstname'].value;
const lastName = form['lastname'].value;
const email = form['email'].value;
const password = form['password'].value;

if(firstName === '') {
    addErrorTo('firstname', 'First Name is required');
} else {
    removeErrorFrom('firstname');
}

if(lastName === '') {
    addErrorTo('lastname', 'Last Name is required');
} else {
    removeErrorFrom('lastname');
}

if(email === '') {
    addErrorTo('email', 'Email is required');
} else {
    removeErrorFrom('email');
}


if(password === '') {
    addErrorTo('password', 'Password is required');
} else {
    removeErrorFrom('password');
}

});

function addErrorTo(field, message) {
  const errorImg = form[field].parentNode.querySelector('img');
  errorImg.style.display= 'block';

  const formControl = form[field].parentNode;
  formControl.classList.add('error');

  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.display = "block";
}

function removeErrorFrom(field) {
  const errorImg = form[field].parentNode.querySelector('img');
  errorImg.style.display= 'none';

  const formControl = form[field].parentNode;
  formControl.classList.remove('error');

  const small = form[field].parentNode.querySelector('small');
  small.style.display = "none";
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
