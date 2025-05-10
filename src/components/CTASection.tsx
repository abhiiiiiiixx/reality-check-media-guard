
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Verify Your Media?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Start using our advanced AI deepfake detection technology today and gain confidence in the authenticity of your media.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg" className="bg-white text-deepblue hover:bg-gray-100">
              Create Free Account
            </Button>
          </Link>
          <Link to="/upload">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Try Without Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
