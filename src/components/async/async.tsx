import { useLoader } from "./use-loader";

type Props = { children: React.ReactNode; loadingMs: number };

export function Async({ children, loadingMs }: Props) {
  const state = useLoader(loadingMs);

  if (state.status === "LOADING") return "Loading...";

  return <>{children}</>;
}
