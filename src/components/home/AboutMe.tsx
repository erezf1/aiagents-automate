
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';

const AboutMe = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-purple-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="section-heading mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center">אודותיי</h2>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <FadeIn delay={100} direction="right">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center justify-center h-full">
                  <Avatar className="w-40 h-40 border-4 border-white shadow-xl mb-6">
                    <AvatarImage src="/lovable-uploads/2e75a01e-3760-4dbb-8119-697c392265dc.png" alt="ארז פייגנברג" />
                    <AvatarFallback>אפ</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2">ארז פייגנברג</h3>
                  <p className="text-primary font-medium mb-6 text-center">מומחה AI ואוטומציה לעסקים</p>
                  <div className="flex space-x-4 space-x-reverse">
                    <a href="https://www.linkedin.com/in/erezfeigenberg/" target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-[#0077B5]/10 text-[#0077B5] rounded-full hover:bg-[#0077B5]/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} direction="up" className="md:col-span-2">
                <div className="p-8 md:p-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">רקע מקצועי</h4>
                      <p className="text-gray-700 leading-relaxed">
                        מנהל מוצר עם ניסיון עשיר בפיתוח מערכות מבוססות AI, עם התמחות בבניית פתרונות נתונים ואוטומציה לעסקים. בעל רקע טכנולוגי חזק וניסיון עשיר של למעלה מ-15 שנה בתחום.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">התמחות</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['פיתוח AI מותאם אישית', 'אוטומציה לעסקים', 'פתרונות דאטה', 'יעוץ טכנולוגי'].map((skill, index) => (
                          <div key={index} className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                            <span className="font-medium text-primary">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">תפקיד נוכחי</h4>
                      <p className="text-gray-700 leading-relaxed">
                        במסגרת תפקידי נוכחי ב-AiGents, אני מתמחה בהתאמת פתרונות AI לעסקים קטנים ובינוניים, מתוך הבנה עמוקה של הצרכים הייחודיים והאתגרים של כל עסק.
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 font-medium italic">
                        המוטו שלי: יצירת פתרונות טכנולוגיים פשוטים לבעיות מורכבות, תוך הדגשת הערך העסקי והחיסכון בזמן ומשאבים.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
