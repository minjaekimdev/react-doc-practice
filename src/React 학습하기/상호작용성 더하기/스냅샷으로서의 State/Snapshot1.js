import { useState } from 'react';

// Send 버튼 클릭 -> form 태그의 onSubmit 이벤트 핸들러 실행 -> state 업데이트 -> 컴포넌트(함수) 재호출 -> React가 스냅샷 제공 -> 변경 사항 JSX에 반환
export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');

  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      // sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  )
}