
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactDetails = [
    {
      icon: Mail,
      title: 'דוא״ל',
      detail: 'info@aiagents.co.il',
      link: 'mailto:info@aiagents.co.il'
    },
    {
      icon: Phone,
      title: 'טלפון',
      detail: '050-400-0000',
      link: 'tel:+972504000000'
    },
    {
      icon: MapPin,
      title: 'כתובת',
      detail: 'רוטשילד 22, תל אביב',
      link: 'https://maps.google.com/?q=Rothschild+22+Tel+Aviv'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="mb-4">צור קשר</h1>
              <p className="text-xl text-muted-foreground">
                נשמח לענות על כל שאלה ולהציע פתרון מותאם אישית לעסק שלך
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Details */}
              <div className="md:col-span-2">
                <FadeIn direction="right">
                  <div className="glass-card rounded-2xl p-8 h-full">
                    <h2 className="text-2xl font-bold mb-6">פרטי התקשרות</h2>
                    
                    <div className="space-y-8">
                      {contactDetails.map((detail, index) => (
                        <a 
                          key={index} 
                          href={detail.link} 
                          className="flex items-start gap-4 group"
                          target={detail.icon === MapPin ? "_blank" : undefined}
                          rel={detail.icon === MapPin ? "noopener noreferrer" : undefined}
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <detail.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{detail.title}</h3>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">
                              {detail.detail}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-12">
                      <h3 className="text-lg font-bold mb-4">שעות פעילות</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>ראשון - חמישי: 9:00 - 18:00</p>
                        <p>שישי: 9:00 - 13:00</p>
                        <p>שבת: סגור</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3">
                <FadeIn direction="left">
                  <ContactForm 
                    title="השאירו לנו הודעה"
                    subtitle="מלאו את הפרטים ונחזור אליכם בהקדם האפשרי"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
