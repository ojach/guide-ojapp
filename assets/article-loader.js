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
  document.querySelector("meta[property='og:image']").content = meta.ogp;
  document.querySelector("meta[property='og:url']").content = location.href;

  // 本文読込
  const body = await fetch(`/articles/content/${slug}.html`).then(r => r.text());

  // 記事生成
  document.getElementById("article").innerHTML = `
    <h1>${meta.title}</h1>
    <p class="subtitle">${meta.subtitle}</p>
    <article>${body}</article>
  `;
})();
