import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Target, Eye, Heart } from "lucide-react";

const About = () => {
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

  const accreditations = [
    {
      title: "CIDB and NHBRC Accredited",
      description: "Ensuring compliance and professionalism.",
    },
    {
      title: "BBBEE Level 1",
      description: "Supporting transformation and empowerment in South Africa.",
    },
    {
      title: "Youth-Owned",
      description: "Driven by innovation and a passion for excellence.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on the quality of our work.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency and honesty.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new technologies and methods to deliver better results.",
    },
    {
      icon: Eye,
      title: "Empowerment",
      description: "We are committed to empowering our communities through job creation and skills development.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Who Are We?
            </h1>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto observe-animation">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Lumavu Trading Enterprises (Pty) Ltd was established in 2013 with a vision to provide high-quality construction and maintenance services that contribute to the development of South Africa. Registered in 2015, we are a 100% youth black-owned company with a passion for excellence in Civil Engineering, General Building, Plant Hire, and Facilities Maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 observe-animation">
            Accreditations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {accreditations.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-lg text-center observe-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto observe-animation">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Members</h2>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <p className="text-xl">
                <strong>MR MS Lubbe (PDI)</strong> - 100% Shareholding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="observe-animation">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision</h2>
              <p className="text-lg leading-relaxed">
                To provide high-quality construction services to clients and in the development of South Africa.
              </p>
            </div>
            <div className="observe-animation" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
              <p className="text-lg leading-relaxed">
                We strive to provide a professional, reliable, effective, on-time and within-budget service, while remaining client-focused. We build our business on referrals by meeting and exceeding our contractual obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 observe-animation">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 shadow-lg text-center observe-animation"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn more about our services and how we can help you achieve your goals
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
