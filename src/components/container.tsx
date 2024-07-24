import { ComponentProps } from "solid-js";
import { cn } from "../utils/cn";

interface Props extends ComponentProps<"div"> {}

export default function Container({ class: className, ...rest }: Props) {
  return (
    <div
      class={cn(
        "relative w-[325px] bg-calc-bg dark:bg-calc-bg-dark text-primary-color dark:text-primary-color-dark p-2 rounded-md shadow-calc-light dark:shadow-calc-dark overflow-hidden",
        className
      )}
      {...rest}
    />
  );
}
