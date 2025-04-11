
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've tried many supplements before but TruRootX's Energy Boost Strips have been a game-changer for my afternoon slumps. They work within minutes!",
    author: "Sarah L.",
    role: "Marketing Executive",
    image: "https://placehold.co/300x300/F1F0FB/8E9196?text=Sarah+L"
  },
  {
    id: 2,
    text: "The Sleep Well Gummies have transformed my sleep quality. I fall asleep faster and wake up feeling truly refreshed. Plus, they actually taste good!",
    author: "Michael T.",
    role: "Software Developer",
    image: "https://placehold.co/300x300/F1F0FB/8E9196?text=Michael+T"
  },
  {
    id: 3,
    text: "As someone who values clean ingredients, I appreciate TruRootX's commitment to transparency. Their Immunity Support Gummies have kept me healthy through two cold seasons.",
    author: "Jamie K.",
    role: "Fitness Instructor",
    image: "https://placehold.co/300x300/F1F0FB/8E9196?text=Jamie+K"
  },
  {
    id: 4,
    text: "The Calm & Focus Strips help me stay centered and productive during hectic work days without the jitters I get from coffee. They're now an essential part of my daily routine.",
    author: "Alex R.",
    role: "Art Director",
    image: "https://placehold.co/300x300/F1F0FB/8E9196?text=Alex+R"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real results from real people who have made TruRootX part of their wellness journey.
          </p>
        </div>
        
        <div className="mt-12 relative">
          {/* Desktop Carousel */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <div 
                  key={testimonials[index].id}
                  className={`bg-trurootx-gray-light rounded-2xl p-6 shadow-sm ${
                    offset === 1 ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <p className="italic mb-6">"{testimonials[index].text}"</p>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-trurootx-gray">
                        <img 
                          src={testimonials[index].image} 
                          alt={testimonials[index].author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">{testimonials[index].author}</h4>
                        <p className="text-xs text-muted-foreground">{testimonials[index].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="bg-trurootx-gray-light rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="italic mb-6">"{testimonials[currentIndex].text}"</p>
                </div>
                
                <div className="flex items-center mt-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-trurootx-gray">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonials[currentIndex].author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-input hover:bg-trurootx-green-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentIndex === index ? 'bg-primary' : 'bg-trurootx-gray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full border border-input hover:bg-trurootx-green-light transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
