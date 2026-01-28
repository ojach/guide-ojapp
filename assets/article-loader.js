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

<hr>

<section class="ojapp-about">
  <h2>OJapp について</h2>

  <p>
    OJapp は、ホーム画面をもっと自由に楽しむための
    “小さくて便利な Web ツール” を集めたサービスです。
    すべてブラウザだけで使えるため、アプリのインストールは不要。
    iPhone・Android どちらでもすぐに利用できます。
  </p>

  <p>
    写真を行×列に分割できる <strong>OJapp splitter</strong>、
    忘れても思い出せる再現式パスワード生成 <strong>OJ-Pass</strong>、
    画像に自然なウォーターマークを入れられる <strong>WaterMark</strong>、
    古いデジカメ風の写真が作れる <strong>PastCamera</strong> など、
    シンプルだけど “ちょうど欲しい” を満たすツールを提供しています。
  </p>

  <p>
    面倒な設定や登録も不要で、誰でもすぐ使えるように設計しています。
    ホーム画面のカスタム、SNS投稿、作品づくりなど、
    日常の「もう少しこうしたい」を軽くするために作られています。
  </p>

  <p class="ojapp-link">
    ▶ <a href="https://ojapp.app/top/">OJapp を見る</a>
  </p>
</section>
  `;
})();
