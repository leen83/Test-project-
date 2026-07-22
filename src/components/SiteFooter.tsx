import { Instagram, Mail, MapPin, Phone } from "lucide-react";

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.4 3.5v10.1a4.9 4.9 0 1 1-4.2-4.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.4 3.5c.55 2.5 2.15 4.05 4.6 4.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 py-20 md:grid-cols-3 md:gap-12 md:px-10">
        {/* BRAND */}
        <div className="flex h-full flex-col">
          <h2 className="font-display text-4xl tracking-[0.08em]">
            LUMA
          </h2>

          <p className="mt-5 text-[11px] uppercase tracking-[0.4em] text-taupe">
            House Café
          </p>

          <p className="mt-9 max-w-xs text-base leading-8 text-muted-foreground">
            A fictional café concept created as a personal web-design
            portfolio project.
          </p>
        </div>

        {/* LOCATION */}
        <div className="flex h-full flex-col">
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Concept location
          </p>

          <div className="mt-9 space-y-7 text-muted-foreground">
            <div className="flex items-start gap-4">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-taupe"
                strokeWidth={1.5}
              />

              <div className="leading-7">
                <p>Harbor Quarter</p>
                <p>Abu Dhabi, UAE</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone
                className="h-5 w-5 shrink-0 text-taupe"
                strokeWidth={1.5}
              />

              <p>050 000 0000</p>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex h-full min-w-0 flex-col">
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Follow
          </p>

          <div className="mt-9 space-y-7 text-muted-foreground">
            <p className="text-lg text-foreground">
              @lumahouse.cafe
            </p>

            <div className="flex min-w-0 items-start gap-4">
              <Mail
                className="mt-1 h-5 w-5 shrink-0 text-taupe"
                strokeWidth={1.5}
              />

              <span className="min-w-0 break-all text-sm leading-7 md:text-base">
                hello@lumahouse.example
              </span>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <span
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-taupe"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </span>

              <span
                aria-label="TikTok"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-taupe"
              >
                <TikTokIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © 2026 Luma House Café — Fictional portfolio concept.
          </p>

          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Not a real business
          </p>
        </div>
      </div>
    </footer>
  );
}
