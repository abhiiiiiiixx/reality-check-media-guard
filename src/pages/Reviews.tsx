
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

// Sample reviews
const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Forensics Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
    date: "2025-04-12",
    stars: 5,
    review: "This tool has become essential in my digital forensics work. The accuracy and detail in the reports help me quickly identify manipulated media. I've tested it against other solutions, and it consistently outperforms in both speed and precision."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "News Fact Checker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    date: "2025-04-05",
    stars: 5,
    review: "As a fact checker, I deal with potentially misleading images daily. This platform has saved me countless hours and improved our verification process. What impresses me most is how it can detect subtle manipulations that would be nearly impossible to spot with the naked eye."
  },
  {
    id: 3,
    name: "Jasmine Torres",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1289&auto=format&fit=crop",
    date: "2025-03-20",
    stars: 4,
    review: "With the rise of AI-generated content, this tool helps ensure we're only using authentic media in our campaigns. Easy to use and reliable results. The only reason I'm not giving 5 stars is that video processing can be a bit slow for larger files."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Legal Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop",
    date: "2025-03-15",
    stars: 5,
    review: "The detailed reports this platform provides have been invaluable as evidence in cases involving digital media manipulation. Highly recommended for any legal professional dealing with digital evidence."
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Online Safety Educator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
    date: "2025-03-08",
    stars: 5,
    review: "I use this tool in my workshops to demonstrate how to identify AI-generated content. It's been a game-changer for teaching digital literacy. The visual explanations of why something was flagged as fake are particularly helpful for educational purposes."
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Private Investigator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
    date: "2025-02-28",
    stars: 4,
    review: "This tool has helped me verify evidence in several cases. It's quite accurate for images, though I've found that heavily compressed videos can sometimes yield ambiguous results. Still, it's become an essential part of my verification toolkit."
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-gray-600">
              See what our users are saying about DeepFake Detector
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-deepblue">4.8</div>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-1">Based on 156 reviews</div>
              </div>
              
              <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
              
              <div className="space-y-1 w-full max-w-xs">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const percentage = rating === 5 ? 85 : 
                                    rating === 4 ? 10 : 
                                    rating === 3 ? 3 : 
                                    rating === 2 ? 1 : 1;
                  return (
                    <div key={rating} className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-teal-500" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {reviewsData.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-deepblue">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600">{review.review}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
