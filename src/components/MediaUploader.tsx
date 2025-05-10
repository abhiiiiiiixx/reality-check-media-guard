
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Image, Film, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnalysisResults, { AnalysisResultData } from './AnalysisResults';

const MediaUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResultData | null>(null);
  
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleFileSelection = (selectedFile: File) => {
    // Reset previous analysis
    setAnalysisResults(null);
    
    // Check if file is an image or video
    if (selectedFile.type.startsWith('image/')) {
      setMediaType('image');
    } else if (selectedFile.type.startsWith('video/')) {
      setMediaType('video');
    } else {
      toast({
        title: "Invalid file format",
        description: "Please upload an image or video file.",
        variant: "destructive"
      });
      return;
    }

    setFile(selectedFile);
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };

  const removeFile = () => {
    setFile(null);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setMediaType(null);
    setAnalysisResults(null);
  };

  const analyzeMedia = () => {
    if (!file) return;
    
    setIsLoading(true);
    
    // Here we would normally send the file to our backend for analysis
    // But for now we'll simulate a delay and then return mock results
    setTimeout(() => {
      const isFake = Math.random() > 0.5; // Randomly determine if fake for demo
      const realScore = isFake ? Math.floor(Math.random() * 40) : 60 + Math.floor(Math.random() * 40);
      const fakeScore = 100 - realScore;
      const confidenceScore = 70 + Math.floor(Math.random() * 25);
      
      let verdict: 'real' | 'fake' | 'uncertain';
      if (realScore > 70) verdict = 'real';
      else if (fakeScore > 70) verdict = 'fake';
      else verdict = 'uncertain';
      
      // Generate appropriate detected features based on verdict
      let detectedFeatures: string[] = [];
      if (verdict === 'fake') {
        detectedFeatures = [
          'Inconsistent lighting patterns',
          'Unnatural facial features',
          'Digital artifacts in detailed areas',
          mediaType === 'image' ? 'Unusual background blurring' : 'Temporal inconsistencies in motion'
        ];
      } else if (verdict === 'real') {
        detectedFeatures = [
          'Natural texture patterns',
          'Consistent lighting',
          'Expected noise distribution',
          mediaType === 'image' ? 'Authentic depth information' : 'Natural motion dynamics'
        ];
      } else {
        detectedFeatures = [
          'Mixed signals in authenticity metrics',
          'Some unusual patterns detected',
          'Cannot determine with high confidence'
        ];
      }
      
      // Create result data
      const resultData: AnalysisResultData = {
        realProbability: realScore,
        fakeProbability: fakeScore,
        confidence: confidenceScore,
        verdict,
        detectedFeatures
      };
      
      setAnalysisResults(resultData);
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: `We've analyzed your ${mediaType} and determined results.`,
        variant: verdict === 'fake' ? "destructive" : verdict === 'real' ? "default" : "secondary",
      });
      
      console.log(`Analysis complete for ${file.name}`);
    }, 3000);
  };

  return (
    <>
      <Card className="p-6 shadow-md">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-deepblue mb-2">Upload Media for Analysis</h3>
          <p className="text-gray-600">
            Drag and drop your photo or video, or click to browse
          </p>
        </div>
        
        {!file ? (
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500 hover:bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <input 
              type="file" 
              id="file-input" 
              className="hidden" 
              accept="image/*,video/*" 
              onChange={handleFileInput} 
            />
            
            <div className="flex flex-col items-center gap-3">
              <Upload className="h-12 w-12 text-teal-500" />
              <div>
                <p className="font-medium text-deepblue">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">Supports images (JPG, PNG) and videos (MP4, MOV)</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6 relative">
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              onClick={removeFile}
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              {mediaType === 'image' && preview && (
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-full h-64 object-contain"
                />
              )}
              
              {mediaType === 'video' && preview && (
                <video 
                  src={preview} 
                  controls 
                  className="w-full h-64 object-contain"
                />
              )}
            </div>
            
            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {mediaType === 'image' ? (
                  <Image className="h-5 w-5 text-teal-500" />
                ) : (
                  <Film className="h-5 w-5 text-teal-500" />
                )}
                <span className="text-sm text-gray-600 truncate max-w-[200px]">
                  {file.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Button 
            className="w-full bg-teal-500 hover:bg-teal-600"
            disabled={!file || isLoading}
            onClick={analyzeMedia}
          >
            {isLoading ? 'Analyzing...' : 'Analyze Media'}
          </Button>
          
          <p className="text-xs text-center mt-4 text-gray-500">
            By uploading, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </Card>
      
      <AnalysisResults 
        isLoading={isLoading} 
        file={file} 
        results={analysisResults} 
      />
    </>
  );
};

export default MediaUploader;
