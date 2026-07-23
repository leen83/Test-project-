import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Visit", to: "/location" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-foreground/10 bg-background shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="font-display text-2xl tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          Luma House
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[11px] uppercase tracking-[0.28em] text-foreground/65 transition hover:text-foreground"
              activeProps={{
                className:
                  "text-[11px] uppercase tracking-[0.28em] text-foreground",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-foreground/10 bg-background px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
