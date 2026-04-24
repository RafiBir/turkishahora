"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="reservar" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Emoji */}
          <div className="text-5xl mb-6">🇹🇷</div>

          {/* Headline */}
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Empieza a hablar turco hoy mismo
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto text-pretty">
            Reserva tu clase de prueba gratuita de 30 minutos. Sin compromiso, solo ganas de aprender.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
                />
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 bg-foreground text-background hover:bg-foreground/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Reservando...
                    </>
                  ) : (
                    <>
                      Reserva tu clase gratis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Te contactaremos en menos de 24 horas para confirmar tu clase.
              </p>
            </form>
          ) : (
            <div className="mt-10 max-w-md mx-auto bg-primary-foreground rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¡Reserva confirmada!
              </h3>
              <p className="text-muted-foreground">
                Te hemos enviado un email a <span className="font-medium text-foreground">{email}</span> con los detalles de tu clase de prueba.
              </p>
            </div>
          )}

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Clase 100% gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Cancelación flexible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
