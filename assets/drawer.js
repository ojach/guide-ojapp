document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (!btn || !menu) return; // 読み込み保険

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
