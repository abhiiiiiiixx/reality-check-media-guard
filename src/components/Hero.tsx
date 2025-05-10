
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="gradient-bg hero-pattern pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Detect AI-Generated <span className="text-teal-400">Media</span> with Confidence
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Our advanced AI technology helps you identify deepfakes and AI-generated photos and videos 
              with industry-leading accuracy. Stay protected in the era of synthetic media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/upload">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Analyze Media Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-slideUp">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop" 
                    alt="Real person" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-1 text-sm font-medium">
                    Real
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop" 
                    alt="AI generated person" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-center py-1 text-sm font-medium">
                    AI Generated
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-green-400 to-green-500"></div>
                </div>
                <div className="flex justify-between text-white text-sm">
                  <span>Analysis: 85% confidence</span>
                  <span>Real image</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
