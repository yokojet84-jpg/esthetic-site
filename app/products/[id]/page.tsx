"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

// 仮の詳細データ（必要に応じて増やせる）
const PRODUCT_DETAILS: Record<
  string,
  {
    name: string;
    price: string;
    subtitle?: string;
    images: string[];
    sizes: { label: string; volume: string }[];
  }
> = {
  "1": {
    name: "ボタニカル ヘアオイル",
    price: "¥3,960",
    subtitle: "ライトフィニッシュオイル 90ml",
    images: [
      "/products/yellow1.jpg",
      "/products/blue1.jpg",
      "/products/brown1.jpg",
      "/products/green1.jpg",
      "/products/red1.jpg",
      "/products/pastel1.jpg",
      "/products/purple1.jpg",
      "/products/thingreen1.jpg",
    ],
    sizes: [
      { label: "30ml", volume: "30ml" },
      { label: "50ml", volume: "50ml" },
      { label: "90ml", volume: "90ml" },
      { label: "リフィル", volume: "REFILL" },
      { label: "リフィル", volume: "REFILL" },
      { label: "リフィル", volume: "REFILL" },
      { label: "リフィル", volume: "REFILL" },
      { label: "リフィル", volume: "REFILL" },
    ],
  },
};

export default function ProductPage({ params }: Props) {
  const product = PRODUCT_DETAILS[params.id] ?? PRODUCT_DETAILS["1"];

  // メインで表示する大きい画像
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeSize, setActiveSize] = useState(product.sizes[2]); // デフォ 90ml 風

// サイズ用の上段・下段データ
const firstRowSizes = product.sizes.slice(0, 4);
const secondRowSizes = product.sizes.slice(4, 8);


  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-8 py-12 flex gap-16 items-start">
        {/* 左：大きい画像＋スクロールで出てくる追加画像 */}
        <div className="flex-[3]">
          {/* ヒーロー画像（めちゃ大きく） */}
          <div className="relative w-full aspect-[4/5] bg-white shadow-sm mb-12">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* 下にスクロールしたら出てくる残りの画像たち */}
          <div className="space-y-10 pb-24">
            {product.images.slice(1).map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-[4/5] bg-white shadow-sm"
              >
                <Image
                  src={src}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 右：商品情報＋サイズのサムネ列 */}
        <div className="flex-[2] max-w-[420px] sticky top-12 self-start">
          <div className="mb-6">
            <p className="text-sm text-neutral-500 tracking-[0.18em] mb-1">
              HAIR CARE
            </p>
            <h1 className="text-2xl font-semibold leading-relaxed">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="mt-2 text-sm text-neutral-600">
                {product.subtitle}
              </p>
            )}
            <p className="mt-4 text-lg font-medium">{product.price}</p>
          </div>
{/* サイズ選択（クリックでメイン画像も切り替え） */}
{/* サイズ選択 */}
<div className="mt-6">
  <p className="text-xs tracking-[0.18em] text-neutral-500 mb-3">
    サイズ
  </p>

  {/* 上段 1〜4 */}
  <div className="flex gap-4 mb-4">
    {firstRowSizes.map((size, index) => {
      const img = product.images[index] ?? product.images[0];

      return (
        <button
          key={`row1-${index}`}
          type="button"
          onClick={() => {
            setActiveSize(size);
            setMainImage(img);
          }}
          className={`flex flex-col items-center border px-3 pt-3 pb-2 text-xs ${
            activeSize.label === size.label ? "border-black" : "border-neutral-200"
          }`}
        >
          <div className="relative w-16 h-16 bg-neutral-100 mb-2">
            <Image src={img} alt={size.label} fill className="object-contain" />
          </div>
          <span className="text-[11px]">{size.label}</span>
        </button>
      );
    })}
  </div>

  {/* 下段 5〜8 */}
  <div className="flex gap-4">
    {secondRowSizes.map((size, index) => {
      const realIndex = index + 4;
      const img = product.images[realIndex] ?? product.images[0];

      return (
        <button
          key={`row2-${index}`}
          type="button"
          onClick={() => {
            setActiveSize(size);
            setMainImage(img);
          }}
          className={`flex flex-col items-center border px-3 pt-3 pb-2 text-xs ${
            activeSize.label === size.label ? "border-black" : "border-neutral-200"
          }`}
        >
          <div className="relative w-16 h-16 bg-neutral-100 mb-2">
            <Image src={img} alt={size.label} fill className="object-contain" />
          </div>
          <span className="text-[11px]">{size.label}</span>
        </button>
      );
    })}
  </div>
</div>



          {/* 黒ボタン */}
          <button
            type="button"
            className="mt-10 w-full bg-black text-white py-4 text-xs tracking-[0.25em] flex items-center justify-center"
          >
            ショッピングバッグに追加
          </button>

                    {/* 下のリンクたち */}
          <div className="mt-8 space-y-2 text-xs text-neutral-600">
            <button
              type="button"
              className="block text-left hover:underline"
            >
              店舗在庫を見る
            </button>
            <button
              type="button"
              className="block text-left hover:underline"
            >
              商品詳細
            </button>
            <button
              type="button"
              className="block text-left hover:underline"
            >
              全国送料無料
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
