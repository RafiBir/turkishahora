"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TA</span>
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-foreground">
              Turkish Ahora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#metodo" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Método
            </Link>
            <Link href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Testimonios
            </Link>
            <Link href="#precios" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Precios
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Contacto
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contacto">Contactar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#reservar">Reserva tu clase</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#metodo" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Método
              </Link>
              <Link 
                href="#testimonios" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                href="#precios" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link 
                href="#contacto" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link href="#contacto">Contactar</Link>
                </Button>
                <Button asChild>
                  <Link href="#reservar">Reserva tu clase</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
