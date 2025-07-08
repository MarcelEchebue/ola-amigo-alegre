import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Av. Arquitectura 123", "Ciudad Moderna, CP 12345"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+52 55 1234 5678", "+52 55 8765 4321"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@arquitecto.com", "proyectos@arquitecto.com"]
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 10:00 - 14:00"]
  }
];

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Formulario enviado");
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y 
            ayudarte a convertirlas en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-copper transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-copper/10 p-3 rounded-full">
                          <info.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Enviar Mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        required
                        className="transition-all duration-300 focus:shadow-copper"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="transition-all duration-300 focus:shadow-copper"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      placeholder="+52 55 1234 5678"
                      className="transition-all duration-300 focus:shadow-copper"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Tipo de Proyecto
                    </label>
                    <Input
                      type="text"
                      placeholder="Ej: Casa residencial, oficina, etc."
                      className="transition-all duration-300 focus:shadow-copper"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:shadow-copper resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="copper"
                    size="lg"
                    className="w-full font-medium"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};