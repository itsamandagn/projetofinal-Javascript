const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = { email, password };
  const jsonString = JSON.stringify(userData);
  localStorage.setItem('userData', jsonString);

});

const userDataString = localStorage.getItem('userData');
if (userDataString) {
  const userData = JSON.parse(userDataString);
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = `Welcome back, ${userData.email}`;

}

const voltarLink = document.querySelector('.header_item a');
voltarLink.addEventListener('click', () => {
  window.location.href = "index.html";
});