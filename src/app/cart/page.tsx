import React from 'react';
import Link from 'next/link';

export default function CartPage() {
  // 장바구니 상품 데이터 (실제로는 상태나 API에서 가져올 것)
  const cartItems = [
    { id: 1, name: '토마토', price: 40, quantity: 1 },
    { id: 2, name: '바나나', price: 30, quantity: 2 },
  ];
  
  // 총 금액 계산
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="container mx-auto p-4">
      <h4 className="title">장바구니</h4>
      
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-header">
              <p>상품명</p>
              <p>가격</p>
              <p>수량</p>
              <p>합계</p>
            </div>
            
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p className="product-name">{item.name}</p>
                <p className="product-price">${item.price}</p>
                <div className="product-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button className="quantity-btn">+</button>
                </div>
                <p className="product-price">${item.price * item.quantity}</p>
              </div>
            ))}
            
            <div className="cart-total">
              <span>총 금액:</span>
              <span>${total}</span>
            </div>
            
            <button className="checkout-btn">결제하기</button>
          </>
        ) : (
          <div className="empty-cart">
            <p>장바구니가 비어있습니다.</p>
            <Link href="/products" className="text-blue-500 hover:underline">
              쇼핑 계속하기
            </Link>
          </div>
        )}
      </div>
      
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
} 