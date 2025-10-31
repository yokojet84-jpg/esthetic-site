"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const NAV = [
  { label: "メニュー", href: "#menu" },
  { label: "施術フロー", href: "#flow" },
  { label: "ビフォーアフター", href: "#ba" },
  { label: "FAQ", href: "#faq" },
  { label: "アクセス", href: "#access" },
  { label: "SHOP", href: "/products" },
];


const COURSES = [
  {
    id: "face",
    title: "小顔フェイシャル",
    lead: "フェイスライン・むくみ・毛穴のざらつきにやさしくアプローチ。",
    time: "60分",
    price: "¥8,800",
    first: "初回 ¥6,600",
    points: ["クレンジング/洗浄", "デコルテ〜フェイスドレナージュ", "マスク/保湿/仕上げ"],
    image: "/placeholder/face.jpg",
  },
  {
    id: "pore",
    title: "毛穴ディープケア",
    lead: "角栓/黒ずみ/ざらつきに対し、つるんとした印象へ。",
    time: "70分",
    price: "¥9,900",
    first: "初回 ¥7,700",
    points: ["洗浄/スチーム", "温冷ケア/やさしい吸引", "うるおいパック/仕上げ"],
    image: "/placeholder/pore.jpg",
  },
  {
    id: "body",
    title: "ボディメイク（上半身）",
    lead: "肩・背中・ウエストラインの巡りを促し、姿勢から美しく。",
    time: "80分",
    price: "¥12,100",
    first: "初回 ¥9,900",
    points: ["背面ドレナージュ", "肩甲骨/二の腕アプローチ", "温感マスク/仕上げ"],
    image: "/placeholder/body.jpg",
  },
];

const FAQ = [
  { q: "メイクは落としますか？", a: "フェイシャルはクレンジング込み。ポイントメイクは事前オフ推奨です。" },
  { q: "どれくらいで変化を感じますか？", a: "個人差はありますが、むくみ系は当日実感される方が多いです。" },
  { q: "支払い方法は？", a: "現金/各種クレジット/QR決済に対応しています。" },
];

const POLICY = {
  cancel: "前日18:00以降のキャンセルは施術料金の50%、無断キャンセルは100%を頂戴します。",
};

const ACCESS = {
  name: "Salon 名（仮）",
  address: "大阪府大阪市中央区○○ 1-2-3 ○○ビル3F",
  hours: "10:00 - 20:00（最終受付 19:00）",
  phone: "06-XXXX-XXXX",
  station: "心斎橋駅 徒歩3分",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!...(差し替えてね)",
};

const REVIEW_SNIPPETS = [
  { name: "A.S.", text: "むくみが流れて顔が軽い。写真写りが変わりました。" },
  { name: "M.K.", text: "勧誘がなくて安心。丁寧で贅沢な時間でした。" },
  { name: "Y.N.", text: "施術後のメイクノリが全然違う！また来ます。" },
];

const Header = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full" style={{ background: "#C4B08E" }} />
        <span className="tracking-wide text-lg">ESTHÉTIQUE</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} className="text-sm hover:opacity-70">
            {n.label}
          </a>
        ))}
      </nav>
      <a
        href="#reserve"
        className="ml-4 inline-flex items-center rounded-full border px-4 py-2 text-sm hover:text-white transition"
        style={{ borderColor: "#C4B08E" }}
      >
        予約する
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section>
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl md:text-5xl leading-tight">
          肌印象を底上げする、<br />プライベートエステ体験
        </h1>
        <p className="mt-5 text-[15px] leading-7 text-black/70">
          毛穴・むくみ・フェイスラインに、やさしく確かな一手を。初回限定プランをご用意しています。
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#menu" className="rounded-full bg-black text-white px-6 py-3 text-sm">メニューを見る</a>
          <a
            href="#reserve"
            className="rounded-full border px-6 py-3 text-sm hover:text-white transition"
            style={{ borderColor: "#C4B08E" }}
          >
            空き枠を確認
          </a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <Stat label="累計施術" value="3,200+" />
          <Stat label="継続率" value="82%" />
          <Stat label="レビュー" value="★4.8" />
        </div>
      </div>
      <div className="relative h-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow">
        <Image src="/placeholder/hero.jpg" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 ring-1 ring-black/5 rounded-3xl pointer-events-none" />
      </div>
    </div>
  </section>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-2xl py-5 shadow">
    <div className="text-xl font-semibold">{value}</div>
    <div className="text-xs text-black/60 mt-1">{label}</div>
  </div>
);

