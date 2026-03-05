import type { ChaptersContent } from "@/lib/content"

interface ChaptersSectionProps {
  content: ChaptersContent
}

export function ChaptersSection({ content }: ChaptersSectionProps) {
  const { section, sections } = content

  return (
    <section id="libro" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
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

        <div className="flex flex-col gap-14">
          {sections.map((sec) => (
            <div key={sec.number}>
              <div className="flex items-baseline gap-3 mb-8 pb-3 border-b border-border">
                <span className="font-serif text-2xl text-accent/60 shrink-0 leading-none">
                  {sec.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {sec.title}
                </h3>
              </div>

              <div className="flex flex-col gap-8">
                {sec.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="flex flex-col gap-4">
                    {sub.title && (
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent/80">
                        {sub.title}
                      </p>
                    )}
                    <div className="grid md:grid-cols-2 gap-3">
                      {sub.chapters.map((chapter) => (
                        <div
                          key={chapter.number}
                          className="flex gap-4 rounded-lg bg-card border border-border p-4 hover:border-accent/40 transition-colors"
                        >
                          <span className="font-serif text-xl text-accent/50 shrink-0 leading-none pt-0.5">
                            {chapter.number}
                          </span>
                          <div className="flex flex-col gap-1">
                            <h4 className="text-sm font-semibold text-foreground leading-snug">
                              {chapter.title}
                            </h4>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {chapter.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
