"use client"

import { useState } from "react"
import { GraduationCap, BookOpenCheck, FileText, CheckCircle2 } from "lucide-react"
import type { ProfessorsContent } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  BookOpenCheck,
  GraduationCap,
}

interface ProfessorsSectionProps {
  content: ProfessorsContent
}

export function ProfessorsSection({ content }: ProfessorsSectionProps) {
  const { section, resources, form } = content
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="docentes" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - information */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
                {section.badge}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground text-balance mb-4">
                {section.title}
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed max-w-lg">
                {section.description}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {resources.map((resource) => {
                const Icon = iconMap[resource.icon] ?? FileText
                return (
                  <div key={resource.title} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-foreground">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/60 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - form */}
          <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="font-serif text-2xl text-primary-foreground">
                  {form.success_title}
                </h3>
                <p className="text-primary-foreground/70 max-w-sm">
                  {form.success_message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-xl text-primary-foreground mb-2">
                  {form.title}
                </h3>

                {form.fields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <label htmlFor={field.id} className="text-sm font-medium text-primary-foreground/80">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-70"
                >
                  {loading ? form.button_loading : form.button}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
