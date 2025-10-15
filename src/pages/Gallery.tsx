import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
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

  const civilWorks = [
    "Construction of Isolation Chamber-Mkhwanazi North",
    "Construction of Air Valve and Isolation Chamber",
    "R331 Road Rehabilitation",
    "Randwater 06 Palmiet Steel Pipe 1.9M Dia",
  ];

  const generalBuilding = [
    "Kumba Residence Katlehong",
    "Student Residence in KZN-Zulu Land",
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Project Gallery
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Explore our gallery to see the quality and scope of our completed projects
            </p>
          </div>
        </div>
      </section>

      {/* Civil Works Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 observe-animation">
            Civil Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {civilWorks.map((work, index) => (
              <div
                key={work}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow observe-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground">Project Image</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{work}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Building Gallery */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 observe-animation">
            General Building
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalBuilding.map((work, index) => (
              <div
                key={work}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow observe-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-background rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground">Project Image</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{work}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take a look at some of our projects and the tools we use!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in working with us? Let's discuss your next project.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
