import React from 'react';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <div className="bg-blue-50 p-4 mb-4 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800">상품 카테고리</h2>
        <div className="flex gap-4 mt-2">
          <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">전체</button>
          <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">의류</button>
          <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">전자기기</button>
          <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">식품</button>
        </div>
      </div>
      {children}
    </div>
  );
} 