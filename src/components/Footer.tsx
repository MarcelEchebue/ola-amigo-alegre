import { Heart, Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Web Developer
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando ideas en experiencias digitales únicas a través de 
              desarrollo web innovador y diseño responsivo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-copper transition-colors duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-primary-foreground/80 hover:text-copper transition-colors duration-300"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#acerca"
                  className="text-primary-foreground/80 hover:text-copper transition-colors duration-300"
                >
                  Acerca
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-copper transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-copper transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-copper transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-copper transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Creado con <Heart className="w-4 h-4 text-copper" /> para el desarrollo web moderno
          </p>
          <p className="text-primary-foreground/60 mt-2">
            © 2024 Web Developer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};