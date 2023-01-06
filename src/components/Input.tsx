import type { HTMLProps } from "react";

type InputProps = HTMLProps<HTMLInputElement>;

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full mb-8 py-2 px-3 rounded-md text-black border border-slate-200
      focus:border-transparent transition-all bg-transparent
      outline-0 focus:outline-2 outline outline-blue-500 hover:border-slate-400
      dark:border-slate-600 dark:focus:border-transparent dark:text-white
      dark:placeholder:text-slate-400 ${className}
      `}
      {...props}
    />
  );
};
