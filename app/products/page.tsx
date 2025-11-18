// app/products/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// カードとグリッドの動き（パキパキ版）
const gridVariants = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const cardVariants = {
  initial:  { opacity: 0, y: 14 },
  animate:  { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 1, mass: 0.1 } },
  hover:    { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 80, damping: 1 } },
  tap:      { scale: 0.99, transition: { type: "spring", stiffness: 80, damping: 1 } },
};

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
 { id: "oil-1", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/flowergold.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-2", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/fiowerwhite2.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-3", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/bodycream3.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-4", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/2colorgreen4.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-5", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/brown5.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-6", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/bigbrown6.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-7", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/goldperfume7.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-8", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/graylotion8.jpg", href: "/shop", tag: "BEST" },
  { id: "oil-9", name: "ボタニカル ヘアオイル", description: "軽い仕上がりとツヤ感が特長。", price: 4180, img: "/products/yeiiowserum9.jpg", href: "/shop", tag: "BEST" },
];

export default function ProductsPage() {
  return (
    <main className="px-6 md:px-12 py-12 bg-white text-[var(--text-main)]">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-gray-900">商品一覧</h1>
        <p className="mt-2 text-black/60">サロン厳選のヘアケア・フェイスケアアイテムをご紹介します。</p>

        {/* カードグリッド */}
<motion.div
  className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
  variants={gridVariants}
  initial="initial"
  animate="animate"
>
  {PRODUCTS.map((p, i) => (
    <motion.article
      key={`${p.id}-${i}`}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="hb-card will-change-transform bg-white !rounded-none shadow-md transition hover:shadow-lgflex flex-col h-full"

    >
      {/* 画像 */}
      <div className="relative aspect-[4/3] bg-white flex items-center justify-center">
        <Image
          src={p.img}
          alt={p.name}
           width={500}
 　　　　　 height={500}
          className="object-cover"
          sizes="(min-width:1024px) 33vw, 100vw"
          priority={i < 2}
        />
        {p.tag && (
          <span className="absolute left-2 top-2 bg-white/80 backdrop-blur-sm text-xs px-2 py-0.5 rounded-none">
            {p.tag}
          </span>
        )}
      </div>

      {/* テキスト */}
      <div className="p-4">
        <h3 className="font-medium text-lg">{p.name}</h3>
        <p className="text-sm text-black/70">{p.description}</p>

        {/* 価格 + ボタン */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-2xl font-bold leading-none">¥{p.price.toLocaleString("ja-JP")}</div>
        <Link
  href={p.href}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block ml-4 px-5 py-2 rounded-full bg-black text-white text-sm shadow-lg hover:opacity-95 transition"
>
  購入ページへ
</Link>
        </div>

        <div className="text-xs text-neutral-500 mt-1">(税込)</div>
      </div>
    </motion.article>
  ))}
</motion.div>
</section>
</main>
);
}
