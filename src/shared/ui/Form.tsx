import { type ComponentProps } from "react";
function Form({ children, ...rest }: ComponentProps<"form">) {
  return (
    <form className="flex justify-center flex-col gap-6 w-110" {...rest}>
      {children}
    </form>
  );
}

export default Form;
