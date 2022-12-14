import { Sun } from "./icons/Sun";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  return (
    <button
      className={`
      bg-slate-100 rounded-md w-10 h-10 grid place-content-center
      hover:bg-slate-200 transition-all active:scale-95
      ${className}`}
    >
      <Sun width="18" />
    </button>
  );
};
