import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">+500 estudiantes activos</span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Aprende turco de forma{" "}
              <span className="text-primary">práctica y sencilla</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Diseñado especialmente para hispanohablantes. Empieza a hablar desde la primera clase, sin perderte en gramática compleja.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {[
                "Clases personalizadas 1 a 1",
                "Método conversacional desde el día 1",
                "Profesores nativos certificados"
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link href="#reservar">
                  Empieza ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link href="#video">
                  <Play className="w-5 h-5 mr-2" />
                  Ver cómo funciona
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Confían en nosotros:</p>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">+500 estudiantes</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">4.9/5 valoración</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Video Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <button 
                    className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    aria-label="Reproducir video"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
                {/* Placeholder content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <p className="text-sm font-medium text-foreground">Merhaba! Benim adım...</p>
                    <p className="text-xs text-muted-foreground mt-1">Tu primera frase en turco</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🇹🇷</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Clase de prueba</p>
                    <p className="text-xs text-muted-foreground">Gratis • 30 minutos</p>
                  </div>
                </div>
              </div>

              {/* Floating Card Right */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">5 profesores online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
