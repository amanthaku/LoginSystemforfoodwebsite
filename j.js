const loginForm = document.getElementById('login-form');

// Add an event listener for the form submit event
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username and password values from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are valid (you would replace this with your own authentication logic)
  if (username === 'myusername' && password === 'mypassword') {
    // If the username and password are valid, redirect the user to the home page
    window.location.href = 'p.html';
  } else {
    // If the username and password are not valid, show an error message
    alert('Invalid username or password');
  }
});