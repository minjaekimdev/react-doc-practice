import { getImageUrl } from './utils.js';

function Profile({ name, img, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(img.code)}
        alt={name}
        width={img.size}
        height={img.size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        img={{
          code: 'szV5sdG',
          size: 70
        }}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        img={{
          code: 'YfeOqp2',
          size: 70
        }}
        profession="geochemist"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        discovered="a method for measuring carbon dioxide in seawater"
      />

    </div>
  );
}
