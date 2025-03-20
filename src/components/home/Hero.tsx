
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="inline-block mb-4 py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
              העתיד של העסק שלך
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <h1 className="mb-6 leading-tight">
              סוכני AI בהתאמה אישית לעסק שלך
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="tag">
                חסוך זמן ⏳
              </div>
              <div className="tag">
                צמצם טעויות ❌
              </div>
              <div className="tag">
                שפר תהליכים ⚡
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={300}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              אוטומציה חכמה שמנהלת משימות יומיומיות בעסק שלך – בלי להחליף את המערכות הקיימות.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={400}>
            <Button asChild size="lg" className="button-hover shadow-button">
              <Link to="/contact">
                לקבלת ייעוץ חינם
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
