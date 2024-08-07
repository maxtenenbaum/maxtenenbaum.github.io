document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  document.getElementById("menu-toggle").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  });

  const introText = document.querySelectorAll(".intro h3");
  introText.forEach((text, index) => {
    setTimeout(() => {
      text.style.opacity = 1;
      text.style.transform = "translateY(0)";
    }, index * 500);
  });
});
