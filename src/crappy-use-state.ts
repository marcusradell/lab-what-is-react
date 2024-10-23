// eslint-disable-next-line @typescript-eslint/no-explicit-any
const states: any = [];
let calls = -1;

export function useState<T>(defaultValue: T) {
  const callId = ++calls;

  if (states[callId]) {
    return states[callId];
  }

  const setValue = (newValue: T) => {
    states[callId][0] = newValue;
    render();
  };
  const tuple = [defaultValue, setValue];
  states[callId] = tuple;
  return tuple;
}

function render() {
  calls = -1;
  console.log("React would render the new");
}
