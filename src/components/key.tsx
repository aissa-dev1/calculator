import { ComponentProps } from "solid-js";
import { cn } from "../utils/cn";

interface Props extends ComponentProps<"button"> {
  variant?: keyof typeof Variants;
}

enum Variants {
  default = "bg-key-bg dark:bg-key-bg-dark text-primary-color dark:text-primary-color-dark hover:bg-key-hover-bg dark:hover:bg-key-hover-bg-dark active:bg-key-active-bg dark:active:bg-key-active-bg-dark",
  accent = "bg-accent-color dark:bg-accent-color-dark text-white hover:opacity-80 active:opacity-90",
}

export default function Key({
  class: className,
  variant = "default",
  ...rest
}: Props) {
  return (
    <button
      class={cn("h-12 rounded", Variants[variant], className)}
      {...rest}
    />
  );
}
