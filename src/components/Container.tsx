import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-5xl mx-auto p-4">{children}</div>;
};
