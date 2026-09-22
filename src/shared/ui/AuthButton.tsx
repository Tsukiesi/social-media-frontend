import { type ComponentProps } from "react";
function AuthButton({
  className,
  children,
  ...rest
}: ComponentProps<"button">) {
  return (
    <button
      className={`relative w-100 self-center bg-white rounded-[10px] pt-3 pb-3 border border-black/40 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default AuthButton;
