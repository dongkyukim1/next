import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 서버 컴포넌트에서 데이터를 가져오는 예시
async function getProduct(id: string) {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  const products = [
    { id: 1, name: '상품 1', price: 10000, description: '상품 1에 대한 상세 설명입니다.' },
    { id: 2, name: '상품 2', price: 20000, description: '상품 2에 대한 상세 설명입니다.' },
    { id: 3, name: '상품 3', price: 30000, description: '상품 3에 대한 상세 설명입니다.' },
  ];
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return null;
  }
  
  return product;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // params에서 id를 가져옵니다 (URL에서 추출됨)
  const product = await getProduct(params.id);
  
  // 상품이 없으면 404 페이지로 리디렉션
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-xl font-semibold text-gray-800 mb-2">
          가격: {product.price.toLocaleString()}원
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          장바구니에 추가
        </button>
      </div>
      
      <div className="flex gap-4">
        <Link href="/products" className="text-blue-500 hover:underline">
          상품 목록으로 돌아가기
        </Link>
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 