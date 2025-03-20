
import React from 'react';
import { Brain, FileCheck, Clock, CreditCard, Truck, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const features = [
  {
    icon: FileCheck,
    text: 'לאתר טעויות במסמכים פיננסיים ולוודא שכל הדוחות תקינים 📊'
  },
  {
    icon: CreditCard,
    text: 'לבדוק עיכובים בתשלומים ולשלוח תזכורות מותאמות ללקוחות 💰'
  },
  {
    icon: Truck,
    text: 'לנהל תקשורת מול ספקים ולעדכן בזמן אמת על שינויים 📦'
  },
  {
    icon: Users,
    text: 'לבצע סינון חכם של מועמדים בתהליכי גיוס 👩‍💼'
  }
];

const AgentInfo = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>מה זה סוכן AI?</h2>
          </div>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn delay={100}>
            <div className="glass-card rounded-2xl p-8 flex items-center justify-center gap-6 mb-12">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">סוכן AI הוא כלי חכם</h3>
                <p className="text-muted-foreground">
                  שמבצע משימות עבורך באופן אוטומטי – בהתאמה אישית לעסק שלך!
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h3 className="text-xl font-bold mb-6 text-center">
              דוגמאות למה שהוא יכול לעשות עבורך:
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={300 + index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="neo-card p-6 hover-card">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-container shrink-0 mt-1">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={700}>
            <div className="mt-10 p-6 rounded-xl bg-secondary border border-border">
              <h4 className="text-lg font-bold mb-2">יתרון מרכזי?</h4>
              <p className="text-muted-foreground">
                אין צורך להחליף את הכלים שאתה עובד איתם – אנחנו מתאימים את ה-AI אליך.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AgentInfo;
