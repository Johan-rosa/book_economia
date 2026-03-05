"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import type { NewsletterContent } from "@/lib/content"

interface NewsletterSectionProps {
  content: NewsletterContent
}

export function NewsletterSection({ content }: NewsletterSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section id="suscribete" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-10 md:p-16 text-center">
          {/* Subtle accent flare */}
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 max-w-xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {content.badge}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              {content.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.description}
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 rounded-lg bg-secondary px-6 py-4">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="text-sm font-medium text-secondary-foreground">
                  {content.success}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row w-full gap-3 pt-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.placeholder}
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70 shrink-0"
                >
                  {loading ? (
                    content.button_loading
                  ) : (
                    <>
                      {content.button}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="text-xs text-muted-foreground">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
