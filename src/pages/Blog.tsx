
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

// Sample blog posts with more content
const blogPosts = [
  {
    id: 1,
    title: 'איך AI חוסך זמן לעסקים קטנים',
    excerpt: 'גלה איך טכנולוגיות AI מתקדמות יכולות לחסוך עשרות שעות עבודה בחודש ולשפר את היעילות התפעולית.',
    image: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?q=80&w=600&auto=format&fit=crop',
    slug: 'how-ai-saves-time',
    date: '15 במאי, 2023',
    category: 'אוטומציה',
  },
  {
    id: 2,
    title: '5 דרכים להשתמש בסוכן AI לשיפור העסק',
    excerpt: 'סקירה של חמש דרכים מעשיות בהן עסקים מצליחים מיישמים סוכני AI לשיפור תהליכים והגדלת רווחים.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    slug: '5-ways-to-use-ai-agents',
    date: '3 ביוני, 2023',
    category: 'סוכני AI',
  },
  {
    id: 3,
    title: 'מדריך למתחילים – איך אוטומציה יכולה להועיל לך',
    excerpt: 'מדריך מעשי עבור בעלי עסקים שרק מתחילים את המסע שלהם עם אוטומציה חכמה ופתרונות AI.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop',
    slug: 'automation-beginners-guide',
    date: '20 ביוני, 2023',
    category: 'מדריכים',
  },
  {
    id: 4,
    title: 'איך להתחיל עם אוטומציה בעסק שלך',
    excerpt: 'צעדים פרקטיים להטמעת פתרונות אוטומציה בעסק קטן או בינוני, בלי להשקיע הון עתק.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
    slug: 'getting-started-with-automation',
    date: '5 ביולי, 2023',
    category: 'אוטומציה',
  },
  {
    id: 5,
    title: 'הדור הבא של שירות לקוחות: סוכני AI',
    excerpt: 'איך סוכני AI משנים את חוויית שירות הלקוחות ועוזרים לעסקים קטנים להתחרות עם תאגידים גדולים.',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=600&auto=format&fit=crop',
    slug: 'next-gen-customer-service',
    date: '18 ביולי, 2023',
    category: 'שירות לקוחות',
  },
  {
    id: 6,
    title: 'האם כל עסק צריך סוכן AI?',
    excerpt: 'בחינה מעמיקה של היתרונות והחסרונות של סוכני AI לעסקים בגדלים שונים ותחומים מגוונים.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
    slug: 'does-every-business-need-ai',
    date: '2 באוגוסט, 2023',
    category: 'סוכני AI',
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="mb-4">המאמרים שלנו</h1>
              <p className="text-xl text-muted-foreground">
                מאמרים, מדריכים וטיפים על אוטומציה, AI וייעול תהליכים לעסקים
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={100 + index * 100}>
                <Link to={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover-card h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="tag">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground flex-grow mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>לקריאה המלאה</span>
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
