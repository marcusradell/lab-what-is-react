import { Async } from "./components";

type DataProps = {
  data: { id: string; name: string }[];
};

function Data({ data }: DataProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export function App() {
  return (
    <Async loadingMs={2000}>
      <Data data={[{ id: "1", name: "Marcus" }]} />
    </Async>
  );
}
