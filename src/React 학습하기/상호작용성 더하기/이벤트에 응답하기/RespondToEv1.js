export default function Button() {
  function handleClick() { // 주로 컴포넌트 내부에서 정의(handle로 시작)
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}