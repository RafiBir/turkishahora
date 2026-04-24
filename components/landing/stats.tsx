const stats = [
  {
    value: "500+",
    label: "Estudiantes activos",
    description: "De España, México, Argentina y más"
  },
  {
    value: "4.9/5",
    label: "Valoración media",
    description: "Basado en +200 reseñas"
  },
  {
    value: "15+",
    label: "Profesores nativos",
    description: "Certificados y bilingües"
  },
  {
    value: "4 sem",
    label: "Para conversar",
    description: "Tiempo promedio de nuestros estudiantes"
  }
]

export function Stats() {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
