
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/2e75a01e-3760-4dbb-8119-697c392265dc.png" 
                alt="סוכני בינה - Business AI Agents" 
                className="h-12"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              אוטומציה חכמה שמנהלת משימות יומיומיות בעסק שלך – בלי להחליף את המערכות הקיימות.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary flex items-center transition-colors">
                  <ChevronLeft size={16} />
                  <span>בית</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary flex items-center transition-colors">
                  <ChevronLeft size={16} />
                  <span>מאמרים</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary flex items-center transition-colors">
                  <ChevronLeft size={16} />
                  <span>צור קשר</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@aiagents.co.il" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="ml-2" />
                <span>info@aiagents.co.il</span>
              </a>
              <a 
                href="tel:+972504000000" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="ml-2" />
                <span>050-400-0000</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} סוכני בינה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
