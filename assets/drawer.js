document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("drawerToggle");
  const menu = document.getElementById("drawerMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
