// Clock 컴포넌트의 props로 new Date()를 하여 Date 객체 전달해주기

export default function Clock({ time }) {
  let hours = time.getHours(); 
  let className; // 컴포넌트 밖에 있던 className 변수를 컴포넌트 안에서 선언하여 순수성을 지킴킴
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}