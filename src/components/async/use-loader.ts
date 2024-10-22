import { useEffect, useState } from "react";

export function useLoader(loadingMs: number) {
  const [state, setState] = useState({ status: "LOADING" });

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setState({ status: "SUCCEEDED" });
    }, loadingMs);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [loadingMs]);

  return state;
}
