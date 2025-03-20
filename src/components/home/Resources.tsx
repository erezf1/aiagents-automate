
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: 'איך AI חוסך זמן לעסקים קטנים',
    excerpt: 'גלה איך טכנולוגיות AI מתקדמות יכולות לחסוך עשרות שעות עבודה בחודש ולשפר את היעילות התפעולית.',
    image: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?q=80&w=400&h=250&auto=format&fit=crop',
    slug: 'how-ai-saves-time',
  },
  {
    id: 2,
    title: '5 דרכים להשתמש בסוכן AI לשיפור העסק',
    excerpt: 'סקירה של חמש דרכים מעשיות בהן עסקים מצליחים מיישמים סוכני AI לשיפור תהליכים והגדלת רווחים.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=250&auto=format&fit=crop',
    slug: '5-ways-to-use-ai-agents',
  },
  {
    id: 3,
    title: 'מדריך למתחילים – איך אוטומציה יכולה להועיל לך',
    excerpt: 'מדריך מעשי עבור בעלי עסקים שרק מתחילים את המסע שלהם עם אוטומציה חכמה ופתרונות AI.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=400&h=250&auto=format&fit=crop',
    slug: 'automation-beginners-guide',
  },
];

const Resources = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto">
        <FadeIn>
          <div className="section-heading">
            <h2>משאבים ולמידה נוספת</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              רוצים להבין יותר איך AI יכול לעזור לעסקים?
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 150}>
                <Link to={`/blog/${post.slug}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-card h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground flex-grow mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>לקריאה</span>
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={450}>
            <div className="text-center mt-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary font-medium hover:underline text-lg"
              >
                לכל המאמרים
                <ArrowLeft className="w-5 h-5 mr-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Resources;
