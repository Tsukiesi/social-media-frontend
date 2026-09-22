import { type ComponentProps } from "react";
function InputField({ className, ...rest }: ComponentProps<"input">) {
  return (
    <input
      className={`w-full pb-1 border-b border-black/40 outline-none focus:border-black ${className}`}
      {...rest}
    />
  );
}

export default InputField;
