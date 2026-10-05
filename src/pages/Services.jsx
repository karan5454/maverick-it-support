import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Live Interview Support With Our Team",
    shortTitle: "Live Interview Support",
    description: (
  <>
    <span className="font-semibold text-cyan-300">
      IT Roles Covered (Fresher & Experienced)
    </span>
    <br />
    React / Angular | Backend (Java / Python / .NET / Node.js) |
    Full Stack | DevOps | Cloud (AWS / Azure / GCP) | Testing |
    Data Science | Salesforce | SAP | IT Support

    <br />
    <br />

    <span className="font-semibold text-emerald-300">
      🏢 Back Office / Non-IT Roles Covered
    </span>
    <br />
    IT Back Office | Data Entry | Customer Support | Operations |
    BPO / KPO | HR | Finance | Banking | Admin | Documentation |
    Business Analyst
  </>
),
    features: [
      "Dedicated team Help  Start to End interview completion",
      "Our Person Work & show Ans Interviewer Ask Follow-up Question.",
      "Human thinking  Natural Ans. And Code's .",
      "Start To end All Question  Ans  Provide With  Delay :  1Sec Speed",
      "Support for  Entire Screen Teams / Zoom / Google Meet  live interview.",
      "Anytime, From Anywhere — Join your interview Help session from any location, at your convenience.",
      "You need Speak  Only Ans.",
      "Inform Before your Live Interview slot and get dedicated All Interview Help from our team Member.",
    ],
  },
  {
    number: "02",
    title: "Self-Service Interview",
    shortTitle: "Self-Service Preparation",
    description: (
  <>
    <span className="font-semibold text-cyan-300">
      Undetectable No. 1  AI Tool
    </span>
    <br />
     Compare Parakeet Ai Tool It's High Costly
This service Provide Self Start To end  Analysis help in live interview

    <br />
    <br />

    <span className="font-semibold text-emerald-300">
      Compaire To Parakeet Ai Tool
    </span>
    <br />
    The top Undetectable AI alternatives in 2026 are Interview Sidekick for comprehensive AI coaching with a 10,000+ question bank, Final Round AI for technical interviews, Google Interview Warmup for free practice, Yoodli AI for speech analysis, aiApply for industry-specific preparation, and Interviews by AI for mock interview simulation
  </>
),
    features: [
      "You need Speak  Only Ans. Parakeet Ai Tool Features ",
      "Start anytime —no slot booking required",
      "With All Ans  + Code Response delay: 1.5 sec only",
      "Support for  Entire Screen Teams / Zoom / Google Meet  live interview.",
      "Note: This is a self-service application. No dedicated team member is assigned to you.",
      "Human thinking  Natural Ans. And Code's .",
      "Suitable for daily or monthly usage plans",
      "Available at a lower price than our dedicated team-support service.",
      " Think of it like a daily/monthly Interview plan — choose the duration that suits you."
  
    ],
  },
  {
    number: "03",
    title: "Live Exam & Assessment Help",
    shortTitle: "Exam Preparation",
    description:
      "With Remote Access anytime, From Anywhere — Join your Exam Help session from any    location, at your convenience.",
    features: [
      "Any IT Aptitude Exam",
      "Communication Tests",
      " Hon Aptitude Tests / Exam's",
      "Logical Reasoning Exam",
      "Coding Assessments ",
      "Technical Assessments / Interview Assessments",
      "Anytime, From Anywhere — Join your Exam Help session from any    location, at your convenience.",
    ],
  },
];

const whyChooseUs = [
  "Development & Interview Experience 5+ Years",
  "IT & Non-IT Career Support",
  "Multiple Role Categories",
  "Flexible Service Options",
  "35+ Candidates Get Offers",
];

function Services() {
  useEffect(() => {
  document.title =
    "Services | Maverick IT Support | Interview Preparation";

  const description =
    "Explore Maverick IT Support services including live interview preparation, self-service interview preparation, and exam & assessment preparation.";

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

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
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
          className="absolute -right-40 top-[45%] h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-40 bottom-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
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

      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
          >
            <Sparkles size={15} />
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl"
          >
            Support That Helps
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              You Move Forward.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >
            Focused interview and assessment preparation services designed
            for IT professionals at every stage of their journey.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-6xl space-y-8">

          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-10"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">

                {/* Left */}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.25em] text-cyan-400">
                      SERVICE {service.number}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 180,
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                    >
                      <span className="text-lg font-bold">
                        {service.number}
                      </span>
                    </motion.div>
                  </div>

                  <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-7 inline-flex"
                  >
                    <Link
                      to="/contact"
                      className="group/link inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black"
                    >
                      Get Started

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </motion.div>
                </div>

                {/* Right */}
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                    What's Included
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.1 + featureIndex * 0.06,
                        }}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />

                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              />
            </motion.article>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us */}
<section className="relative z-10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Why Choose Us?
      </p>

      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
        Why
        <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          {" "}Maverick IT Support?
        </span>
      </h2>
    </motion.div>

    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {whyChooseUs.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
          }}
          whileHover={{ y: -6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md transition-colors hover:border-cyan-400/30"
        >
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </div>

          <p className="text-sm leading-6 text-gray-300">
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-emerald-400/10 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Prepare?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Choose the right support for your interview, technical
            preparation or assessment journey.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-transform hover:scale-105"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;