import { BarChart3, BookOpen, Globe, Landmark, TrendingUp, Users } from "lucide-react"
import type { FeaturesContent } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Landmark,
  TrendingUp,
  BarChart3,
  Users,
  BookOpen,
}

interface FeaturesSectionProps {
  content: FeaturesContent
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  const { section, items } = content

  return (
    <section id="contenido" className="py-20 md:py-28 bg-card">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Globe
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 rounded-xl bg-background p-6 border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
