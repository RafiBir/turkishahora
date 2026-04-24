"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const reels = [
  {
    id: 1,
    title: "Saludos básicos",
    phrase: "Merhaba, nasılsın?",
    translation: "Hola, ¿cómo estás?",
    duration: "0:45"
  },
  {
    id: 2,
    title: "En el restaurante",
    phrase: "Hesap lütfen",
    translation: "La cuenta, por favor",
    duration: "1:02"
  },
  {
    id: 3,
    title: "Presentarse",
    phrase: "Benim adım...",
    translation: "Mi nombre es...",
    duration: "0:58"
  },
  {
    id: 4,
    title: "De compras",
    phrase: "Bu ne kadar?",
    translation: "¿Cuánto cuesta esto?",
    duration: "0:52"
  }
]

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <section id="video" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Aprende con nosotros
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Frases que usarás desde el primer día
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Mira cómo enseñamos turco de forma práctica y divertida. Estas son las frases que nuestros estudiantes aprenden en su primera semana.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveVideo(reel.id)}
            >
              {/* Video Placeholder */}
              <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-medium px-2 py-1 rounded">
                  {reel.duration}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4 pt-12">
                  <p className="text-background font-medium text-lg">
                    {reel.phrase}
                  </p>
                  <p className="text-background/70 text-sm mt-1">
                    {reel.translation}
                  </p>
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <p className="font-medium text-foreground">{reel.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Quieres aprender más frases como estas?
          </p>
          <Button size="lg" asChild>
            <a href="#reservar">Reserva tu clase de prueba gratis</a>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative bg-card rounded-2xl overflow-hidden max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              onClick={() => setActiveVideo(null)}
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[9/16] bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
                  <Play className="w-10 h-10 ml-1" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">
                  {reels.find(r => r.id === activeVideo)?.phrase}
                </p>
                <p className="text-muted-foreground">
                  {reels.find(r => r.id === activeVideo)?.translation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
