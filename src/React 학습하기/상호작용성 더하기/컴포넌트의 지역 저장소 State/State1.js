import { useState } from 'react';
import sculptureList from './Data';

// export default function Gallery() {
//   let index = 0;

//   function handleClick() {
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];

//   // 버튼을 클릭해도 사진이 바뀌지 않음(렌더링이 일어나지 않음)
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   )
// }

// useState 훅을 이용하여 state값 변경
export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  // 버튼을 클릭해도 사진이 바뀌지 않음(렌더링이 일어나지 않음)
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}