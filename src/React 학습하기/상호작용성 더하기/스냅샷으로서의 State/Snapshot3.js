import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // 이벤트 핸들러의 코드가 비동기적이더라도 state 값은 랜더링 내에서 변경되지 않는다.
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}