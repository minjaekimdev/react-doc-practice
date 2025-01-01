export default function Test() {
  let node = <p>This is node.</p>;
  node += <hr/>
  return (
    <>
      {node}
    </>
  );
}