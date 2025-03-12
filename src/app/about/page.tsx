import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About 페이지</h1>
      <p className="mb-4">Next.js 학습 프로젝트의 About 페이지입니다.</p>
      <Link href="/" className="text-blue-500 hover:underline">홈으로 돌아가기</Link>
    </div>
  );
} 