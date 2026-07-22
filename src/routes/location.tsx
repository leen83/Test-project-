import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { hours } from "@/data/menu";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Visit — Luma House Café" },
      {
        name: "description",
        content:
          "Fictional location and contact page for the Luma House Café portfolio concept.",
      },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
          Visit
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-6xl leading-tight md:text-8xl">
          Harbor Quarter,
          <br />
          Abu Dhabi.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
          This address and all contact information are fictional placeholders
          created only for this portfolio demo.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-32">
        <div className="min-h-[520px]">
          <ImagePlaceholder label="Location or café exterior image" />
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-taupe">
              Address
            </p>

            <div className="mt-5 flex gap-4 text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5" />

              <p className="leading-7">
                Luma House Café
                <br />
                Harbor Quarter
                <br />
                Abu Dhabi, UAE
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-taupe">
              Contact
            </p>

            <div className="mt-5 space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                <span>050 000 0000</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <span>hello@lumahouse.example</span>
              </div>

              <div className="flex items-center gap-4">
                <Instagram className="h-5 w-5" />
                <span>@lumahouse.cafe</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-taupe">
              Opening hours
            </p>

            <div className="mt-5 space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between border-b border-border pb-3 text-sm"
                >
                  <span>{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10 md:py-24">
          <div>
            <MapPin className="h-6 w-6 text-taupe" />

            <h2 className="mt-5 font-display text-3xl">Easy to find</h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              A sample location section ready to be replaced with real business
              information.
            </p>
          </div>

          <div>
            <Clock className="h-6 w-6 text-taupe" />

            <h2 className="mt-5 font-display text-3xl">Clear hours</h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Opening times are displayed clearly and consistently throughout
              the website.
            </p>
          </div>

          <div>
            <Instagram className="h-6 w-6 text-taupe" />

            <h2 className="mt-5 font-display text-3xl">Connected</h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Social and contact links can be connected once the final business
              details are ready.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
