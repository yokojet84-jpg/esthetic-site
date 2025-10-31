// app/products/page.tsx
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;         // /public からのパス
  href: string;        // 購入リンク or 詳細へのリンク
  tag?: string;        // NEW / BEST など任意
};

const PRODUCTS: Product[] = [
  {
    id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
  },
  {
    id: "mask",
    name: "モイスト フェイスマスク（5枚）",
    description: "サロン帰りの透明感をおうちで。",
    price: 1980,
    img: "/products/mask.jpg",
    href: "/shop",
    tag: "SET",
  },
];

export default function ProductsPage() {
  return (
    <main className="px-6 md:px-12 py-12 bg-[var(--bg-main)] text-[var(--text-main)]">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-gray-900">
          商品一覧
        </h1>
        <p className="mt-2 text-black/60">
          サロン厳選のヘアケア・フェイスケアアイテムをご紹介します。
        </p>

        {/* カードグリッド */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {PRODUCTS.map((p) => (
  <article
  key={p.id}
  className="hb-card rounded-3xl p-8 bg-white/90 backdrop-blur-sm border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
>

    {/* 画像 */}
    <div className="relative aspect-[4/3] bg-neutral-50">
      <Image
        src={p.img}
        alt={p.name}
        fill
        className="object-cover group-hover:scale-[1.01] transition"
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        priority
      />
      {p.tag && <span className="absolute left-3 top-3 hb-badge">{p.tag}</span>}
    </div>

    {/* テキスト */}
    {/* テキスト領域 */}
<div className="p-5">
  <h3 className="text-lg md:text-xl font-medium tracking-wide text-gray-900">
    {p.name}
  </h3>
  <p className="mt-1 text-sm text-gray-500 leading-relaxed line-clamp-2">
    {p.description}
  </p>


      <div className="mt-3 flex items-baseline justify-between">
        <span className="hb-price">¥{p.price.toLocaleString()}</span>
        <span className="text-xs">(税込)</span>
      </div>

      {/* CTAボタン */}
      <Link href={p.href} target="_blank" rel="noopener noreferrer" className="hb-btn">
        購入ページへ
      </Link>
    </div>
         </article>
      ))}
    </div>

    <div className="mt-10 text-center text-xs text-black/50">
      決済・配送は提携ショップ（takanoyuribs.shop）で行われます。
    </div>
  </section>
</main>
);
}

