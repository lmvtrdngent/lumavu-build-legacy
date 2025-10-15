import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Physical Address:</p>
                  <p>23 Webber Rd, Delville, Germiston, 1401</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Postal Address:</p>
                  <p>Postnet Suite 82, Private Bag X19, Gardenview, 2047</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <a href="tel:0639653580" className="hover:text-primary transition-colors">
                    063 965 3580
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p>Fax: 086 536 6111</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <div>
                  <a href="mailto:lumavutrading@gmail.com" className="hover:text-primary transition-colors">
                    lumavutrading@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Lumavu Trading Enterprises (Pty) Ltd. All rights reserved.</p>
          <p className="mt-2">Built by Architeq Web Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
