const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() { // p 요소 사이사이에 가로줄 추가하기
  const poemRes = [];
  poem.lines.forEach((line, index) => {
    poemRes.push(<p key={index}>{line}</p>);
    if (index !== poem.lines.length - 1) {
      poemRes.push(<hr key={index + 'horizontal'} />);
    }
  })
  return (
    <article>
      {poemRes}
    </article>
  );
}

// or

// import React, { Fragment } from 'react';

// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, i) =>
//         <Fragment key={i}>
//           {i > 0 && <hr />}
//           <p>{line}</p>
//         </Fragment>
//       )}
//     </article>
//   );
// }
