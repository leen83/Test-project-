import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { hours } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luma House Café — Fictional Café Website Concept" },
      {
        name: "description",
        content:
          "A fictional café website concept showcasing responsive design, menu presentation and a polished small-business web experience.",
      },
      { property: "og:title", content: "Luma House Café" },
      {
        property: "og:description",
        content: "Fictional café website concept created for a design portfolio.",
      },
    ],
  }),
  component: HomePage,
});

const featured = [
  {
    title: "Avocado Sourdough",
    text: "Whipped feta, lemon, herbs and chili.",
    image: "/images/Avocado.PNG",
  },
  {
    title: "Iced Vanilla Latte",
    text: "Smooth espresso, vanilla and cold milk.",
    image: "/images/Coffee.PNG",
  },
  {
    title: "Burnt Cheesecake",
    text: "Creamy centre with a caramelised top.",
    image: "/images/Cheesecake%20.PNG",
  },
];

function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden pt-20">
        <img
          src="/images/Luma.PNG"
          alt="Luma House café exterior"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/5" />

        <div className="relative mx-auto flex min-h-[calc(90vh-5rem)] max-w-7xl items-center px-6 py-16 md:px-10">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-5xl leading-[1] sm:text-6xl md:text-7xl lg:text-8xl">
              A softer place
              <br />
              for coffee and time.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/80 md:text-lg">
              Luma House is a fictional neighbourhood café created to
              demonstrate a refined, responsive website for a modern small
              business.
            </p>

            <Link
              to="/menu"
              className="mt-9 inline-flex items-center gap-3 border-b border-white/80 pb-2 text-xs uppercase tracking-[0.3em]"
            >
              Explore the menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div className="min-h-[520px] overflow-hidden">
          <img
            src="/images/Seating2.PNG"
            alt="Warm café seating area"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              Our idea
            </p>

            <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">
              Simple food, thoughtful coffee, unhurried moments.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted-foreground">
              The concept combines a warm visual identity with clear
              navigation, a structured menu and practical information that
              helps visitors understand the business quickly.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
            >
              Read the concept
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="bg-secondary/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              A taste of Luma
            </p>

            <h2 className="mt-5 font-display text-5xl md:text-6xl">
              Featured favourites
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {featured.map((item) => (
              <article key={item.title} className="text-center">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-6 font-display text-3xl">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Gallery
          </p>

          <h2 className="mt-5 font-display text-5xl md:text-6xl">
            Inside Luma
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            "/images/Seating3.PNG",
            "/images/Seating2.PNG",
            "/images/Pastries.PNG",
            "/images/Eat.PNG",
          ].map((image, index) => (
            <div key={image} className="aspect-[4/3] overflow-hidden">
              <img
                src={image}
                alt={`Luma House gallery image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HOURS */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-background/60">
              Visit the concept
            </p>

            <h2 className="mt-5 font-display text-5xl">
              Harbor Quarter,
              <br />
              Abu Dhabi
            </h2>

            <div className="mt-8 flex items-start gap-3 text-background/70">
              <MapPin className="mt-1 h-5 w-5" />

              <p>Fictional address used only for this portfolio demo.</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-background/70">
              <Clock className="h-5 w-5" />

              <span className="text-xs uppercase tracking-[0.3em]">
                Opening hours
              </span>
            </div>

            <div className="mt-7 space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between border-b border-background/15 pb-3 text-sm"
                >
                  <span>{item.day}</span>

                  <span className="text-background/70">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
