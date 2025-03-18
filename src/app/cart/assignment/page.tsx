"use client"
import { useState } from "react";

export default function 하이() {
    const [수량, 수량변경] = useState([0,0,0]);
    
    // 증가 함수
    const 증가 = (index: number) => {
        const 새수량 = [...수량];
        새수량[index] = 새수량[index] + 1;
        수량변경(새수량);
    };
    
    // 감소 함수
    const 감소 = (index: number) => {
        const 새수량 = [...수량];
        새수량[index] = Math.max(0, 새수량[index] - 1);
        수량변경(새수량);
    };
    
    // 상품 데이터
    const 상품목록 = [
      { 이름: '토마토', 가격: 1000 },
      { 이름: '바나나', 가격: 2000 },
      { 이름: '오렌지', 가격: 3000 }
    ];
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">상품 목록</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {상품목록.map((상품, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{상품.이름}</h2>
                <p className="text-lg font-bold text-blue-600 mb-4">{상품.가격.toLocaleString()}원</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button 
                      onClick={() => 감소(index)} 
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-medium">{수량[index]}</span>
                    <button 
                      onClick={() => 증가(index)} 
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className={`px-3 py-1 rounded-md ${수량[index] > 0 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    disabled={수량[index] === 0}
                  >
                    담기
                  </button>
                </div>
                
                {수량[index] > 0 && (
                  <div className="mt-3 text-right">
                    <p className="text-sm text-gray-600">합계: <span className="font-bold">{(상품.가격 * 수량[index]).toLocaleString()}원</span></p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">총 금액:</span>
            <span className="text-xl font-bold text-blue-600">
              {상품목록.reduce((total, 상품, index) => total + (상품.가격 * 수량[index]), 0).toLocaleString()}원
            </span>
          </div>
          
          <button 
            className={`w-full mt-4 py-2 rounded-md text-white font-medium ${수량.some(qty => qty > 0) ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={!수량.some(qty => qty > 0)}
          >
            주문하기
          </button>
        </div>
      </div>
    );
}