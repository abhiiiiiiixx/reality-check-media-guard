
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Check, AlertTriangle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface AnalysisResultData {
  realProbability: number;
  fakeProbability: number;
  confidence: number;
  verdict: 'real' | 'fake' | 'uncertain';
  detectedFeatures: string[];
}

interface AnalysisResultsProps {
  isLoading: boolean;
  file: File | null;
  results: AnalysisResultData | null;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ isLoading, file, results }) => {
  if (!file) return null;
  
  if (isLoading) {
    return (
      <Card className="p-6 mt-6 shadow-md">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-deepblue">Analyzing your media...</h3>
          <p className="text-gray-600 text-sm mt-2">This may take a few moments</p>
        </div>
        
        <div className="space-y-2">
          <Progress value={45} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Processing</span>
            <span>Please wait</span>
          </div>
        </div>
      </Card>
    );
  }
  
  if (!results) return null;
  
  const { realProbability, fakeProbability, confidence, verdict, detectedFeatures } = results;
  
  const getVerdictDisplay = () => {
    switch (verdict) {
      case 'real':
        return {
          icon: <Check className="h-8 w-8 text-green-500" />,
          title: 'Likely Authentic',
          color: 'text-green-700',
          bgColor: 'bg-green-50',
          border: 'border-green-200'
        };
      case 'fake':
        return {
          icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
          title: 'Likely AI-Generated',
          color: 'text-red-700',
          bgColor: 'bg-red-50',
          border: 'border-red-200'
        };
      default:
        return {
          icon: <Info className="h-8 w-8 text-amber-500" />,
          title: 'Uncertain',
          color: 'text-amber-700',
          bgColor: 'bg-amber-50',
          border: 'border-amber-200'
        };
    }
  };
  
  const verdictDisplay = getVerdictDisplay();
  
  return (
    <Card className="p-6 mt-6 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        {verdictDisplay.icon}
        <div>
          <h3 className={`text-xl font-bold ${verdictDisplay.color}`}>{verdictDisplay.title}</h3>
          <p className="text-gray-600 text-sm">
            {confidence}% confidence in this assessment
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-deepblue">Authenticity Score</span>
            <span className="font-medium text-green-600">{realProbability}%</span>
          </div>
          <Progress value={realProbability} className="h-2 bg-gray-200" />
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-deepblue">AI-Generated Score</span>
            <span className="font-medium text-red-600">{fakeProbability}%</span>
          </div>
          <Progress value={fakeProbability} className="h-2 bg-gray-200" />
        </div>
      </div>
      
      {detectedFeatures.length > 0 && (
        <div className={`mt-6 p-4 rounded-md ${verdictDisplay.bgColor} ${verdictDisplay.border}`}>
          <h4 className={`font-medium mb-2 ${verdictDisplay.color}`}>Detected Features:</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            {detectedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default AnalysisResults;
