import type { HTMLProps } from "react";

type MainHeadingProps = HTMLProps<HTMLHeadingElement>;

export const MainHeading = ({ className, ...props }: MainHeadingProps) => {
  return (
    <h1
      className={`text-3xl sm:text-5xl font-medium
      text-black dark:text-white ${className}`}
      {...props}
    />
  );
};
