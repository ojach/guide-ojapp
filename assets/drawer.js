document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawerToggle");
  const menu = document.getElementById("drawerMenu");
  const overlay = document.getElementById("drawerOverlay");

  const openDrawer = () => {
    menu.classList.add("open");
    overlay.classList.add("active");
  };

  const closeDrawer = () => {
    menu.classList.remove("open");
    overlay.classList.remove("active");
  };

  btn.addEventListener("click", openDrawer);
  overlay.addEventListener("click", closeDrawer);
});
