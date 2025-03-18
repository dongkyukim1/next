import React from "react";
import 하이 from "./assignment/page";

// CartItem 컴포넌트 (props 사용)
function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>상품명: {item}</p>
      <p>$40</p>
      <p>1개</p>
      <하이 />
      <Banner content="롯데카드" /> {/* CartItem 하단에 Banner */} 
      <Banner content="현대카드" />
      <Btn color="blue" /> {/* CartItem 하단에 Button */}
    </div>
    
  );
}
function Banner (props) {
  return (
    <div className="bg-g-100 p-4 text-center">
      <h3>{props.content} 무이자 이벤트</h3>
      <p>12% 할인</p>
    </div>
  );
}

function Btn(props){
  return <button style={{ background: props.color }}>버튼임</button>
}
// Cart 컴포넌트
export default function Cart() {
  let 장바구니 = ["토마토", "바나나", "orange"]; // DB에서 가져온 데이터라고 가정

  return (
    <div>
      <h4 className="title">Cart</h4>

      {/* 배열을 map으로 반복하여 CartItem에 item을 전달 */}
      {장바구니.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}
