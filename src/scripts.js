// var bootstrap;
// var SimpleLightbox;
window.addEventListener("DOMContentLoaded", (event) => {
  
//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//       document.getElementById('navbar-top').classList.add('fixed-top');
//       // add padding top to show content behind navbar
//       navbarHeight = document.querySelector('.navbar').offsetHeight;
//       document.body.style.paddingTop = navbarHeight + 'px';
//     } else {
//       document.getElementById('navbar-top').classList.remove('fixed-top');
//        // remove padding top from body
//       document.body.style.paddingTop = '0';
//     } 
// });

// var requiredTopPosition = document.getElementById('siteHeader'),
//     siteNav = document.getElementById('mainNav');

//     window.onscroll = function() {
        // if ( siteNav.offsetTop < document.documentElement.scrollTop + 26 || siteNav.offsetTop < document.body.scrollTop + 26) {
        //     siteHeader.setAttribute("class","sticky");
        // }
        // else {
        //     siteHeader.setAttribute("class","");
        // }
        // siteNav.offsetTop < (document.documentElement.scrollTop || document.body.scrollTop) + requiredTopPosition ? "sticky" : "";
    // }


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
  // const navbarToggler = document.body.querySelector(".navbar-toggler");
  // const responsiveNavItems = [].slice.call(
  //   document.querySelectorAll("#navbarResponsive .nav-link")
  // );

//  responsiveNavItems.map(function (responsiveNavItem) {
//     responsiveNavItem.addEventListener("click", () => {
//       if (window.getComputedStyle(navbarToggler).display !== "none") {
//         navbarToggler.click();
//       }
//     });
//   });

  // Activate SimpleLightbox plugin for portfolio items

  // new SimpleLightbox({
  //   elements: "#portfolio a.portfolio-box",
  // });
});
