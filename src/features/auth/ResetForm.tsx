import AuthButton from "@/shared/ui/AuthButton";
import Form from "@/shared/ui/Form";
import InputField from "@/shared/ui/InputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

const ResetSchema = z.object({
  email: z.email({ error: "Wrong email format" }),
});
type ResetFormState = z.infer<typeof ResetSchema>;
const onSubmit = () => {
  console.log("Data sent to the server");
};

function ResetForm() {
  const { register, handleSubmit, formState } = useForm<ResetFormState>({
    resolver: zodResolver(ResetSchema),
  });
  const { errors } = formState;
  const navigate = useNavigate();
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <span className="relative top-0 self-center text-[28px]">
        Reset Password
      </span>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-center text-black/60">
            Please enter your email address
          </span>
          <span className="text-center text-black/60">
            We will email you a link to reset your password
          </span>
        </div>

        <label htmlFor="email">Email</label>
        <InputField
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>

      <AuthButton
        onClick={() => navigate("/forgot-password-verify")}
        className="text-[16px]"
      >
        Send email
      </AuthButton>
      <Link
        to="/"
        className="self-center font-[Satoshi-Italic] text-[16px] hover:underline"
      >
        Back to Login
      </Link>
    </Form>
  );
}

export default ResetForm;
