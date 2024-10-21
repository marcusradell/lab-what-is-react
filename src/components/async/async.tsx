import { useEffect, useState } from "react";

type Props = { children: React.ReactNode; loadingMs: number };

export function Async({ children, loadingMs }: Props) {
  const [state, setState] = useState({ status: "LOADING" });

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setState({ status: "SUCCEEDED" });
    }, loadingMs);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [loadingMs]);

  if (state.status === "LOADING") return "Loading...";

  return <>{children}</>;
}
