import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-3 md:px-10">
        <div>
          <h2 className="font-display text-3xl tracking-[0.08em]">
            LUMA
          </h2>

          <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-taupe">
            House Café
          </p>

          <p className="mt-8 max-w-xs text-base leading-[1.8] text-muted-foreground">
            A fictional café concept created as a personal web-design
            portfolio project.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Concept location
          </p>

          <div className="mt-8 space-y-5 text-muted-foreground">
            <div className="flex items-start gap-4">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-taupe"
                strokeWidth={1.5}
              />

              <div className="leading-[1.7]">
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

        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Follow
          </p>

          <p className="mt-8 text-lg">@lumahouse.cafe</p>

          <div className="mt-5 flex items-center gap-4 text-muted-foreground">
            <Mail
              className="h-5 w-5 shrink-0 text-taupe"
              strokeWidth={1.5}
            />

            <span>hello@lumahouse.example</span>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-taupe">
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Luma House Café — Fictional portfolio concept.</p>

          <p className="text-[12px] uppercase tracking-[0.4em] text-taupe">
            Not a real business
          </p>
        </div>
      </div>
    </footer>
  );
}
