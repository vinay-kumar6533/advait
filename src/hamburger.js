
import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const hamcont = document.querySelector('.hamburger1');

  if (hamcont) { // null check
    hamcont.addEventListener("click", function() {
      window.location.href = "ham-menu.html";
    });
  } else {
    console.error("❌ .hamburger1 element not found in DOM");
  }
});