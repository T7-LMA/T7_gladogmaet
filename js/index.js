document.addEventListener("DOMContentLoaded", () => {
  const burgermenu = document.getElementById("burgermenu");
  const navLinks = document.getElementById("nav_links");

  burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burgermenu.classList.toggle("open");
  });
});
