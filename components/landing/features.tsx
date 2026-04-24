import { MessageCircle, Users, Calendar, Globe, BookOpen, Zap } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Método conversacional",
    description: "Aprende hablando desde el primer día. Nada de memorizar listas interminables de vocabulario."
  },
  {
    icon: Users,
    title: "Clases 1 a 1",
    description: "Atención personalizada con profesores nativos que adaptan cada clase a tu nivel y objetivos."
  },
  {
    icon: Calendar,
    title: "Horarios flexibles",
    description: "Agenda tus clases cuando mejor te convenga. Disponibilidad de lunes a domingo."
  },
  {
    icon: Globe,
    title: "Para hispanohablantes",
    description: "Contenido diseñado específicamente para hablantes de español, aprovechando similitudes."
  },
  {
    icon: BookOpen,
    title: "Material exclusivo",
    description: "Recursos didácticos creados por nuestro equipo pedagógico. Acceso 24/7 a la plataforma."
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    description: "Nuestros estudiantes mantienen conversaciones básicas en menos de 4 semanas."
  }
]

export function Features() {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nuestro método
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Diseñado para que hables turco, no para que estudies gramática
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Olvídate de los métodos tradicionales. Nuestro enfoque práctico te prepara para situaciones reales en Turquía.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
