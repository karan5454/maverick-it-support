import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 sm:text-left">
          © {new Date().getFullYear()} Maverick IT Support. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">

          {/* Telegram */}
          <motion.a
            href="https://t.me/Mavric_IT"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Maverick IT Support Telegram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M21.5 3.5 2.8 10.7c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.5c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.3 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.6-1.4ZM8.1 13.3l10.9-6.9c.5-.3 1-.1.6.2l-8.9 8-.3 3.2-1.5-4.5-2.9-.9c-.6-.2-.6-.6.1-.9Z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/maverickit_support?stkn=d29xMzNjbzEwMWli"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Maverick IT Support Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/20 bg-pink-400/5 text-pink-300 transition-colors hover:border-pink-400/50 hover:bg-pink-400/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
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
          </motion.a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;