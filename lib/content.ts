import fs from "fs"
import path from "path"
import YAML from "yaml"

const contentDir = path.join(process.cwd(), "content")

function loadYaml<T>(filename: string): T {
  const filePath = path.join(contentDir, filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  return YAML.parse(raw) as T
}

/* ---- Site ---- */

export interface NavItem {
  label: string
  href: string
}

export interface CTA {
  label: string
  href: string
}

export interface HeroContent {
  badge: string
  title: string
  subtitle: string
  description: string
  cta_primary: CTA
  cta_secondary: CTA
  byline: string
}

export interface NewsletterContent {
  badge: string
  title: string
  description: string
  placeholder: string
  button: string
  button_loading: string
  success: string
  disclaimer: string
}

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterContent {
  description: string
  nav_title: string
  links: FooterLink[]
  brand_title: string
  brand_links: FooterLink[]
  copyright: string
  location: string
}

export interface SiteContent {
  site_name: string
  site_url: string
  logo: string
  logo_alt: string
  book_cover: string
  book_cover_alt: string
  nav: NavItem[]
  nav_cta: CTA
  hero: HeroContent
  newsletter: NewsletterContent
  footer: FooterContent
}

export function getSiteContent(): SiteContent {
  return loadYaml<SiteContent>("site.yaml")
}

/* ---- Features ---- */

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface FeaturesContent {
  section: { badge: string; title: string; description: string }
  items: FeatureItem[]
}

export function getFeaturesContent(): FeaturesContent {
  return loadYaml<FeaturesContent>("features.yaml")
}

/* ---- Chapters ---- */

export interface ChapterItem {
  number: string
  title: string
  description: string
}

export interface ChapterSubsection {
  title?: string
  chapters: ChapterItem[]
}

export interface ChapterSection {
  number: string
  title: string
  subsections: ChapterSubsection[]
}

export interface ChaptersContent {
  section: { badge: string; title: string; description: string }
  sections: ChapterSection[]
}

export function getChaptersContent(): ChaptersContent {
  return loadYaml<ChaptersContent>("chapters.yaml")
}

/* ---- Professors ---- */

export interface ProfessorResource {
  icon: string
  title: string
  description: string
}

export interface FormField {
  id: string
  label: string
  type: string
  placeholder: string
}

export interface ProfessorsForm {
  title: string
  button: string
  button_loading: string
  success_title: string
  success_message: string
  fields: FormField[]
}

export interface ProfessorsContent {
  section: { badge: string; title: string; description: string }
  resources: ProfessorResource[]
  form: ProfessorsForm
}

export function getProfessorsContent(): ProfessorsContent {
  return loadYaml<ProfessorsContent>("professors.yaml")
}
