
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              שאלות? רוצים להתנסות?
            </h2>
          </FadeIn>
          
          <FadeIn delay={150}>
            <p className="text-xl text-muted-foreground mb-8">
              מלאו פרטים ונחזור אליכם עם פתרון מותאם אישית!
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="button-hover">
                <Link to="/contact">
                  השאירו פרטים ונחזור אליכם!
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="button-hover">
                <a href="https://wa.me/972504000000" target="_blank" rel="noopener noreferrer">
                  <span>או שלחו הודעה בוואטסאפ</span>
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
