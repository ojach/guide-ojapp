// ヘッダー読込が終わったら動くようにする
window.addEventListener("DOMContentLoaded", () => {
  // fetch の完了を待つ
  const headerObserver = new MutationObserver(() => {
    const btn = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // 1回動いたら監視を止める
    headerObserver.disconnect();
  });

  headerObserver.observe(document.getElementById("header"), {
    childList: true,
  });
});
