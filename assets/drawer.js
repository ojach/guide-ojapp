document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawerToggle");
  const menu = document.getElementById("drawerMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
