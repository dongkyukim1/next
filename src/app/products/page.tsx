"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 3번째 이미지만 로컬 이미지로 import
import orangeImage from "../../../public/images/food2.png";

// 상품 리스트
const 상품 = ["토마토", "banana", "orange"];

export default function ProductsPage() {
  const [수량, 수량변경] = useState(0); // ✅ 기본적인 useState 사용

  useEffect(() => {
    console.log("=".repeat(50));
    console.log("상품 데이터:", 상품);
    console.log("수량 상태:", 수량);
    console.log("=".repeat(50));
  }, [수량]);

  return (
    <div className="container mx-auto p-4"> {/* ✅ className 사용 */}
      <h4 className="title">상품 목록</h4>

      {/* 하나의 수량만 관리하는 기본 useState 공부 */}
      <div className="food">
        <h4>공통 수량 관리</h4>
        <button onClick={()=> 수량변경(수량-1)}>-</button>
        <span>{수량}</span>
        <button onClick={() => 수량변경(수량 + 1)}>+</button>
        
      </div>
      
  

      {/* 상품 리스트 */}
      {상품.map((상품, i) => (
        <div key={i} className="food">
          <h4>{상품} $40</h4>

          {/* 첫 번째와 두 번째 이미지는 기존 방식 유지 */}
          {i < 2 && <img src={`/images/food${i}.png`} alt={상품} />}

          {/* 3번째 이미지는 로컬 이미지 import 방식 사용 */}
          {i === 2 && (
            <Image src={orangeImage} alt={상품} width={100} height={100} priority />
          )}
        </div>
      ))}

      {/* 홈으로 돌아가기 */}
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
