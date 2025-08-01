"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiTwitter,
  FiArrowUp,
  FiHeart
} from "react-icons/fi";

import Image from "next/image";

interface FooterProps {
  className?: string;
}

interface FooterSectionProps {
  title: string;
  links: {
    name: string;
    href: string;
    external?: boolean;
  }[];
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-all duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 transition-all duration-200 shadow-lg"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
    >
      <FiArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/shaurya-afk",
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/shaurya-afk",
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/shauryadotafk",
      icon: <FiTwitter className="w-5 h-5" />,
      label: "Twitter"
    },
    {
      href: "mailto:shauryasha090@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
      label: "Email"
    }
  ];

  return (
    <footer className={cn(
      "relative mt-20 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Image
                    src="/nice_pic.jpg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                />

                </div>
                <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Shaurya
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-md mb-6">
                Full-stack developer passionate about creating beautiful, functional, 
                and user-centered digital experiences. Let&apos;s build something amazing together.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, idx) => (
                  <SocialLink
                    key={idx}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links" links={quickLinks} />

          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
              <span>© {currentYear} Shaurya. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FiHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and lots of coffee.</span>
            </div>
            
            <ScrollToTop />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-full blur-3xl opacity-30" />
      </div>
    </footer>
  );
};

export default Footer;