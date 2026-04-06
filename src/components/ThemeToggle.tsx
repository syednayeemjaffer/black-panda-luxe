import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-primary/20 hover:border-primary/50"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
