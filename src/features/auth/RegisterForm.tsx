import AuthButton from "@/shared/ui/AuthButton";
import Form from "@/shared/ui/Form";
import InputField from "@/shared/ui/InputField";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const LoginSchema = z
  .object({
    username: z
      .string()
      .min(3)
      .max(30)
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Wrong username format, it can contain only letters, numbers and underscore",
      ),
    email: z.email({ error: "Wrong email format" }),
    password: z
      .string()
      .min(8, { error: "Password must contain at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormState = z.infer<typeof LoginSchema>;
const onSubmit = () => {
  console.log("Data sent to the server");
};
function RegisterForm() {
  const [passwordRevealed, setPasswordRevealed] = useState<boolean>(false);
  const [confirmPasswordRevealed, setConfirmPasswordRevealed] =
    useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm<RegisterFormState>({
    resolver: zodResolver(LoginSchema),
  });
  const { errors } = formState;
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <span className="relative top-0 self-center">Register</span>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <InputField
          id="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <div className="relative w-full">
          <InputField
            id="password"
            type={passwordRevealed ? "text" : "password"}
            placeholder="********"
            className="pr-10"
            {...register("password")}
          />
          <button
            type="button"
            className="absolute right-0 z-1 cursor-pointer"
            onClick={() => {
              setPasswordRevealed(!passwordRevealed);
            }}
          >
            {passwordRevealed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password">Confirm password</label>
        <div className="relative w-full">
          <InputField
            id="confirm-password"
            type={confirmPasswordRevealed ? "text" : "password"}
            placeholder="********"
            className="pr-10"
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className="absolute right-0 z-1 cursor-pointer"
            onClick={() => {
              setConfirmPasswordRevealed(!confirmPasswordRevealed);
            }}
          >
            {confirmPasswordRevealed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AuthButton className="text-[16px]">Login</AuthButton>
      <Link
        to="/"
        className="self-center font-[Satoshi-Italic] text-[16px] hover:underline"
      >
        Back to login
      </Link>
    </Form>
  );
}

export default RegisterForm;
