import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js 학습 프로젝트</h1>
      <p className="mb-4">Next.js를 배우기 위한 기본 프로젝트입니다.</p>
      <div className="flex gap-4">
        <Link href="/cart" className="text-blue-500 hover:underline">장바구니</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/products" className="text-blue-500 hover:underline">상품 목록</Link>
      </div>
    </div>
  );
}
