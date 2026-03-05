import type { ChaptersContent } from "@/lib/content"

interface ChaptersSectionProps {
  content: ChaptersContent
}

export function ChaptersSection({ content }: ChaptersSectionProps) {
  const { section, items } = content

  return (
    <section id="libro" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
            {section.badge}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-4">
            {section.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {section.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((chapter) => (
            <div
              key={chapter.number}
              className="group flex gap-5 rounded-xl bg-card p-6 border border-border hover:border-accent/40 transition-colors"
            >
              <span className="font-serif text-3xl text-accent/60 shrink-0 leading-none pt-1">
                {chapter.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {chapter.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
