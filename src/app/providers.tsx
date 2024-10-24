import { ReactNode } from "react";
import { ThemeProvider } from "./theme";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
