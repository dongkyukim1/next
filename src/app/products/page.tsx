"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import orangeImage from "../../../public/images/food2.png";

// 상품 데이터
const 상품목록 = ["토마토", "바나나", "오렌지"];

export default function ProductsPage() {
  // 각 상품별 수량을 배열로 관리
  const [수량배열, 수량배열변경] = useState([0, 0, 0]);
  
  // 특정 인덱스의 수량만 변경하는 함수
  const 수량증가 = (index) => {
    const 새수량배열 = [...수량배열];
    새수량배열[index]++;
    수량배열변경(새수량배열);
  };
  
  const 수량감소 = (index) => {
    const 새수량배열 = [...수량배열];
    if (새수량배열[index] > 0) 새수량배열[index]--;
    수량배열변경(새수량배열);
  };

  return (
    <div className="container mx-auto p-4">
      <h4 className="title text-2xl font-bold mb-6 text-center">상품 목록</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {상품목록.map((상품, i) => (
          <div
            key={i}
            className="food border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-xl font-semibold mb-2">{상품} $40</h4>

            {/* 이미지 표시 - 3번째 이미지만 import 방식 사용 */}
            {i < 2 ? (
              <img
                src={`/images/food${i}.png`}
                alt={상품}
                className="w-full h-48 object-cover rounded-md"
              />
            ) : (
              <Image
                src={orangeImage}
                alt={상품}
                width={300}
                height={200}
                priority
                className="rounded-md"
              />
            )}

            {/* 수량 조절 UI */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <button
                  onClick={() => 수량감소(i)}
                  className="bg-gray-200 text-black px-3 py-1 rounded-l-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="bg-gray-100 text-black px-4 py-1">{수량배열[i]}</span>
                <button
                  onClick={() => 수량증가(i)}
                  className="bg-gray-200 text-black px-3 py-1 rounded-r-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                장바구니 추가
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
