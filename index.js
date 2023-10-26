const navLinks = document.querySelectorAll('#navbar-primary .navbar-nav > li > a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('active');
    navLinks.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var currentURL = window.location.href;
  var navbarLinks = document.querySelectorAll("#navbar-primary a");

  navbarLinks.forEach(function (link) {
    if (link.href === currentURL) {
      link.parentNode.classList.add("active");
    } else {
      link.parentNode.classList.remove("active");
    }
  });
});

