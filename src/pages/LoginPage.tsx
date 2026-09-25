import LoginForm from "@/features/auth/LoginForm";
import ParticlesBackground from "@/shared/ui/ParticlesBackground";
function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-20 items-center">
        <LoginForm />
        <div className="relative shrink-0 rounded-[20px] w-114.5 h-114.5 overflow-hidden">
          <ParticlesBackground />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
