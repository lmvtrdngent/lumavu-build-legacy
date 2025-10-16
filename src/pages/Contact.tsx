import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService Interested In: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:lumavutrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast.success("Opening your email client...");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Get in Touch with Us!
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We'd love to hear from you! Whether you have a question or want to discuss your next project, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="observe-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-card rounded-2xl p-6 shadow-md">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Physical Address</h3>
                    <p className="text-muted-foreground">
                      23 Webber Rd, Delville, Germiston, 1401
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-card rounded-2xl p-6 shadow-md">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Postal Address</h3>
                    <p className="text-muted-foreground">
                      Postnet Suite 82, Private Bag X19, Gardenview, 2047
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-md">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:0639653580"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      063 965 3580
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-md">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Fax</h3>
                    <p className="text-muted-foreground">086 536 6111</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-md">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:lumavutrading@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      lumavutrading@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="observe-animation" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Civil Works" className="text-gray-900">Civil Works</SelectItem>
                      <SelectItem value="General Building" className="text-gray-900">General Building</SelectItem>
                      <SelectItem value="Road Works" className="text-gray-900">Road Works</SelectItem>
                      <SelectItem value="Water & Sewer Reticulation" className="text-gray-900">Water & Sewer Reticulation</SelectItem>
                      <SelectItem value="Electrical Infrastructure" className="text-gray-900">Electrical Infrastructure</SelectItem>
                      <SelectItem value="Mass Earthworks" className="text-gray-900">Mass Earthworks</SelectItem>
                      <SelectItem value="Plant Hire" className="text-gray-900">Plant Hire</SelectItem>
                      <SelectItem value="Other" className="text-gray-900">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