const Menu = () => {
  const [active, setActive] = useState(COURSES[0].id);
  const current = useMemo(() => COURSES.find((c) => c.id === active)!, [active]);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-4xl">メニュー / 料金</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {COURSES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-4 py-2 text-sm border ${active === c.id ? "bg-black text-white border-black" : "border-black/10 hover:border-black/30"}`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[280px] md:h-[360px] rounded-3xl overflow-hidden shadow">
          <Image src={current.image} alt={current.title} fill className="object-cover" />
        </div>
        <div className="rounded-3xl p-6 md:p-8 ring-1 ring-black/5" style={{ background: "#F7F7F5" }}>
          <h3 className="text-xl md:text-2xl font-semibold">{current.title}</h3>
          <p className="mt-2 text-sm text-black/70">{current.lead}</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {current.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: "#C4B08E" }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-end gap-4">
            <div><div className="text-xs text-black/50">所要時間</div><div className="text-lg">{current.time}</div></div>
            <div className="h-10 w-px bg-black/10" />
            <div><div className="text-xs text-black/50">通常</div><div className="text-xl font-semibold">{current.price}</div></div>
            <div className="h-10 w-px bg-black/10" />
            <div><div className="text-xs text-black/50">初回</div><div className="text-xl font-semibold" style={{ color: "#C4B08E" }}>{current.first}</div></div>
          </div>
          <a href="#reserve" className="mt-6 inline-flex rounded-full bg-black text-white px-6 py-3 text-sm">このメニューで予約</a>
        </div>
      </div>
    </section>
  );
};

