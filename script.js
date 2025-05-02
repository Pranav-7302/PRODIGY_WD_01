const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    //Checking page is scrolled more than 50 px veritcally then adding class
    navbar.classList.add('scrolled');
  } else {
    
    navbar.classList.remove('scrolled');
  }
});
