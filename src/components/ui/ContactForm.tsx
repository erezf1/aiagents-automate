
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "השאר פרטים ונחזור אליך",
  subtitle = "מלא את הפרטים ונחזור אליך בהקדם עם פתרון מותאם אישית",
  className = "",
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "פרטים נשלחו בהצלחה",
        description: "ניצור איתך קשר בהקדם האפשרי",
      });
    }, 1500);
  };

  return (
    <div className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}>
      {!isSubmitted ? (
        <>
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="שם מלא"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="דוא״ל"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
            </div>
            
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="טלפון"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
            </div>
            
            <div>
              <Input
                type="text"
                name="company"
                placeholder="שם החברה"
                value={formData.company}
                onChange={handleChange}
                className="bg-white/50"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="במה נוכל לעזור לך?"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white/50"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full button-hover"
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שלח פרטים"}
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">פרטיך התקבלו!</h3>
          <p className="text-muted-foreground">
            תודה שפנית אלינו. צוות המומחים שלנו יצור איתך קשר בהקדם.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
