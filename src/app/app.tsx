import { Async, Card, JsonView } from "../components";
import { Providers } from "./providers";
import { ThemeToggle } from "./theme";

const data = [{ id: "1", name: "Marcus" }];

export function App() {
  return (
    <Providers>
      <Card>
        <Async loadingMs={1000}>
          <JsonView data={data} />
        </Async>
      </Card>
      <ThemeToggle />
    </Providers>
  );
}
