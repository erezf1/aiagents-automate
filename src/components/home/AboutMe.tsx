
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';

const AboutMe = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>אודותיי</h2>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <FadeIn delay={100} direction="right">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="w-48 h-48 border-4 border-white shadow-xl mb-6">
                  <AvatarImage src="/lovable-uploads/2e75a01e-3760-4dbb-8119-697c392265dc.png" alt="ארז פייגנברג" />
                  <AvatarFallback>אפ</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-2">ארז פייגנברג</h3>
                <p className="text-primary font-medium mb-4">מומחה AI ואוטומציה לעסקים</p>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="https://www.linkedin.com/in/erezfeigenberg/" target="_blank" rel="noopener noreferrer" 
                     className="p-2 bg-[#0077B5]/10 text-[#0077B5] rounded-full hover:bg-[#0077B5]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} direction="up">
              <Card className="bg-white/80 backdrop-blur-sm border-white shadow-lg md:col-span-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">רקע מקצועי</h4>
                  <p className="mb-4">
                    מנהל מוצר עם ניסיון עשיר בפיתוח מערכות מבוססות AI, עם התמחות בבניית פתרונות נתונים ואוטומציה לעסקים. בעל רקע טכנולוגי חזק וניסיון עשיר של למעלה מ-15 שנה בתחום.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">התמחות</h4>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="font-medium text-primary">פיתוח AI מותאם אישית</span>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="font-medium text-primary">אוטומציה לעסקים</span>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="font-medium text-primary">פתרונות דאטה</span>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="font-medium text-primary">יעוץ טכנולוגי</span>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    במסגרת תפקידי נוכחי ב-AiGents, אני מתמחה בהתאמת פתרונות AI לעסקים קטנים ובינוניים, מתוך הבנה עמוקה של הצרכים הייחודיים והאתגרים של כל עסק.
                  </p>
                  
                  <p>
                    המוטו שלי: יצירת פתרונות טכנולוגיים פשוטים לבעיות מורכבות, תוך הדגשת הערך העסקי והחיסכון בזמן ומשאבים.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
