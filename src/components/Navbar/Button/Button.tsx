import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ onClick, className, ...props }: ButtonProps) {
  return <button className={className} onClick={onClick} {...props} />;
}
