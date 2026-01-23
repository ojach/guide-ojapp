window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  // 部品読込完了を監視する
  const observer = new MutationObserver(() => {
    const btn = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    // どちらか欠けてたら待ち続ける
    if (!btn || !menu) return;

    // 見つかったらイベント登録
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    observer.disconnect(); // 任務完了
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
