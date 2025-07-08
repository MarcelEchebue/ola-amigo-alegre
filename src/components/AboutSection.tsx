import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Target } from "lucide-react";
import architectPortrait from "@/assets/architect-portrait.jpg";

const stats = [
  { icon: Calendar, value: "15+", label: "Años de Experiencia" },
  { icon: Target, value: "200+", label: "Proyectos Completados" },
  { icon: Users, value: "150+", label: "Clientes Satisfechos" },
  { icon: Award, value: "25+", label: "Premios Recibidos" }
];

export const AboutSection = () => {
  return (
    <section id="acerca" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Acerca de Mí
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Con más de 15 años de experiencia en el diseño arquitectónico, me especializo 
                  en crear espacios que no solo sean visualmente impactantes, sino que también 
                  mejoren la calidad de vida de quienes los habitan.
                </p>
                <p>
                  Mi filosofía se basa en la creencia de que la arquitectura debe ser una 
                  expresión armoniosa entre funcionalidad, sostenibilidad y belleza estética. 
                  Cada proyecto es una oportunidad única para innovar y superar expectativas.
                </p>
                <p>
                  Graduado con honores en Arquitectura por la Universidad Nacional, he tenido 
                  el privilegio de trabajar en proyectos internacionales que van desde 
                  residencias privadas hasta complejos comerciales de gran escala.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center shadow-card hover:shadow-copper transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-copper mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={architectPortrait}
                alt="Arquitecto profesional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-copper opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-copper rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};