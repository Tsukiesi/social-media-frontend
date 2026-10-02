import AuthButton from "@/shared/ui/AuthButton";
import Form from "@/shared/ui/Form";
import InputField from "@/shared/ui/InputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const EmailVerificationSchema = z.object({
  code: z.string().length(6, { error: "Code contains 6 digits" }),
});
type EmailVerificationFormState = z.infer<typeof EmailVerificationSchema>;
const onSubmit = () => {
  console.log("Data sent to the server");
};
function EmailVerificationForm() {
  const { register, handleSubmit, formState } =
    useForm<EmailVerificationFormState>({
      resolver: zodResolver(EmailVerificationSchema),
    });
  const { errors } = formState;
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
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

      <AuthButton className="text-[16px]">Continue</AuthButton>
      <Link
        to="/register"
        className="self-center font-[Satoshi-Italic] text-[16px] hover:underline"
      >
        Back to Register
      </Link>
    </Form>
  );
}

export default EmailVerificationForm;
