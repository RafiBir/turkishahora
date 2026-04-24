import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Prueba",
    price: "Gratis",
    period: "",
    description: "Conoce nuestro método sin compromiso",
    features: [
      "1 clase de 30 minutos",
      "Evaluación de nivel",
      "Plan de estudio personalizado",
      "Sin compromiso"
    ],
    cta: "Reserva tu clase gratis",
    popular: false
  },
  {
    name: "Mensual",
    price: "€149",
    period: "/mes",
    description: "Ideal para empezar tu viaje",
    features: [
      "4 clases de 60 minutos",
      "Profesor nativo asignado",
      "Material didáctico incluido",
      "Acceso a la plataforma 24/7",
      "Soporte por WhatsApp"
    ],
    cta: "Empieza ahora",
    popular: true
  },
  {
    name: "Intensivo",
    price: "€279",
    period: "/mes",
    description: "Para resultados más rápidos",
    features: [
      "8 clases de 60 minutos",
      "Profesor nativo asignado",
      "Material didáctico incluido",
      "Acceso a la plataforma 24/7",
      "Soporte prioritario",
      "Sesiones de conversación grupales"
    ],
    cta: "Empieza ahora",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Precios
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Planes que se adaptan a ti
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Empieza con una clase gratis y elige el plan que mejor se ajuste a tus objetivos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 md:scale-110"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                asChild
              >
                <Link href="#reservar">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            ¿Necesitas un plan personalizado para empresas o grupos?{" "}
            <Link href="#contacto" className="text-primary hover:underline font-medium">
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
