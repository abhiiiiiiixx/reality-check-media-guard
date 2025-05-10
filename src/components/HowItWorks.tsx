
import { Upload, Search, AlertCircle } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: "Upload Media",
    description:
      "Upload any photo or video that you want to analyze. We support most common formats.",
    iconBg: "bg-teal-500",
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "AI Analysis",
    description:
      "Our advanced AI models examine the media for signs of manipulation or generation.",
    iconBg: "bg-deepblue",
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-white" />,
    title: "Get Results",
    description:
      "Receive a detailed report showing whether the media is authentic or artificially generated.",
    iconBg: "bg-teal-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Our deepfake detection process is simple, fast, and highly accurate. See how it works in three easy steps.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* Line connecting the steps */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center">
              <div className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-deepblue mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
