import { useTheme } from "./use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme}</button>;
}
