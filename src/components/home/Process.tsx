
import React from 'react';
import { MessageCircle, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'שיחת ייעוץ קצרה',
    description: 'מבינים מה העסק שלך צריך',
  },
  {
    number: '2',
    icon: Settings,
    title: 'הגדרת סוכן AI אישי',
    description: 'התאמה אישית למשימות שלך',
  },
  {
    number: '3',
    icon: Zap,
    title: 'התחלת עבודה',
    description: 'רואים תוצאות מיידיות!',
  },
];

const Process = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>איך זה עובד?</h2>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16 relative z-10">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={index * 150}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            {/* Note */}
            <FadeIn delay={450}>
              <div className="glass-card rounded-xl p-6 text-center mb-10">
                <p className="text-lg font-medium">
                  אין צורך בהתקנות מסובכות – הכל מתממשק לכלים שכבר יש לך.
                </p>
              </div>
            </FadeIn>
            
            {/* CTA */}
            <FadeIn delay={600}>
              <div className="text-center">
                <Button asChild size="lg" className="button-hover">
                  <Link to="/contact">
                    דברו איתנו והתחילו לחסוך זמן!
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