const Flow = () => (
  <section id="flow">
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-4xl">施術フロー</h2>
      <ol className="mt-8 grid md:grid-cols-4 gap-6">
        {[
          { step: "1", title: "カウンセリング", desc: "お悩みと目標を共有。肌状態や体調を確認します。" },
          { step: "2", title: "クレンジング/洗浄", desc: "やさしく汚れを落とし、施術準備を整えます。" },
          { step: "3", title: "トリートメント", desc: "目的に応じた手技/機器でケア。リラックス重視。" },
          { step: "4", title: "仕上げ/アフター", desc: "整肌・ホームケア提案・次回目安をご案内。" },
        ].map((f) => (
          <li key={f.step} className="rounded-3xl p-6 ring-1 ring-black/5" style={{ background: "#F7F7F5" }}>
            <div className="text-sm text-black/50">Step {f.step}</div>
            <div className="mt-1 font-semibold">{f.title}</div>
            <p className="mt-2 text-sm text-black/70">{f.desc}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-black/50">キャンセル規定：{POLICY.cancel}</p>
    </div>
  </section>
);

const BeforeAfter = () => (
  <section id="ba" className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-4xl">ビフォー / アフター</h2>
    <p className="mt-2 text-sm text-black/60">同条件（照明・レンズ・距離・背景）で撮影。個人差があります。無加工で掲載。</p>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {[1,2,3].map((i)=>(
        <div key={i} className="bg-white rounded-3xl p-4 ring-1 ring-black/5 shadow">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-40 rounded-xl overflow-hidden">
              <Image src={`/placeholder/ba${i}-b.jpg`} alt="Before" fill className="object-cover" />
              <span className="absolute left-2 top-2 text-[11px] bg-black/70 text-white px-2 py-0.5 rounded-full">BEFORE</span>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden">
              <Image src={`/placeholder/ba${i}-a.jpg`} alt="After" fill className="object-cover" />
              <span className="absolute left-2 top-2 text-[11px] bg-black/70 text-white px-2 py-0.5 rounded-full">AFTER</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-black/60">フェイスライン / むくみ（1回）</p>
        </div>
      ))}
    </div>
  </section>
);

const Reviews = () => (
  <section style={{ background: "#F7F7F5" }}>
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-4xl">お客様の声</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {REVIEW_SNIPPETS.map((r, i) => (
          <figure key={i} className="bg-white rounded-3xl p-6 ring-1 ring-black/5 shadow">
            <blockquote className="text-sm text-black/80 leading-7">“{r.text}”</blockquote>
            <figcaption className="mt-3 text-xs text-black/50">— {r.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const FAQBlock = () => (
  <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-4xl">よくある質問</h2>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      {FAQ.map((f, i) => (
        <div key={i} className="rounded-3xl p-6 ring-1 ring-black/5" style={{ background: "#F7F7F5" }}>
          <div className="font-semibold">Q. {f.q}</div>
          <p className="mt-2 text-sm text-black/70">A. {f.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Access = () => (
  <section id="access">
    <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl md:text-4xl">アクセス</h2>
        <div className="mt-4 text-sm leading-7">
          <div className="font-semibold">{ACCESS.name}</div>
          <div>{ACCESS.address}</div>
          <div>{ACCESS.station}</div>
          <div>営業時間：{ACCESS.hours}</div>
          <div>Tel：{ACCESS.phone}</div>
        </div>
        <a href="#reserve" className="mt-6 inline-flex rounded-full border px-6 py-3 text-sm hover:text-white"
           style={{ borderColor: "#C4B08E" }}>
          空き枠を見る
        </a>
      </div>
      <div className="rounded-3xl overflow-hidden ring-1 ring-black/10 shadow h-[320px]">
        <iframe src={ACCESS.mapEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
);

const ReserveCTA = () => (
  <section id="reserve" style={{ background: "#101010", color: "white" }}>
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-4xl">オンライン予約</h2>
      <p className="mt-2 text-sm text-white/70">当日の無断キャンセルはお控えください。前日18:00まで変更可能です。</p>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl p-6 ring-1 ring-white/10" style={{ background: "rgba(255,255,255,.05)" }}>
          <div className="text-sm text-white/80">予約フォーム（外部サービス埋め込み例）</div>
          <div className="mt-3 rounded-xl overflow-hidden bg-white">
            <div className="p-6 text-sm text-black/60">
              ここに STORES予約 / Coubic / Square Appointments のウィジェットを埋め込んでください。
            </div>
          </div>
        </div>
        <div className="rounded-3xl p-6 ring-1 ring-white/10" style={{ background: "rgba(255,255,255,.05)" }}>
          <div className="text-sm text-white/80">LINE予約</div>
          <p className="mt-3 text-sm text-white/70">友だち追加で限定特典。自動リマインドで予約忘れを防止。</p>
          <a href="https://line.me/R/ti/p/xxxx" className="mt-6 inline-flex rounded-full bg-white text-black px-6 py-3">
            LINEで予約する
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8 text-sm">
        <div><div className="text-lg">ESTHÉTIQUE</div><p className="mt-3 text-white/60">肌印象を底上げする、プライベートエステサロン。</p></div>
        <div>
          <div className="font-semibold">メニュー</div>
          <ul className="mt-3 space-y-2 text-white/70">
            {COURSES.map((c) => (<li key={c.id}><a href="#menu">{c.title}</a></li>))}
          </ul>
        </div>
        <div>
          <div className="font-semibold">サポート</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#access">アクセス</a></li>
            <li><a href="#">プライバシー</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">ご予約</div>
          <a href="#reserve" className="mt-3 inline-flex rounded-full bg-white text-black px-6 py-3">予約する</a>
        </div>
      </div>
      <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} ESTHÉTIQUE</div>
    </div>
  </footer>
);

const LocalBusinessJSONLD = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: ACCESS.name,
    url: "https://example.com/esthetic",
    telephone: "+81-6-XXXX-XXXX",
    image: ["https://example.com/hero.jpg"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "○○区○○1-2-3 ○○ビル3F",
      addressLocality: "大阪市",
      addressRegion: "大阪府",
      postalCode: "000-0000",
      addressCountry: "JP",
    },
    geo: { "@type": "GeoCoordinates", latitude: 34.67, longitude: 135.50 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Thursday","Friday"], opens: "10:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "18:00" },
    ],
    priceRange: "¥¥",
    sameAs: ["https://www.instagram.com/your_salon","https://line.me/R/ti/p/xxxx"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};

export default function EstheticPage() {
  return (
    <main>
      <LocalBusinessJSONLD />
      <Header />
      <Hero />
      <Menu />
      <Flow />
      <BeforeAfter />
      <Reviews />
      <FAQBlock />
      <Access />
      <ReserveCTA />
      <Footer />
    </main>
  );
}
