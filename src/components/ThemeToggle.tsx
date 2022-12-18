import { useEffect, useState } from "react";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  const handleClick = () => {
    const [val, method] = isDarkTheme
      ? (["false", "remove"] as const)
      : (["true", "add"] as const);

    setIsDarkTheme((prev) => !prev);
    localStorage.setItem("isDarkTheme", val);
    document.documentElement.classList[method]("dark");
  };

  useEffect(() => {
    const localVal = localStorage.getItem("isDarkTheme");
    if (localVal) {
      setIsDarkTheme(JSON.parse(localVal));
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  if (isDarkTheme === null) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="
      bg-slate-100 rounded-md w-10 h-10 grid place-content-center
      hover:bg-slate-200 transition-all active:scale-95 mr-auto sm:mr-4 flex-shrink-0
      dark:bg-slate-800 dark:hover:text-slate-300 dark:hover:bg-slate-700
      "
    >
      {isDarkTheme ? <Sun width="18" /> : <Moon width="18" />}
    </button>
  );
};
