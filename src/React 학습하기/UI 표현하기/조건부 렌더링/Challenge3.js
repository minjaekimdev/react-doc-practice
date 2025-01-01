// function Drink({ name }) {
//   let part, caffeine, age;
//   if (name === 'tea') {
//     part = 'leaf';
//     caffeine = '15–70 mg/cup';
//     age = '4,000+ years';
//   } else if (name === 'coffee') {
//     part = 'bean';
//     caffeine = '80–185 mg/cup';
//     age = '1,000+ years';
//   }
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{caffeine}</dd>
//         <dt>Age</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }

const drinks = { // 정보를 객체로 생성하여 조건문을 제거 가능능
  tea: {
    part: 'leaf',
    caffeine: '15-70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80-185 mg/cup',
    age: '1,000 years'
  }
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  )
}



export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
