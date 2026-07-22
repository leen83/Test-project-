import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Luma House Café" },
      {
        name: "description",
        content:
          "Learn about the fictional story and design direction behind the Luma House Café portfolio concept.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
          About the concept
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[1.02] md:text-8xl">
          A fictional café shaped around warmth, clarity and calm.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          Luma House was created as an original portfolio project. The
          business name, menu, contact details and story are fictional.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2 md:px-10 md:pb-32">
        <div className="aspect-[4/5]">
          <ImagePlaceholder label="About page image 1" />
        </div>

        <div className="aspect-[4/5] md:mt-24">
          <ImagePlaceholder label="About page image 2" />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              The story
            </p>

            <h2 className="mt-5 font-display text-5xl md:text-6xl">
              Designed to feel considered, never complicated.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              The concept focuses on the information a café customer actually
              needs: a clear menu, opening hours, location, atmosphere and easy
              navigation.
            </p>

            <p>
              Every section was structured to work well on phones, tablets and
              computers while keeping the visual style soft and distinctive.
            </p>

            <p>
              The empty image frames are intentional. Original or properly
              licensed photographs can be added later without rebuilding the
              page layout.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_.9fr] md:px-10 md:py-32">
        <div className="aspect-[16/10]">
          <ImagePlaceholder label="Wide café lifestyle image" />
        </div>

        <div className="flex items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              Portfolio note
            </p>

            <h2 className="mt-5 font-display text-5xl">
              Original concept, ready for original imagery.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              This website is presented honestly as an independent fictional
              concept created to demonstrate website design and development.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
            >
              View the sample menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
