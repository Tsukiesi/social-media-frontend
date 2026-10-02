import type { ComponentProps } from "react";

function FieldError({
  className,
  errors,
}: ComponentProps<"div"> & {
  errors: Array<{ message?: string } | undefined>;
}) {
  const content = () => {
    if (!errors?.length) return null;
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];
    if (uniqueErrors?.length === 1) return uniqueErrors[0]?.message;
    return (
      <ul className="flex gap-1 list-disc">
        {uniqueErrors.map((error, index) => (
          <li key={index}>{error?.message}</li>
        ))}
      </ul>
    );
  };
  return <div className={` ${className}`}></div>;
}

export default FieldError;
