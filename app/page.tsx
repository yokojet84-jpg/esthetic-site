// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-4xl md:text-6xl tracking-wide text-gray-900">
        ようこそ、オンラインショップへ
      </h1>
      <p className="text-gray-500 mt-6">
        上質なビューティーアイテムをお届けします。
      </p>

      {/* ここが大事：<Link href="/products"> だけにする */}
      <Link
        href="/products"
        prefetch={false}
        className="mt-10 inline-flex px-8 py-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 transition"
      >
        商品一覧を見る
      </Link>
    </main>
  );
}

