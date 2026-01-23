document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
