import React from "react";
import Link from "next/link";
import Image from "next/image";
// 3번째 이미지만 로컬 이미지로 import
import orangeImage from "../../../public/images/food2.png";


// 더 눈에 띄는 로그 형식 사용
let 상품 = ["토마토", "banana", "orange"];
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
       
        {상품.map((상품, i) => { 
          return (
            <div key={i} className="food">
              <h4>{상품} $40</h4>
              {/* 첫 번째와 두 번째 이미지는 기존 방식 유지 */}
              {i < 2 && (
                <img 
                  src={`/images/food${i}.png`}
                  alt={상품} 
                />
              )}
              
              {/* 3번째 이미지는 로컬 이미지 import 방식 사용 */}
              {i === 2 && (
                <Image 
                  src={orangeImage}
                  alt={상품}
                  width={100}
                  height={100}
                  priority
                />
              )}
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
