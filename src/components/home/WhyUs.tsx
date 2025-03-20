
import React from 'react';
import { Sparkles, Zap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const reasons = [
  {
    icon: Sparkles,
    title: 'התאמה אישית מלאה',
    description: 'לא פתרון מדף, אלא סוכן AI שנבנה במיוחד עבורך.',
  },
  {
    icon: Zap,
    title: 'שימוש קל ומהיר',
    description: 'עובד עם הכלים הקיימים שלך, בלי צורך בשינוי מערכות.',
  },
  {
    icon: Building,
    title: 'ניסיון בעבודה עם עסקים',
    description: 'מבינים את הצרכים הייחודיים של עסקים קטנים ובינוניים.',
  },
];

const WhyUs = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>למה דווקא AiGents?</h2>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="glass-card rounded-xl p-6 text-center h-full flex flex-col hover-card">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <reason.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground flex-grow">{reason.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={450}>
            <div className="text-center">
              <Button asChild size="lg" className="button-hover">
                <Link to="/contact">
                  קבלו ייעוץ חינם
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
