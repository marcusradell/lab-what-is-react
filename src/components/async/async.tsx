import { useEffect, useState } from "react";

type Props = { children: React.ReactNode };

export function Async({ children }: Props) {
  const [state, setState] = useState({ status: "LOADING" });

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setState({ status: "SUCCEEDED" });
    }, 400);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, []);

  if (state.status === "LOADING") return "Loading...";

  return <>{children}</>;
}
