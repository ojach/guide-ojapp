document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawerBtn");
  const drawer = document.getElementById("drawer");

  if (!btn || !drawer) return; // 安全対策

  btn.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });
});
