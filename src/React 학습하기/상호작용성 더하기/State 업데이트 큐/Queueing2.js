import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // 6이 증가됨
  // 큐: 0 + 5(n => 5 처럼 동작작), n => n + 1
  // React는 이전 업데이트 함수의 반환 값을 가져와서 다음 업데이터 함수에 n으로 전달함.
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
      }}>Increase the number</button>
    </>
  )
}
