import React from 'react';
import Link from 'next/link';

// 서버 컴포넌트에서 데이터를 가져오는 예시
async function getProducts() {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  return [
    { id: 1, name: '상품 1', price: 10000 },
    { id: 2, name: '상품 2', price: 20000 },
    { id: 3, name: '상품 3', price: 30000 },
  ];
}

export default async function ProductsPage() {
  // 서버 컴포넌트에서 비동기 데이터 가져오기
  const products = await getProducts();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">상품 목록</h1>
      
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price.toLocaleString()}원</p>
            <Link 
              href={`/products/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              상세 보기
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 