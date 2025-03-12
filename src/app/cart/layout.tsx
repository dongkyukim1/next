import React from 'react';

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="bg-yellow-100 p-2 text-center">현대카드 무이자 이벤트</p>
      {children}
    </div>
  );
}
