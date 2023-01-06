import type { HTMLProps } from "react";

type SecondaryHeadingProps = HTMLProps<HTMLHeadingElement>;

export const SecondaryHeading = ({
  className,
  ...props
}: SecondaryHeadingProps) => {
  return (
    <h1
      className={`text-xl sm:text-2xl font-medium text-black dark:text-white ${className}`}
      {...props}
    />
  );
};
