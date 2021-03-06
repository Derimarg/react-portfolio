
window.addEventListener("DOMContentLoaded", (event) => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  // const mainNav = document.body.querySelector("#mainNav");
  // if (mainNav) {
  //   new bootstrap.ScrollSpy(document.body, {
  //     target: "#mainNav",
  //     offset: 74,
  //   });
  // }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );

  // eslint-disable-next-line
   responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }

      });
    });

  // Activate SimpleLightbox plugin for portfolio items

  // new SimpleLightbox({
  //   elements: "#portfolio a.portfolio-box",
  // });

  var myNav = document.getElementById("mainNav");
  window.onscroll = function () {
    // "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
    } else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
  };
});
