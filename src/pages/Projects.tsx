import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const currentProjects = [
    {
      title: "Sam Ntuli Mall, Katlehong",
      description: "Storm Water, Water, and Sewer Reticulation",
      location: "Katlehong",
      status: "In Progress",
    },
  ];

  const projectHistory = [
    {
      title: "Electrofusion Welding, Mkhwanazi North Water Reticulation",
      value: "R2.1M",
      description: "A complex project that showcased our expertise in water reticulation.",
    },
    {
      title: "Construction of Concrete Valve Chambers, Randwater Pipeline",
      value: "R600K",
      description: "Delivering precision and durability in pipeline infrastructure.",
    },
    {
      title: "Rehabilitation of R331 Dale Road",
      value: "R3.2M",
      description: "Restoring a critical road to ensure safety and functionality.",
    },
    {
      title: "Heineken Beverages SA",
      description: "Painting and paving services for a leading beverage company.",
    },
    {
      title: "66 St Serene Flats",
      description: "Building renovations and electrical maintenance.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Work Speaks for Itself
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Explore our portfolio of successful construction and maintenance projects
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 observe-animation">
            Current Projects
          </h2>
          <div className="max-w-4xl">
            {currentProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 shadow-lg observe-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.status}
                  </Badge>
                  <Badge variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project History */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 observe-animation">
            Project History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {projectHistory.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 shadow-lg observe-animation"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {project.value && (
                  <div className="text-3xl font-bold text-primary mb-3">{project.value}</div>
                )}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
