
import { Star } from 'lucide-react';
import { testimonials } from '@/assets/mockData';
import { Card } from './ui/Card';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  
  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto container-padding">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="section-title">Historias de Pacientes Satisfechos</h2>
          <p className="section-subtitle">
            Conoce las experiencias de quienes ya han encontrado su dentista ideal a través de nuestro servicio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const { elementRef, isIntersecting } = useIntersectionObserver({
              threshold: 0.2,
              rootMargin: "0px 0px -100px 0px"
            });
            
            return (
              <div
                key={testimonial.id}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-700",
                  "delay-" + (index * 100),
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <Card variant="testimonial" className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500">{testimonial.location}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="badge badge-secondary text-xs">{testimonial.treatment}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
