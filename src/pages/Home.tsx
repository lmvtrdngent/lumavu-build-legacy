import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

const Home = () => {
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
      title: "Civil Engineering",
      items: [
        "Mass Earthworks",
        "Bulk Sewer and Water Reticulation",
        "Road Construction",
        "Pipe Welding Steel and HDPE",
        "Paving",
        "Storm Water",
        "Kerbs",
      ],
    },
    {
      title: "General Building",
      items: [
        "Bricklaying",
        "Plaster",
        "Paint",
        "Tiling",
        "Plumbing",
        "Electrical",
        "Roofing",
        "Waterproofing",
      ],
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: "CIDB and NHBRC Accredited", description: "Ensuring compliance and professionalism." },
    { icon: TrendingUp, title: "BBBEE Level 1", description: "Supporting transformation and empowerment in South Africa." },
    { icon: Users, title: "Youth-Owned", description: "Driven by innovation and a passion for excellence." },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-muted to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Empowering Future Builders
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Excellence In Construction Services
            </p>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Partner with us for top-quality construction and maintenance solutions that shape South Africa's infrastructure and community development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto observe-animation">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Lumavu Trading Enterprises (Pty) Ltd is a 100% youth black-owned company specializing in Civil Engineering, General Building, Plant Hire, and Facilities Maintenance. With CIDB accreditation and a commitment to quality, we deliver projects on time, within budget, and to the highest standards.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              At Lumavu Trading Enterprises, we are more than just a construction company – we are builders of South Africa's future. Established in 2013 and registered in 2015, we have grown into a trusted name in the construction industry, offering a wide range of services that include Civil Engineering, General Building, Plant Hire, and Facilities Maintenance. Our team of skilled professionals is dedicated to delivering projects that not only meet but exceed client expectations. From road construction and paving to bricklaying and roofing, we bring expertise, innovation, and reliability to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 observe-animation">
            Services Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-lg observe-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 observe-animation">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-8 observe-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
