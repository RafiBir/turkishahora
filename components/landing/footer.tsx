import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="logo-turkish-ahora.png"
                alt="Turkish Ahora logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-cover"
              />
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-background">
                Turkish Ahora
              </span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Aprende turco de forma práctica y sencilla. Diseñado especialmente para hispanohablantes que quieren viajar, vivir o trabajar en Turquía.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#metodo" className="text-background/70 hover:text-background transition-colors">
                  Nuestro método
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-background/70 hover:text-background transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#precios" className="text-background/70 hover:text-background transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#reservar" className="text-background/70 hover:text-background transition-colors">
                  Reservar clase
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@turkishahora.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hola@turkishahora.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Turkish Ahora. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="text-sm text-background/50 hover:text-background transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-background/50 hover:text-background transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
