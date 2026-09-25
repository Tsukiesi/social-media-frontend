import RegisterForm from "@/features/auth/RegisterForm";
import ParticlesBackground from "@/shared/ui/ParticlesBackground";
function RegisterPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-20 items-center">
        <div className="relative shrink-0 rounded-[20px] w-114.5 h-114.5 overflow-hidden">
          <ParticlesBackground />
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
export default RegisterPage;
