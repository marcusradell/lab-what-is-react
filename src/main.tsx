import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import "./clock.ts";

createRoot(document.getElementById("root")!).render(<App />);
