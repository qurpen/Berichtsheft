import User from './objects.js';

let users = []

users.push(new User("ac00", "password", "schueler"));
users.push(new User("vl66", "password", "schueler"));
users.push(new User("mv77", "password", "lehrer"));



function login() {
  const userId = document.getElementById('user-id').value.trim();
  const password = document.getElementById('password').value;

  const user = users.find(user => user.id === userId && user.password === password);

  if (user) {
    window.location = 'Ausbildungsnachweise.html';
  } else {
    alert('Invalid User ID or Password. Please try again.');
  }

}

document.getElementById('login-btn').addEventListener('click', login);