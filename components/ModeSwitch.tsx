"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

function ModeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(theme);

  return (
    <div className="cursor-pointer">
      <button>
        <MdLightMode onClick={() => setTheme("light")} />
      </button>
      <button>
        <MdDarkMode onClick={() => setTheme("dark")} />
      </button>
    </div>
  );
}

export default ModeSwitch;
