import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Casa Moderna Residencial",
    description: "Diseño contemporáneo que integra espacios abiertos con elementos naturales, creando una armonía perfecta entre interior y exterior.",
    image: project1,
    category: "Residencial",
    year: "2024"
  },
  {
    id: 2,
    title: "Edificio Corporativo Central",
    description: "Estructura innovadora que redefine el concepto de espacio de trabajo moderno con énfasis en sostenibilidad y eficiencia.",
    image: project2,
    category: "Comercial",
    year: "2023"
  },
  {
    id: 3,
    title: "Villa de Lujo Mediterránea",
    description: "Proyecto exclusivo que combina elegancia clásica con tecnología moderna, ofreciendo el máximo confort y sofisticación.",
    image: project3,
    category: "Residencial",
    year: "2024"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una selección de nuestros trabajos más representativos, cada uno diseñado 
            con atención meticulosa al detalle y compromiso con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-background" size={32} />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-copper text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-semibold text-primary group-hover:text-copper transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};