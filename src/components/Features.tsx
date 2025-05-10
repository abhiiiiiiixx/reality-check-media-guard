
import { CheckCircle, Shield, Eye, Zap } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
    title: "High Accuracy",
    description:
      "Our advanced machine learning models provide industry-leading accuracy in detecting AI-generated media.",
  },
  {
    icon: <Shield className="h-8 w-8 text-teal-500" />,
    title: "Privacy First",
    description:
      "All uploads are processed securely and never shared. Your data is automatically deleted after analysis.",
  },
  {
    icon: <Eye className="h-8 w-8 text-teal-500" />,
    title: "Detailed Analysis",
    description:
      "Get comprehensive reports showing exactly why media was flagged as potentially fake or manipulated.",
  },
  {
    icon: <Zap className="h-8 w-8 text-teal-500" />,
    title: "Fast Processing",
    description:
      "Get results in seconds, not minutes. Our optimized algorithms work quickly without sacrificing quality.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
            Advanced DeepFake Detection
          </h2>
          <p className="text-lg text-gray-600">
            Our platform uses cutting-edge machine learning to analyze media and detect manipulations that 
            would be invisible to the human eye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-deepblue mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
