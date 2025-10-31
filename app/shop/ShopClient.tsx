"use client";
import * as React from "react";

export default function ShopClient() {
  const shopUrl = "https://www.takanoyuribs.shop/shop/";
  const [blocked, setBlocked] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setBlocked(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-xl md:text-2xl font-medium">オンラインショップ</h1>
        <p className="mt-2 text-sm text-black/60">
          サロン厳選のホームケア・美容アイテムをご購入いただけます。
        </p>
      </div>

      {/* 埋め込みショップ */}
      <div className="w-full" style={{ height: "calc(100vh - 140px)" }}>
        <iframe
          src={shopUrl}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* iframeがブロックされた場合の代替リンク */}
      {blocked && (
        <div className="fixed inset-x-0 bottom-4 flex justify-center">
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white px-6 py-3 text-sm shadow"
          >
            ショップを新しいタブで開く
          </a>
        </div>
      )}
    </main>
  );
}
