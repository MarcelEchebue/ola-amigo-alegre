import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

type ProjectType = "administrativo" | "cultural" | "educativo" | "industrial" | "residencial" | "urbanismo";

interface Project {
  id: string;
  name: string;
  category: ProjectType;
  images: string[];
  title: string;
  description: string;
}

// Mock data - reemplazar con datos reales
const projects: Project[] = [
  {
    id: "casa-moderna",
    name: "Casa Moderna",
    category: "residencial",
    images: [project1],
    title: "Casa Moderna Residencial",
    description: "Diseño contemporáneo que integra espacios abiertos con elementos naturales, creando una armonía perfecta entre interior y exterior."
  },
  {
    id: "edificio-corporativo",
    name: "Edificio Corporativo",
    category: "administrativo", 
    images: [project2],
    title: "Edificio Corporativo Central",
    description: "Estructura innovadora que redefine el concepto de espacio de trabajo moderno con énfasis en sostenibilidad y eficiencia."
  },
  {
    id: "villa-mediterranea",
    name: "Villa Mediterránea",
    category: "residencial",
    images: [project3],
    title: "Villa de Lujo Mediterránea", 
    description: "Proyecto exclusivo que combina elegancia clásica con tecnología moderna, ofreciendo el máximo confort y sofisticación."
  }
];

const categories: ProjectType[] = ["administrativo", "cultural", "educativo", "industrial", "residencial", "urbanismo"];

const categoryNames: Record<ProjectType, string> = {
  administrativo: "Administrativo",
  cultural: "Cultural", 
  educativo: "Educativo",
  industrial: "Industrial",
  residencial: "Residencial",
  urbanismo: "Urbanismo"
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectType | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getProjectsByCategory = (category: ProjectType) => {
    return projects.filter(project => project.category === category);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Vista principal - categorías
  if (!selectedCategory) {
    return (
      <section id="proyectos" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Selecciona una categoría para explorar los proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category}
                className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedCategory(category)}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-copper rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-copper transition-all duration-300">
                    <div className="w-10 h-10 bg-background rounded-md"></div>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-3 group-hover:text-copper transition-colors duration-300">
                    {categoryNames[category]}
                  </h3>
                  <p className="text-muted-foreground">
                    {getProjectsByCategory(category).length} proyecto(s)
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Vista de proyectos por categoría
  if (selectedCategory && !selectedProject) {
    const categoryProjects = getProjectsByCategory(selectedCategory);

    return (
      <section id="proyectos" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Button
              variant="minimal"
              onClick={() => setSelectedCategory(null)}
              className="gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a categorías
            </Button>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              {categoryNames[selectedCategory]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-copper text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {categoryNames[project.category]}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-primary group-hover:text-copper transition-colors duration-300">
                    {project.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Vista detallada del proyecto
  if (selectedProject) {
    return (
      <section id="proyectos" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <Button
              variant="minimal"
              onClick={() => setSelectedProject(null)}
              className="gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a {categoryNames[selectedCategory!]}
            </Button>
          </div>

          <div className="space-y-12">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-elegant">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="hero"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    
                    <Button
                      variant="hero"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>
              
              {/* Image indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center mt-6 space-x-3">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? "bg-copper shadow-copper" 
                          : "bg-muted hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {selectedProject.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return null;
};