import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js 학습 프로젝트",
  description: "Next.js를 배우기 위한 기본 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="navbar bg-g-100 p-4 mb-4">
          <Link href="/" className="mr-4 font-medium">홈</Link>
          <Link href="/products" className="mr-4 font-medium">상품 목록</Link>
          <Link href="/cart" className="mr-4 font-medium">장바구니</Link>
          <Link href="/about" className="font-medium">About</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
