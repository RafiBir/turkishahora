"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Estudiante desde hace 6 meses",
    location: "Madrid, España",
    image: "MG",
    content: "En solo 3 meses pude mantener conversaciones básicas con mi novio turco y su familia. El método es increíble porque desde el primer día empiezas a hablar. ¡Recomendadísimo!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Preparándose para mudarse a Estambul",
    location: "Ciudad de México",
    image: "CR",
    content: "Probé varias apps y cursos online pero nada funcionaba hasta que encontré Turkish Ahora. Las clases personalizadas hacen toda la diferencia. Ahora me siento preparado para mi nueva vida en Turquía.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Viajera frecuente",
    location: "Buenos Aires, Argentina",
    image: "AM",
    content: "Viajo a Turquía cada año y quería poder comunicarme más allá del inglés básico. Después de 4 meses de clases, puedo negociar en el Gran Bazar y hacer amigos locales. ¡Una experiencia transformadora!",
    rating: 5
  },
  {
    id: 4,
    name: "Diego López",
    role: "Empresario",
    location: "Bogotá, Colombia",
    image: "DL",
    content: "Necesitaba aprender turco por negocios y la flexibilidad de horarios fue clave. Los profesores entienden las necesidades específicas de cada estudiante. Muy profesionales.",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Más de 500 hispanohablantes ya han comenzado su viaje aprendiendo turco con nosotros.
          </p>
        </div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-foreground text-lg leading-relaxed mb-8">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <div className="bg-background rounded-2xl p-6 border border-border">
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-10 h-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-10 h-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
