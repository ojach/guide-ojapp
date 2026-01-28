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


<section class="ojapp-card">
  <h2>OJapp について</h2>

  <p>
    OJapp は、ホーム画面をもっと自由に楽しむための
    “小さくて便利な Web ツール” を集めたサービスです。
    すべてブラウザだけで使え、アプリのインストールは不要。
    iPhone・Android のどちらでもすぐ利用できます。
  </p>

  <p>
    写真を行×列に分割できる <strong>OJapp splitter</strong>、
    忘れても思い出せる再現式パスワード <strong>OJ-Pass</strong>、
    自然なウォーターマーク生成 <strong>WaterMark</strong>、
    高画質写真をガラケー風に変換する <strong>PastCamera</strong> など、
    “ちょうど欲しい” を満たすツールをそろえています。
  </p>

  <p>
    登録不要・設定不要で、誰でもすぐ使える設計。
    ホーム画面のカスタム、SNS投稿、作品づくりまで、
    日常の「もう少しこうしたい」を軽くするために作られています。
  </p>

  <p class="card-link">
    ▶ <a href="https://ojapp.app/">OJapp を見る</a>
  </p>
</section>

  `;
})();
