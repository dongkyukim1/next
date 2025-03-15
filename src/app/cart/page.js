import 작명 from './data.js';
import React from "react";
import 하이 from "./assgingment.tsx";
// CartItem 컴포넌트
function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
      <하이/>
    </div>
  );
}
console.log(작명);
// Cart 컴포넌트
export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      
      {/* CartItem을 사용하여 반복 렌더링 */}
      <CartItem />
      <CartItem />
    </div>
  );
}
