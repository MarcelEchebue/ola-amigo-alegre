import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-display font-semibold text-primary">
            Arquitecto
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("acerca")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Acerca
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-card animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left py-2 text-foreground hover:text-copper transition-colors duration-300"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="block w-full text-left py-2 text-foreground hover:text-copper transition-colors duration-300"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("acerca")}
                className="block w-full text-left py-2 text-foreground hover:text-copper transition-colors duration-300"
              >
                Acerca
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left py-2 text-foreground hover:text-copper transition-colors duration-300"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};