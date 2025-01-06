export default function StoryTray({ stories }) {
  stories.push({ // push는 원본 배열을 바꾸므로 순수성을 지키지 않는다.
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
