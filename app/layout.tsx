// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "ESTHÉTIQUE",
  description: "Esthetic & Boutique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased bg-white text-neutral-900">

        {/* ===== ヘッダー削除済み ===== */}

        {/* ===== ページ内容 ===== */}
        {children}

        {/* ===== フッターだけ残したい／これも要らなければ消してOK ===== */}
        
          <div className="mx-auto max-w-6xl px-6 py-10 text-[12px] text-neutral-500 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm tracking-[0.3em]">
                ESTHÉTIQUE
              </div>
              <p className="mt-2">
                BEAUTÉ &amp; BOUTIQUE — Osaka, Japan
              </p>
            </div>

            <div className="flex gap-6">
              {/* ここにリンクを戻したいときは追加すればOK */}
            </div>
          </div>
        
      </body>
    </html>
  );
}


