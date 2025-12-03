"use client";

import Image from "next/image";
import Link from "next/link";



// 通常ラインナップ（画像つき）
const REGULAR_PRODUCTS = [
  {
    id: 1,
    name: "Ninki Velvet",
    description: "ダメージヘアをやさしく補修する低刺激シャンプー。",
    price: "¥3,520",
    tag: "DAMAGE CARE",
    image: "/products/face.jpg",
  },
  {
    id: 2,
    name: "Shittori Silk ",
    description: "週1で使える集中ケアマスク。",
    price: "¥4,180",
    tag: "WEEKLY",
    image: "/products/red.jpg",
  },
  {
    id: 3,
    name: "Kaoli Oil",
    description: "重さゼロのツヤ仕上げオイル。",
    price: "¥3,960",
    tag: "STYLING",
    image: "/products/body.jpg",
  },
  {
    id: 4,
    name: "Triple care",
    description: "頭皮環境をすっきり整えるクレンザー。",
    price: "¥3,850",
    tag: "SCALP",
    image: "/products/green.jpg",
  },
];

const SUBSCRIPTION_PRODUCTS = [
  {
    id: 5,
    name: "Shampoo & Treatment Set",
    description: "ベーシックなお手入れをサブスクで。",
    price: "¥6,930 / 月",
    tag: "SUBSCRIPTION",
    image: "/products/xoagirl.jpg",
  },
  {
    id: 6,
    name: "Damage Repair Course",
    description: "ハイダメージ向け集中ケアコース。",
    price: "¥8,800 / 月",
    tag: "SUBSCRIPTION",
    image: "/products/ninki-1.jpg",
  },
  {
    id: 7,
    name: "Scalp Balance Course",
    description: "頭皮ケアを軸にしたバランスコース。",
    price: "¥7,590 / 月",
    tag: "SUBSCRIPTION",
    image: "/products/shittori-1.jpg",
  },
  {
    id: 8,
    name: "Full Routine Course",
    description: "ライン使いのトータルルーティン。",
    price: "¥11,000 / 月",
    tag: "SUBSCRIPTION",
    image: "/products/white.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* ===== ヒーローセクション ===== */}
      <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden border-b border-neutral-100">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/products/dresser1.jpg')" }}
        />

        {/* テキストブロック */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-8 md:px-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.35em] text-neutral-500 mb-4">
              HAIR CARE COLLECTION
            </p>
            <h1 className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
              深層部から、ケアする贅沢を。
              <br />
              ノイズのないツヤと手触りを、あなたの日常に。
            </h1>
            <p className="text-sm text-neutral-500 mb-8">
              最小限の成分で、最大限の質感へ。ESTHÉTIQUE が提案するヘアケアライン。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#products"
                className="px-6 py-3 text-sm border border-neutral-900 rounded-full tracking-[0.25em] hover:bg-neutral-900 hover:text-white transition"
              >
                VIEW PRODUCTS
              </Link>
              <Link
                href="#subscription"
                className="px-6 py-3 text-sm border border-neutral-300 rounded-full tracking-[0.25em] text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition"
              >
                SUBSCRIPTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 商品ラインナップ（通常購入） ===== */}
      <section id="products" className="px-10 pt-20 pb-24">
        <h2 className="text-xl font-light tracking-[0.25em] mb-12">
          Lineup
        </h2>

        {/* 通常購入 4列 */}
        <div className="w-full grid grid-cols-4 gap-8 mb-10">
          {REGULAR_PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group block border border-neutral-200/80 bg-white hover:border-neutral-900/50 transition"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <div className="text-[11px] tracking-[0.25em] text-neutral-400 mb-2">
                  {p.tag}
                </div>
                <div className="font-medium text-[15px] tracking-[0.06em] text-neutral-900 mb-1">
                  {p.name}
                </div>
                <div className="text-sm text-neutral-500 leading-relaxed">
                  {p.description}
                </div>
                <div className="mt-5 text-[13px] font-medium tracking-[0.18em] text-neutral-900">
                  {p.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== サブスク ラインナップ ===== */}
      <section id="subscription" className="px-10 pt-24 pb-40">
        <h3 className="text-xl font-light tracking-[0.25em] mb-12">
          Subscription Lineup
        </h3>

        <div className="w-full grid grid-cols-4 gap-8">
          {SUBSCRIPTION_PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group block border border-neutral-200/80 bg-white hover:border-neutral-900/50 transition"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <div className="text-[11px] tracking-[0.25em] text-neutral-400 mb-2">
                  {p.tag}
                </div>
                <div className="font-medium text-[15px] tracking-[0.06em] text-neutral-900 mb-1">
                  {p.name}
                </div>
                <div className="text-sm text-neutral-500 leading-relaxed">
                  {p.description}
                </div>
                <div className="mt-5 text-[13px] font-medium tracking-[0.18em] text-neutral-900">
                  {p.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
