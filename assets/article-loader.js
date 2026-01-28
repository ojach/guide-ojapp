(async () => {

  // slug取得
  const slug = location.pathname.split('/').pop().replace('.html', '');

  // メタ情報取得
  const list = await fetch('/articles/list.json').then(r => r.json());
  const meta = list.find(a => a.slug === slug);

  if (!meta) {
    document.getElementById("article").innerHTML = "<p>記事が見つかりません。</p>";
    return;
  }

  // SEO反映
  document.title = `${meta.title} | OJapp Guide`;
  document.querySelector("meta[name='description']").content = meta.description;

  // OGP反映
  document.querySelector("meta[property='og:title']").content = meta.title;
  document.querySelector("meta[property='og:description']").content = meta.description;
  document.querySelector("meta[property='og:image']").content = meta.thumb;
  document.querySelector("meta[property='og:url']").content = location.href;

  // 本文読込
  const body = await fetch(`/articles/content/${slug}.html`).then(r => r.text());

  // 記事生成
  document.getElementById("article").innerHTML = `
    <div class="thumb-wrap">
    <img src="${meta.thumb}" alt="${meta.title}" class="article-thumb">
  </div>
    <p class="subtitle">${meta.subtitle}</p>
    <article>${body}</article>
    <hr class="article-end">

<section class="ojapp-about">
  <h2>OJapp について</h2>
  <p>
    OJapp は、ホーム画面を自由にカスタムするための無料ツール集です。
    写真分割ツール「OJapp splitter」、再現式パスワード生成「OJ-Pass」、
    ウォーターマーク生成「WaterMark」、高画質写真を圧縮してガラケー風フィルム風にする「PastCamera」、
     など、すべてブラウザだけで無料で使えます。
  </p>
  <p><a href="https://ojapp.app/top/">▶ OJapp を見る</a></p>
</section>
  `;
})();
