
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Forensics Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
    stars: 5,
    testimonial: "This tool has become essential in my digital forensics work. The accuracy and detail in the reports help me quickly identify manipulated media."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "News Fact Checker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    stars: 5,
    testimonial: "As a fact checker, I deal with potentially misleading images daily. This platform has saved me countless hours and improved our verification process."
  },
  {
    id: 3,
    name: "Jasmine Torres",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1289&auto=format&fit=crop",
    stars: 4,
    testimonial: "With the rise of AI-generated content, this tool helps ensure we're only using authentic media in our campaigns. Easy to use and reliable results."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Legal Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop",
    stars: 5,
    testimonial: "The detailed reports this platform provides have been invaluable as evidence in cases involving digital media manipulation. Highly recommended."
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-gray-600">
            See what experts and professionals are saying about our deepfake detection technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`p-6 transition-all ${
                activeTestimonial === index ? 'border-teal-500 shadow-lg' : 'hover:shadow-md'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-deepblue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
