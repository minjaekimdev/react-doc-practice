import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // 스냅샷으로서의 State/Snapshot2.js 처럼 1씩 증가하는 것이 아니라 정상적으로 3이 증가됨 -> 인수로 업데이트 함수가 주어졌기 때문
  // 업데이터 함수 매개변수의 이름은 해당 State의 첫 글자로 지정하는 것이 일반적.
  // React는 이벤트 핸들러가 실행을 마친 후 state 업데이트를 처리 -> batching
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}