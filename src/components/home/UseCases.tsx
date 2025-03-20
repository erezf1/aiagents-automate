
import React, { useState } from 'react';
import { CreditCard, CheckSquare, Truck, MessageSquare, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const useCases = [
  {
    id: 'billing',
    icon: CreditCard,
    title: 'ניהול גבייה ומעקב אחרי חשבוניות פתוחות',
    description: 'סוכן AI אוסף נתונים ממיילים, דוחות אקסל ומערכות חשבוניות כדי לזהות חשבוניות פתוחות, לתזכר לקוחות, ולשפר את ניהול התשלומים בלי צורך במערכת נפרדת.'
  },
  {
    id: 'quality',
    icon: CheckSquare,
    title: 'בקרת איכות על תהליכים פנימיים',
    description: 'עסקים המשתמשים בטפסים פנימיים ואקסלים (כמו דוחות מלאי או בקרת שירות) יכולים להיעזר בסוכן AI שסורק ומאתר טעויות, פערים וחוסרים באופן אוטומטי ומתריע על בעיות בזמן אמת.'
  },
  {
    id: 'suppliers',
    icon: Truck,
    title: 'אוטומציה חכמה לתיאום מול ספקים',
    description: 'בעלי עסקים שמשתמשים במספר ספקים יכולים להיעזר בסוכן AI שמרכז הזמנות, מזהה איחורים, שולח עדכונים, ואף מציע תחליפים לספקים חלופיים על סמך התנהגות קודמת של הספקים.'
  },
  {
    id: 'customer',
    icon: MessageSquare,
    title: 'מעקב וניתוח שיחות שירות לקוחות פנימיות',
    description: 'סוכן AI מנתח דוחות שירות לקוחות (במיילים, וואטסאפ, CRM) ומספק תובנות על בעיות חוזרות, תקלות, ומדדי שביעות רצון בלי צורך במעקב ידני או מערכות מורכבות.'
  },
  {
    id: 'hiring',
    icon: Users,
    title: 'אוטומציה של תהליכי גיוס עובדים',
    description: 'סוכן AI מסנן קורות חיים, מנתח התאמה לפי דרישות התפקיד, ושולח למגייסים רק מועמדים מתאימים בלי צורך לעבור על מאות פניות ידנית.'
  }
];

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(useCases[0].id);

  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>דוגמאות לשימוש</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI שמותאם לעסק שלך
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {useCases.map(useCase => (
                <button
                  key={useCase.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    activeCase === useCase.id
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveCase(useCase.id)}
                >
                  <useCase.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          {useCases.map(useCase => (
            <div
              key={useCase.id}
              className={`transition-all duration-500 ${
                activeCase === useCase.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 absolute -z-10'
              }`}
              style={{ display: activeCase === useCase.id ? 'block' : 'none' }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 flex items-start justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground text-lg">{useCase.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
