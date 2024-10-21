const val = 50;

export function Button() {
  return (
    <button className="" onClick={() => alert("I'm clicked!")}>
      Click me! {val}
    </button>
  );
}
