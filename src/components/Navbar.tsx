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
    <div className="relative w-full">
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
            >
              Github
            </NavbarButton>
            <NavbarButton
              href="/resume.pdf"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </NavbarButton>
          </div>        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
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
                >

                  <NavbarButton variant={variant as NavbarVariant} className="w-full">
                    {label}
                  </NavbarButton>
                </a>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}