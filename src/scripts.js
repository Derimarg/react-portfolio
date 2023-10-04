// Function to handle navbar shrink
function navbarShrink() {
  const navbarCollapsible = document.querySelector("#mainNav");
  if (!navbarCollapsible) {
    return;
  }
  navbarCollapsible.classList.toggle("navbar-shrink", window.scrollY !== 0);
}

// Initial call to navbarShrink
navbarShrink();

// Add scroll event listener to shrink navbar
document.addEventListener("scroll", navbarShrink);

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.querySelector(".navbar-toggler");
const responsiveNavItems = Array.from(
  document.querySelectorAll("#navbarResponsive .nav-link")
);

responsiveNavItems.forEach((responsiveNavItem) => {
  responsiveNavItem.addEventListener("click", () => {
    if (window.getComputedStyle(navbarToggler).display !== "none") {
      navbarToggler.click();
    }
  });
});

// Function to handle navbar color change on scroll
function handleNavbarColorChange() {
  const myNav = document.getElementById("mainNav");
  const isScrolled = document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200;
  myNav.classList.toggle("nav-colored", isScrolled);
  myNav.classList.toggle("nav-transparent", !isScrolled);
}

// Add scroll event listener to change navbar color
window.addEventListener("scroll", handleNavbarColorChange);
