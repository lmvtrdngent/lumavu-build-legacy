import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project1 from "@/assets/gallery/project-1.jpg";
import project2 from "@/assets/gallery/project-2.jpg";
import project3 from "@/assets/gallery/project-3.jpg";
import project4 from "@/assets/gallery/project-4.jpg";
import project5 from "@/assets/gallery/project-5.jpg";
import project6 from "@/assets/gallery/project-6.jpg";
import project7 from "@/assets/gallery/project-7.jpg";
import project8 from "@/assets/gallery/project-8.jpg";
import project9 from "@/assets/gallery/project-9.jpg";
import project10 from "@/assets/gallery/project-10.jpg";
import project11 from "@/assets/gallery/project-11.jpg";
import project12 from "@/assets/gallery/project-12.jpg";
import project13 from "@/assets/gallery/project-13.jpg";
import project14 from "@/assets/gallery/project-14.jpg";
import project15 from "@/assets/gallery/project-15.jpg";
import project16 from "@/assets/gallery/project-16.jpg";
import project17 from "@/assets/gallery/project-17.jpg";
import project18 from "@/assets/gallery/project-18.jpg";
import project19 from "@/assets/gallery/project-19.jpg";
import project20 from "@/assets/gallery/project-20.jpg";
import project21 from "@/assets/gallery/project-21.jpg";
import project22 from "@/assets/gallery/project-22.jpg";
import project23 from "@/assets/gallery/project-23.jpg";
import project24 from "@/assets/gallery/project-24.jpg";
import project25 from "@/assets/gallery/project-25.jpg";
import project26 from "@/assets/gallery/project-26.jpg";
import project27 from "@/assets/gallery/project-27.jpg";
import project28 from "@/assets/gallery/project-28.jpg";
import project29 from "@/assets/gallery/project-29.jpg";
import project30 from "@/assets/gallery/project-30.jpg";
import project31 from "@/assets/gallery/project-31.jpg";
import project32 from "@/assets/gallery/project-32.jpg";

const Gallery = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    { src: project1, alt: "Residential construction project with roofing work", span: "col-span-2 row-span-2" },
    { src: project2, alt: "Civil engineering excavation and pipe installation", span: "col-span-1 row-span-1" },
    { src: project3, alt: "Building plastering and painting project", span: "col-span-1 row-span-1" },
    { src: project4, alt: "Multi-story building construction in progress", span: "col-span-2 row-span-1" },
    { src: project5, alt: "Large-scale student residence development", span: "col-span-2 row-span-2" },
    { src: project6, alt: "Heavy machinery fleet for mass earthworks", span: "col-span-1 row-span-1" },
    { src: project7, alt: "Lumavu Trading construction equipment on site", span: "col-span-1 row-span-1" },
    { src: project8, alt: "Traditional roofing structure installation", span: "col-span-1 row-span-2" },
    { src: project9, alt: "Completed residential building with modern finishes", span: "col-span-2 row-span-1" },
    { src: project10, alt: "Construction machinery lineup for civil works", span: "col-span-1 row-span-1" },
    { src: project11, alt: "Road grading equipment on construction site", span: "col-span-2 row-span-1" },
    { src: project12, alt: "Water pipe installation and reticulation works", span: "col-span-1 row-span-2" },
    { src: project13, alt: "Pipeline installation with excavation works", span: "col-span-1 row-span-1" },
    { src: project14, alt: "Modern student residence complex with parking", span: "col-span-2 row-span-2" },
    { src: project15, alt: "Excavation work at commercial construction site", span: "col-span-1 row-span-1" },
    { src: project16, alt: "Civil works pipeline installation project", span: "col-span-1 row-span-1" },
    { src: project17, alt: "Completed residential apartment complex", span: "col-span-2 row-span-1" },
    { src: project18, alt: "Modern kitchen interior finishing work", span: "col-span-1 row-span-1" },
    { src: project19, alt: "Heavy equipment transport logistics", span: "col-span-1 row-span-1" },
    { src: project20, alt: "Luxury residential property with pool construction", span: "col-span-2 row-span-2" },
    { src: project21, alt: "Completed residential home with modern finishes", span: "col-span-1 row-span-1" },
    { src: project22, alt: "Residential building under construction", span: "col-span-1 row-span-2" },
    { src: project23, alt: "Modern interior staircase installation", span: "col-span-1 row-span-2" },
    { src: project24, alt: "Multi-level residential construction project", span: "col-span-2 row-span-1" },
    { src: project25, alt: "Heavy machinery for mass earthworks", span: "col-span-2 row-span-2" },
    { src: project26, alt: "Residential construction in progress", span: "col-span-1 row-span-1" },
    { src: project27, alt: "Foundation and pillar construction work", span: "col-span-2 row-span-1" },
    { src: project28, alt: "Lumavu Trading company truck on site", span: "col-span-1 row-span-1" },
    { src: project29, alt: "Residential property exterior finishing", span: "col-span-1 row-span-1" },
    { src: project30, alt: "Swimming pool construction and waterproofing", span: "col-span-2 row-span-2" },
    { src: project31, alt: "Concrete slab pouring and finishing work", span: "col-span-2 row-span-1" },
    { src: project32, alt: "Lumavu Trading excavator fleet on site", span: "col-span-1 row-span-2" },
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

      {/* Masonry Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} observe-animation overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
