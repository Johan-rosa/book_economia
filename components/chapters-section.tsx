import type { ChaptersContent } from "@/lib/content"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

        <Accordion type="single" collapsible defaultValue="section-1">
          {sections.map((sec) => (
            <AccordionItem key={sec.number} value={`section-${sec.number}`}>
              <AccordionTrigger className="text-left gap-4 py-5 hover:no-underline">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-accent/60 shrink-0 leading-none">
                    {sec.number}
                  </span>
                  <span className="text-base font-semibold text-foreground">
                    {sec.title}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6">
                <div className="flex flex-col gap-8 pt-2">
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
                              <h3 className="text-sm font-semibold text-foreground leading-snug">
                                {chapter.title}
                              </h3>
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
