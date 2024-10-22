import { Async, Card, JsonView } from "./components";

const data = [{ id: "1", name: "Marcus" }];

export function App() {
  return (
    <Card>
      <Async loadingMs={1000}>
        <JsonView data={data} />
      </Async>
    </Card>
  );
}
