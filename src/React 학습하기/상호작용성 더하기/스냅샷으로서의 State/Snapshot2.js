import { useState } from 'react';

// 버튼을 클릭하면 3이 될 것이라 예상했지만 결과는 1이 렌더링됨 -> set함수는 state 변경을 '예약'만 하고, 한 렌더링 내에서 state값은 고정.
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}