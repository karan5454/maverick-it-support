import { motion } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
  document.title =
    "Contact | Maverick IT Support | Interview Support";

  const description =
    "Contact Maverick IT Support for interview preparation, career support, technical interview guidance and IT & Non-IT support.";

  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", description);
}, []);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Contact Hero */}
      <section className="relative z-10 px-6 pb-16 pt-36">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
          >
            <MessageCircle size={15} />
            Quick Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl"
          >
            Let's Stay
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Connected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >
            Have a question or want to know more about our services?
            Connect with Maverick IT Support through any of the channels
            below.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

          {/* Telegram */}
          <motion.a
            href="https://t.me/Mavric_IT"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110">
              <Send size={32} />
            </div>

            <h2 className="text-xl font-bold">
              Telegram
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Join our Telegram channel
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              @Mavric_IT
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/maverickit_support?stkn=d29xMzNjbzEwMWli"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-400/[0.05]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-400/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

            {/* Instagram Logo */}
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-pink-400/30 bg-pink-400/10 shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold">
              Instagram
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Follow us on Instagram
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-pink-300">
              @maverickit_support
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </motion.a>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/[0.05]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.15)] transition-transform duration-300 group-hover:scale-110">
              <MessageCircle size={32} />
            </div>

            <h2 className="text-xl font-bold">
              Quick Contact
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Telegram Username: @Mavericksupport1
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-emerald-300">
              <Mail size={16} />
              @Mavericksupport1
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-emerald-400/10 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            We're Here to Help.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Choose your preferred platform and connect with Maverick IT
            Support.
          </p>

          <motion.a
            href="https://t.me/Mavric_IT"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            <Send size={18} />
            Join Telegram
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;