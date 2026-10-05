import { motion } from "motion/react";
import logo from "../assets/maverick-logo.jpg";

function LogoIntro({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 1800);
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Rotating Ring */}
      <motion.div
        className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/30"
        initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{
          scale: { duration: 1.2 },
          opacity: { duration: 1 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Second Ring */}
      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full border border-emerald-400/20"
        initial={{ scale: 0.5, rotate: 360, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          scale: { duration: 1.4 },
          opacity: { duration: 1 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Maverick IT Support"
        className="relative z-10 w-[280px] rounded-full object-cover"
        initial={{
          scale: 0.3,
          opacity: 0,
          filter: "blur(15px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Bottom Loading Text */}
      <motion.div
        className="absolute bottom-16 text-sm tracking-[0.35em] text-cyan-300"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        MAVERICK IT SUPPORT
      </motion.div>
    </motion.div>
  );
}

export default LogoIntro;