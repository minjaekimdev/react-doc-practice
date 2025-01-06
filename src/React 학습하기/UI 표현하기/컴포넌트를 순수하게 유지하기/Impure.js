let guest = 0;

function Cup() {
  // 나쁜 지점: 이미 존재했던 변수를 변경하고 있다!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
} // 컴포넌트가 두 번씩 호출되므로 #2, #4, #6을 출력한다.
