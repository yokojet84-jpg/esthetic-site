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
      <body className="antialiased bg-[var(--bg-main)] text-[var(--text-main)]">
        {/* ===== Header ===== */}
        <header>
          <div className="container py-5 flex items-center justify-between">
            <a
              href="/"
              className="logo text-xl md:text-2xl tracking-[0.28em]"
            >
              ESTHÉTIQUE
            </a>

            <nav className="flex items-center gap-6 text-sm">
              <a href="/esthetic" className="navlink">
                ESTHETIC
              </a>
              <a href="/products" className="navlink">
                PRODUCTS
              </a>
              <a href="/shop" className="navlink">
                SHOP
              </a>
            </nav>
          </div>
          <div className="hr"></div>
        </header>

        {/* ===== Page content ===== */}
        <div className="container py-8">{children}</div>

        {/* ===== Footer ===== */}
        <footer className="mt-20">
          <div className="hr"></div>
          <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
            <div>
              <div className="logo text-lg tracking-[0.28em]">ESTHÉTIQUE</div>
              <p className="mt-3 text-muted">BEAUTÉ & BOUTIQUE — Osaka, Japan</p>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-6 md:justify-end">
              <a className="navlink" href="/esthetic">
                Esthetic
              </a>
              <a className="navlink" href="/products">
                Products
              </a>
              <a className="navlink" href="/shop">
                Shop
              </a>
              <a
                className="navlink"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
<header className="sticky top-0 z-40 bg-[var(--bg-main)]/80 backdrop-blur border-b border-black/5">
  <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
    <div className="text-sm tracking-[0.35em] font-medium text-[var(--ink)]">ESTHETIQUE</div>
    <nav className="hidden sm:flex items-center gap-6 text-[13px] text-[var(--ink-60)]">
      <a href="/esthetic" className="hover:text-[var(--ink)]">ESTHETIC</a>
      <a href="/products" className="hover:text-[var(--ink)]">PRODUCTS</a>
      <a href="/shop" className="hover:text-[var(--ink)]">SHOP</a>
    </nav>
  </div>
</header>

{/* ページの内容 */}
{children}

<footer className="mt-24 border-t border-black/5">
  <div className="mx-auto max-w-6xl px-6 py-10 text-[12px] text-[var(--ink-60)] flex items-center justify-between">
    <span>BEAUTÉ &amp; BOUTIQUE — Osaka, Japan</span>
    <div className="flex gap-6">
      <a href="/esthetic" className="hover:text-[var(--ink)]">Esthetic</a>
      <a href="/products" className="hover:text-[var(--ink)]">Products</a>
      <a href="/shop" className="hover:text-[var(--ink)]">Shop</a>
    </div>
  </div>
</footer>

    </html>
  );
}
