"use client";

import Image from "next/image";
import Link from "next/link";

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
    <main className="bg-white text-neutral-900">
      {/* 全体の「縦リズム」をここで管理 */}
      <div className="space-y-24 md:space-y-32">
        {/* ========= HERO（動画） ========= */}
        <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden border-b border-neutral-100">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/products/hero22.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-8 md:px-10">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.35em] text-neutral-200 mb-4">
                HAIR CARE COLLECTION
              </p>
              <h1 className="text-3xl md:text-4xl font-light leading-relaxed text-white mb-6">
                {/* キャッチコピー入れるならここ */}
              </h1>
              <p className="text-sm text-neutral-200 mb-8">
                {/* サブコピー入れるならここ */}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#products"
                  className="px-6 py-3 text-sm border border-white/80 text-white rounded-full tracking-[0.25em] hover:bg-white hover:text-neutral-900 transition"
                >
                  VIEW PRODUCTS
                </Link>
                <Link
                  href="#subscription"
                  className="px-6 py-3 text-sm border border-white/40 text-white/80 rounded-full tracking-[0.25em] hover:border-white hover:text-white transition"
                >
                  SUBSCRIPTION
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========= Lineup ========= */}
        <section id="products" className="px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-left mb-12 md:mb-14">
            Lineup
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {REGULAR_PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group block border border-neutral-200 bg-white hover:border-neutral-900/50 transition"
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

        {/* ========= Subscription Lineup ========= */}
        <section id="subscription" className="px-10 pb-32">
          <h3 className="text-2xl md:text-3xl font-semibold text-left mb-12 md:mb-14">
            Subscription Lineup
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {SUBSCRIPTION_PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group block border border-neutral-200 bg-white hover:border-neutral-900/50 transition"
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
      </div>
    </main>
  );
}