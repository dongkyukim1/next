import React from "react";
import Link from "next/link";

// 더 눈에 띄는 로그 형식 사용
let 상품 = ["apple", "banana", "orange"];
let 어레이 = [2, 3, 4];
어레이.map((a) => {
  console.log(a)
  return;
});
console.log("=".repeat(50));
console.log("상품 데이터:", 상품);
console.log("=".repeat(50));

export default async function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h4 className="title">상품 목록</h4>
        {상품.map((상품, index) => { 
          return (
            <div key={index} className="food">
              <h4>{상품} $40</h4>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
