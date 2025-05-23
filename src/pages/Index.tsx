
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ui/ChatButton";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        const isVisible = (
          elementTop < window.innerHeight - 100 && 
          elementBottom > 0
        );
        
        if (isVisible) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
      <ChatButton />
      <Toaster />
    </div>
  );
};

export default Index;
