"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function HomeNavbar() {
  const navItems = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  type NavbarVariant = "primary" | "secondary";

  return (
    <header className="relative w-full" role="banner">
      <nav aria-label="Main navigation">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton
                href="https://github.com/shaurya-afk"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                Github
              </NavbarButton>
              <NavbarButton
                href="/resume.pdf"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
              >
                Resume
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              />
            </MobileNavHeader>

            <div id="mobile-menu">
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                aria-label="Mobile navigation menu"
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  {[
                    {
                      label: "Github",
                      href: "https://github.com/shaurya-afk",
                      variant: "secondary",
                    },
                    {
                      label: "Resume",
                      href: "/resume.pdf",
                      variant: "primary",
                    },
                  ].map(({ label, href, variant }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label={`${label === "Github" ? "Visit" : "Download"} ${label}`}
                    >
                      <NavbarButton variant={variant as NavbarVariant} className="w-full">
                        {label}
                      </NavbarButton>
                    </a>
                  ))}
                </div>
              </MobileNavMenu>
            </div>
          </MobileNav>
        </Navbar>
      </nav>
    </header>
  );
}