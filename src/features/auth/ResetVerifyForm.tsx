import AuthButton from "@/shared/ui/AuthButton";
import Form from "@/shared/ui/Form";
import InputField from "@/shared/ui/InputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

const ResetVerifySchema = z.object({
  code: z.string().length(6, { error: "Code contains 6 digits" }),
});
type ResetVerifyFormState = z.infer<typeof ResetVerifySchema>;
const onSubmit = () => {
  console.log("Data sent to the server");
};
function ResetVerifyForm() {
  const { register, handleSubmit, formState } = useForm<ResetVerifyFormState>({
    resolver: zodResolver(ResetVerifySchema),
  });
  const { errors } = formState;
  const navigate = useNavigate();
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Link to="/forgot-password" className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <span className="relative top-0 self-center text-[28px]">
        Verification Code
      </span>

      <div className="flex flex-col gap-2">
        <label htmlFor="code" className="text-center text-black/60">
          Please enter the code we sent to the email me****@gmail.com
        </label>
        <InputField
          id="code"
          type="text"
          placeholder="******"
          className="text-center"
          maxLength={6}
          {...register("code")}
        />
      </div>

      <AuthButton
        onClick={() => navigate("/reset-password")}
        className="text-[16px]"
      >
        Continue
      </AuthButton>
      <button
        type="button"
        className="self-center font-[Satoshi-Italic] text-[16px] hover:underline"
      >
        Resend code
      </button>
    </Form>
  );
}

export default ResetVerifyForm;
