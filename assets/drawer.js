document.addEventListener("DOMContentLoaded", () => {
  const headerLoaded = setInterval(() => {
    const btn = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (btn && menu) {
      clearInterval(headerLoaded);

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  }, 50);
});
