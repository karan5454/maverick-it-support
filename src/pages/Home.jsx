import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Live Interview Interview Support With Our Team",
    description:
      "Get real-time technical interview Dedicated team Help  Start to End interview completion. Support for  Entire Screen Teams / Zoom / Google Meet  live interview.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Self-Service Interview Preparation",
    description:
      "Undetectable no 1  AI Tool. Support for  Entire Screen Teams / Zoom / Google Meet  live interview. Suitable for daily or monthly usage plans",
    icon: "📚",
  },
  {
    number: "03",
    title: "Live Exam & Assessment Help",
    description:
      "Any IT Aptitude Exam. Help for technical assessments, coding tests and online evaluations with focused Live support. Anytime, From Anywhere — Join your Exam Help session from any    location, at your convenience.",
    icon: "📝",
  },
];

const platforms = [
  {
    name: "Slack",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="#E01E5A"
          d="M6.2 15.1a2.5 2.5 0 1 1-2.5-2.5h2.5v2.5Z"
        />
        <path
          fill="#36C5F0"
          d="M8.9 15.1a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5Z"
        />
        <path
          fill="#2EB67D"
          d="M8.9 6.2a2.5 2.5 0 1 1 2.5-2.5v2.5H8.9Z"
        />
        <path
          fill="#ECB22E"
          d="M8.9 8.9a2.5 2.5 0 1 1 0 5H6.4a2.5 2.5 0 1 1 0-5h2.5Z"
        />
        <path
          fill="#2EB67D"
          d="M15.1 8.9a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z"
        />
        <path
          fill="#36C5F0"
          d="M15.1 11.6a2.5 2.5 0 1 1 0 5h-2.5a2.5 2.5 0 1 1 0-5h2.5Z"
        />
        <path
          fill="#E01E5A"
          d="M17.8 15.1a2.5 2.5 0 1 1 2.5 2.5 2.5 2.5 0 0 1-2.5-2.5v-2.5h2.5a2.5 2.5 0 1 1-2.5 2.5Z"
        />
        <path
          fill="#ECB22E"
          d="M15.1 17.8a2.5 2.5 0 1 1-2.5 2.5v-2.5h2.5Z"
        />
      </svg>
    ),
  },

  {
    name: "Microsoft Teams",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <circle cx="17.5" cy="6.5" r="2.5" fill="#7F66D8" />
        <path
          fill="#5059C9"
          d="M14.5 9h4.2c.7 0 1.3.6 1.3 1.3v6.4c0 .7-.6 1.3-1.3 1.3h-4.2V9Z"
        />
        <path
          fill="#7F66D8"
          d="M4 8h9.5A1.5 1.5 0 0 1 15 9.5v7A1.5 1.5 0 0 1 13.5 18H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 8Z"
        />
        <path
          fill="#fff"
          d="M5.5 10.2h6.5v1.7H9.8v4.8H7.7v-4.8H5.5v-1.7Z"
        />
      </svg>
    ),
  },

  {
    name: "Zoom",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="#2D8CFF"
          d="M4.5 6.5h9A3.5 3.5 0 0 1 17 10v1.2l4-3v7.6l-4-3V14a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 1 14V10a3.5 3.5 0 0 1 3.5-3.5Z"
        />
      </svg>
    ),
  },

  {
    name: "Google Meet",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="#00AC47"
          d="M3 7.5A2.5 2.5 0 0 1 5.5 5H13a2.5 2.5 0 0 1 2.5 2.5V10l5-3v10l-5-3v2.5A2.5 2.5 0 0 1 13 19H5.5A2.5 2.5 0 0 1 3 16.5v-9Z"
        />
        <path fill="#00832D" d="M15.5 10 21 7v10l-5.5-3.2V10Z" />
        <path fill="#FFBA00" d="M3 12h12.5v4.5A2.5 2.5 0 0 1 13 19H5.5A2.5 2.5 0 0 1 3 16.5V12Z" />
        <path fill="#2684FC" d="M3 7.5A2.5 2.5 0 0 1 5.5 5H13a2.5 2.5 0 0 1 2.5 2.5V12H3V7.5Z" />
      </svg>
    ),
  },
];

function Home() {
  useEffect(() => {
  document.title =
    "Maverick IT Support | Interview Preparation & Career Support";

  const description =
    "Maverick IT Support provides live interview preparation, self-service interview resources, and exam & assessment preparation for IT and Non-IT roles.";

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

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 top-20 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[110px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= HERO ================= */}

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-32">
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
          >
            <Sparkles size={15} />

            <span>Smart IT Support for Modern Businesses</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-white">
              Technology
            </span>

            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              That Moves You Forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >
            Reliable IT support, technical expertise and smart solutions
            designed to keep your systems secure, connected and running
            smoothly.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >

            {/* React Router Link */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-shadow hover:shadow-[0_0_50px_rgba(34,211,238,0.45)]"
              >
                Explore Services

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* React Router Link */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className="pointer-events-none relative mx-auto mt-16 h-24 max-w-xl">

            <motion.div
              className="absolute left-[15%] top-5 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
              animate={{
                y: [-10, 15, -10],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute right-[18%] top-2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)]"
              animate={{
                y: [15, -10, 15],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-300/50"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </main>

      {/* ================= SERVICES SECTION ================= */}

      <section className="relative z-10 border-t border-white/5 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={16} />

              What We Do
            </div>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Prepare Better.
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
               Perform Better.
              </span>
           </h2>

            <p className="mt-5 text-gray-400">
              Choose the right preparation and support service for your
              interview, technical assessment or career journey.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                {/* Card Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative mb-7 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    {service.number}
                  </span>

                  <span className="text-3xl">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  <CheckCircle2 size={16} />

                  <span>Professional Support</span>
                </div>

                {/* Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12 + 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              View All Services

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Platform Strip */}
<section className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.02] py-8">
  <div className="mb-5 text-center">
    
      <h5 className="text-4xl font-bold sm:text-5xl">
              Work Across
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
               Major Platforms
              </span>
           </h5>
     
  </div>

  <div className="relative overflow-hidden">
    <motion.div
      className="flex w-max items-center gap-12"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...platforms, ...platforms, ...platforms].map(
        (platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex min-w-[180px] items-center justify-center gap-3 text-gray-400"
          >
            <div className="h-12 w-12 text-gray-400 opacity-80">
                {platform.icon}
</div>

            <span className="whitespace-nowrap text-base font-medium">
              {platform.name}
            </span>
          </div>
        )
      )}
    </motion.div>
  </div>
</section>

      {/* ================= CTA ================= */}

      <section className="relative z-10 px-6 pb-28 pt-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-emerald-400/10 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need IT Support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Let's discuss how Maverick IT Support can help you with
            technology, technical support and career needs.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Get In Touch

              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
}

export default Home;