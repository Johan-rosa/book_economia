import Image from "next/image"
import Link from "next/link"
import type { FooterContent } from "@/lib/content"

interface FooterProps {
  content: FooterContent
  logo: string
  logoAlt: string
}

export function Footer({ content, logo, logoAlt }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                alt={logoAlt}
                width={120}
                height={34}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-foreground">{content.nav_title}</p>
              {content.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-foreground">{content.brand_title}</p>
              {content.brand_links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {content.copyright}
          </p>
          <p className="text-xs text-muted-foreground">
            {content.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
