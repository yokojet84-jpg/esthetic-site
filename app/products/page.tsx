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
  animate:  { opacity: 1, y: 0, transition: { type: "spring", stiffness: 800000, damping: 1, mass: 0.1 } },
  hover:    { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 800000, damping: 1 } },
  tap:      { scale: 0.99, transition: { type: "spring", stiffness: 800000, damping: 1 } },
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
     id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
  },
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
    id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
  },
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
    id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
  },
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
    id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
  },
   {
    id: "oil",
    name: "ボタニカル ヘアオイル",
    description: "軽い仕上がりとツヤ感が特長。",
    price: 4180,
    img: "/products/oil.jpg",
    href: "/shop",      // 後で外部ショップURLに差し替え可
    tag: "BEST",
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
<motion.div
  className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
  variants={gridVariants}
  initial="initial"
  animate="animate"
>
{PRODUCTS.map((p, i) => (
  <motion.article
    key={p.id}
    variants={cardVariants}
    whileHover="hover"
    whileTap="tap"
    className="hb-card will-change-transform"
  >
    {/* 画像 */}
    <div className="relative aspect-[4/3] bg-neutral-50">
      <Image
        src={p.img}
        alt={p.name}
        fill
        className="object-cover"
        sizes="(min-width:1024px) 33vw, 100vw"
        priority={i < 2}  // ✅ 上から2枚だけ priority を付ける
      />
      {p.tag && (
        <span className="absolute left-2 top-2">{p.tag}</span>
      )}
    </div>

    {/* テキスト */}
    <div className="p-4">
      <h3 className="font-medium text-lg">{p.name}</h3>
      <p className="text-sm text-black/70">{p.description}</p>
    </div>
  </motion.article>
))}

</motion.div>
</section>
</main>
);
}
