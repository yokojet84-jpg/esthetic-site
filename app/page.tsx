"use client";

import Link from "next/link";

const REGULAR_PRODUCTS = [
  {
    id: 1,
    name: "Velvet Repair Shampoo",
    description: "ダメージヘアをやさしく補修する低刺激シャンプー。",
    price: "¥3,520",
    tag: "DAMAGE CARE",
  },
  {
    id: 2,
    name: "Silk Treatment Mask",
    description: "週1で使える集中ケアマスク。",
    price: "¥4,180",
    tag: "WEEKLY",
  },
  {
    id: 3,
    name: "Glow Finish Oil",
    description: "重さゼロのツヤ仕上げオイル。",
    price: "¥3,960",
    tag: "STYLING",
  },
  {
    id: 4,
    name: "Calm Scalp Cleanser",
    description: "頭皮環境をすっきり整えるクレンザー。",
    price: "¥3,850",
    tag: "SCALP",
  },
];

const SUBSCRIPTION_PRODUCTS = [
  {
    id: 5,
    name: "Shampoo & Treatment Set",
    description: "ベーシックなお手入れをサブスクで。",
    price: "¥6,930 / 月",
    tag: "SUBSCRIPTION",
  },
  {
    id: 6,
    name: "Damage Repair Course",
    description: "ハイダメージ向け集中ケアコース。",
    price: "¥8,800 / 月",
    tag: "SUBSCRIPTION",
  },
  {
    id: 7,
    name: "Scalp Balance Course",
    description: "頭皮ケアを軸にしたバランスコース。",
    price: "¥7,590 / 月",
    tag: "SUBSCRIPTION",
  },
  {
    id: 8,
    name: "Full Routine Course",
    description: "ライン使いのトータルルーティン。",
    price: "¥11,000 / 月",
    tag: "SUBSCRIPTION",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="px-10 py-16">
        <h2 className="text-xl font-light tracking-[0.25em] mb-6">
          Lineup
        </h2>

        {/* 通常購入 4列 */}
        <div className="w-full grid grid-cols-4 gap-0 mb-16">
          {REGULAR_PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="block border border-neutral-200"
            >
              <div className="bg-neutral-100 aspect-[3/4] flex items-center justify-center text-neutral-400">
                IMAGE
              </div>

              <div className="p-6">
                <div className="text-[11px] tracking-[0.25em] text-neutral-400 mb-1">
                  {p.tag}
                </div>
                <div className="font-semibold text-neutral-900">
                  {p.name}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {p.description}
                </div>
                <div className="mt-4 font-medium text-neutral-900">
                  {p.price}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-light mt-2 mb-6">
          Subscription Lineup
        </h3>

        {/* 定期購入 4列（フル幅） */}
        <div className="w-full grid grid-cols-4 gap-0">
          {SUBSCRIPTION_PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="block border border-neutral-200"
            >
              <div className="bg-neutral-100 aspect-[3/4] flex items-center justify-center text-neutral-400">
                IMAGE
              </div>

              <div className="p-6">
                <div className="text-[11px] tracking-[0.25em] text-neutral-400 mb-1">
                  {p.tag}
                </div>
                <div className="font-semibold text-neutral-900">
                  {p.name}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {p.description}
                </div>
                <div className="mt-4 font-medium text-neutral-900">
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

