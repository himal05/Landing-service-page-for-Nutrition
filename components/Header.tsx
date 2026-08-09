import { Logo } from "./Logo";

export function Header({ language = "en" }: { language?: "en" | "ne" }) {
  return (
    <header className="site-header">
      <Logo language={language} />
    </header>
  );
}
