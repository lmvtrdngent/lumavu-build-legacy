import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Building2, Truck, Settings } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: Wrench,
      title: "Civil Engineering",
      items: [
        {
          name: "Mass Earthworks",
          description: "Preparing sites for construction with precision and efficiency.",
        },
        {
          name: "Bulk Sewer and Water Reticulation",
          description: "Designing and installing systems that ensure reliable water and sewer services.",
        },
        {
          name: "Road Construction",
          description: "Building durable and safe roads that stand the test of time.",
        },
        {
          name: "Pipe Welding (Steel and HDPE)",
          description: "Expert welding services for pipelines and infrastructure.",
        },
        {
          name: "Paving, Storm Water, and Kerbs",
          description: "Creating functional and aesthetically pleasing surfaces.",
        },
      ],
    },
    {
      icon: Building2,
      title: "General Building",
      items: [
        {
          name: "Bricklaying, Plastering, and Painting",
          description: "Delivering high-quality finishes for residential and commercial buildings.",
        },
        {
          name: "Tiling, Plumbing, and Electrical",
          description: "Ensuring every aspect of your building is functional and stylish.",
        },
        {
          name: "Roofing and Waterproofing",
          description: "Protecting your property from the elements with durable roofing solutions.",
        },
      ],
    },
    {
      icon: Truck,
      title: "Plant Hire",
      items: [
        {
          name: "Equipment Rental",
          description: "Tipper Trucks, TLB, Rollers, Compactors, and Generators: Reliable equipment for all your construction needs.",
        },
      ],
    },
    {
      icon: Settings,
      title: "Facilities Maintenance",
      items: [
        {
          name: "Building Maintenance",
          description: "Painting, plumbing, electrical, and roofing services.",
        },
        {
          name: "General Facilities Management",
          description: "Ensuring your property remains in top condition.",
        },
        {
          name: "Supply Chain Management and Procurement",
          description: "Streamlining operations to ensure efficiency and cost-effectiveness.",
        },
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive construction and maintenance solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`observe-animation ${index % 2 === 0 ? "" : "bg-muted -mx-4 lg:-mx-8 px-4 lg:px-8 py-16 rounded-3xl"}`}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mr-4">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.items.map((item) => (
                      <div key={item.name} className="bg-card rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-primary">{item.name}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let us bring your vision to life
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
