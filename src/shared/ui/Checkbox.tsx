import { type ComponentProps } from "react";
function Checkbox({ className, ...rest }: ComponentProps<"input">) {
  return (
    <input
      className={`appearance-none w-5 h-5 rounded-[3px] border border-black/60 cursor-pointer checked:bg-[url("/checkmark.svg")] checked:bg-center checked:bg-no-repeat  ${className}`}
      type="checkbox"
      {...rest}
    />
  );
}

export default Checkbox;
