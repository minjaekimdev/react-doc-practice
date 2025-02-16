import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  
  // alert를 setWalk() 앞에 놓든 뒤에 놓든 상관없다.
  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
