
  // Get the hamburger menu button and the navbar links container
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  // Add an event listener to the hamburger button to toggle the 'active' class
  navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

