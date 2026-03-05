import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { HeroContent } from "@/lib/content"

interface HeroSectionProps {
  hero: HeroContent
  bookCover: string
  bookCoverAlt: string
}

export function HeroSection({ hero, bookCover, bookCoverAlt }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.88_0.06_70_/_0.3),_transparent_60%)]" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 w-fit">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
                {hero.badge}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground text-balance">
              {hero.title}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent -mt-4">
              {hero.subtitle}
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={hero.cta_primary.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {hero.cta_primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.cta_secondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                {hero.cta_secondary.label}
              </Link>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              {hero.byline}
            </p>
          </div>

          {/* Right column - book mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              {/* Shadow behind book */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/10 rounded-full blur-xl" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src={bookCover}
                  alt={bookCoverAlt}
                  width={400}
                  height={560}
                  className="w-full max-w-sm object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
