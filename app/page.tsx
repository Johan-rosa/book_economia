import { getSiteContent, getFeaturesContent, getChaptersContent, getProfessorsContent } from "@/lib/content"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ChaptersSection } from "@/components/chapters-section"
import { ProfessorsSection } from "@/components/professors-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const site = getSiteContent()
  const features = getFeaturesContent()
  const chapters = getChaptersContent()
  const professors = getProfessorsContent()

  return (
    <>
      <Header nav={site.nav} navCta={site.nav_cta} logo={site.logo} logoAlt={site.logo_alt} />
      <main>
        <HeroSection
          hero={site.hero}
          bookCover={site.book_cover}
          bookCoverAlt={site.book_cover_alt}
        />
        <FeaturesSection content={features} />
        <ChaptersSection content={chapters} />
        <ProfessorsSection content={professors} />
        <NewsletterSection content={site.newsletter} />
      </main>
      <Footer content={site.footer} logo={site.logo} logoAlt={site.logo_alt} />
    </>
  )
}
