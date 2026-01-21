document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("drawer");
  const btn = document.getElementById("drawerBtn");

  btn.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });
});

