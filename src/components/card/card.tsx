import { ReactNode } from "react";
import "./style.css";

type Props = { children: ReactNode };

export function Card({ children }: Props) {
  return <div className="card">{children}</div>;
}
