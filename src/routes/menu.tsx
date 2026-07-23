import { createFileRoute } from "@tanstack/react-router";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Luma House Café" },
      {
        name: "description",
        content:
          "A fictional sample café menu created for the Luma House portfolio website.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
          Sample menu
        </p>

        <h1 className="mt-5 font-display text-7xl md:text-8xl">Menu</h1>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">
          All names, descriptions and prices on this page are fictional and
          created only for this portfolio concept.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 md:px-10 md:pb-36">
        <div className="space-y-20">
          {menu.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-5">
                <h2 className="font-display text-4xl md:text-5xl">
                  {section.title}
                </h2>

                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-9 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="border-b border-border pb-6"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-base font-medium">
                          {item.name}

                          {item.popular && (
  <span className="ml-3 inline-flex items-center rounded-full border border-[#b89b5e]/40 bg-[#b89b5e]/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#9b7d3f]">
    Popular
  </span>
)}
                        </h3>

                        {item.description && (
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <p className="shrink-0 text-sm">{item.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
