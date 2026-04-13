import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-360 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 ${className}`}
    >
      {children}
    </Tag>
  );
}