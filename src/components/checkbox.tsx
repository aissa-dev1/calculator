interface Props {
  checked: boolean;
  onValueChange: () => void;
}

export default function Checkbox(props: Props) {
  return (
    <div
      class="relative flex items-center w-16 h-8 bg-key-bg dark:bg-key-bg-dark rounded-full cursor-pointer "
      onClick={props.onValueChange}
    >
      <div
        class="absolute size-6 rounded-full duration-300"
        classList={{
          "bg-calc-bg dark:bg-calc-bg-dark left-2": !props.checked,
          "bg-accent-color dark:bg-accent-color-dark left-8": props.checked,
        }}
      />
    </div>
  );
}
