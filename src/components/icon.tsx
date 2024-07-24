import { ComponentProps } from "solid-js";
import { cn } from "../utils/cn";

interface Props extends ComponentProps<"button"> {}

export default function Icon({ class: className, ...rest }: Props) {
  return (
    <button
      class={cn(
        "flex items-center justify-center size-8 hover:bg-key-bg dark:hover:bg-key-bg-dark rounded-md",
        className
      )}
      {...rest}
    />
  );
}
