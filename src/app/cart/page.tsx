import React from 'react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>
      <Link href="/" className="text-blue-500 hover:underline">홈으로 돌아가기</Link>
    </div>
  );
}
