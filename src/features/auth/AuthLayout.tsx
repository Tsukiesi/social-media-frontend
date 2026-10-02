import ParticlesBackground from "@/shared/ui/ParticlesBackground";
import { useOutlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SHIFT = 538;
const leftOrderedPages = ["/", "/forgot-password-verify", "/verify-email"];

function AuthLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const isFormLeftOrdered = leftOrderedPages.includes(location.pathname);
  return (
    <div className="w-full min-h-screen fixed inset-0 flex items-center justify-center overflow-hidden">
      <div className="flex gap-20 items-center">
        <div
          className="shrink-0 w-114.5 transition-transform duration-400 ease-in"
          style={{
            transform: `translateX(${isFormLeftOrdered ? 0 : SHIFT}px)`,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              <div className="relative z-0 isolate">{outlet}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="relative z-10 isolate hidden lg:block shrink-0 rounded-[20px] w-114.5 h-114.5 overflow-hidden transition-transform duration-400 ease-in"
          style={{
            transform: `translateX(${isFormLeftOrdered ? 0 : -SHIFT}px)`,
          }}
        >
          <ParticlesBackground />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
