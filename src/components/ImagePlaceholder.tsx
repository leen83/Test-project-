import { ImagePlus } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center border border-dashed border-foreground/20 bg-secondary/50 text-center ${className}`}
    >
      <div className="px-6 py-10 text-muted-foreground">
        <ImagePlus className="mx-auto h-8 w-8" strokeWidth={1.3} />

        <p className="mt-4 text-[11px] uppercase tracking-[0.28em]">
          Image placeholder
        </p>

        <p className="mt-2 text-sm">{label}</p>
      </div>
    </div>
  );
}
