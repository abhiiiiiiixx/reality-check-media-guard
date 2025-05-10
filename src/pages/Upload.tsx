
import { useState } from 'react';
import MediaUploader from '@/components/MediaUploader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Upload = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isAnalyzingUrl, setIsAnalyzingUrl] = useState(false);
  
  const handleUrlAnalysis = () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to analyze.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate URL
    try {
      new URL(url);
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL to an image or video.",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzingUrl(true);
    
    // Here we would send the URL to our backend API
    // For now, simulate a response
    setTimeout(() => {
      setIsAnalyzingUrl(false);
      toast({
        title: "URL Analysis Not Available",
        description: "This feature will be available soon.",
        variant: "default"
      });
    }, 2000);
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-deepblue mb-8">Analyze Your Media</h1>
            
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upload">Upload Media</TabsTrigger>
                <TabsTrigger value="url">Enter URL</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <MediaUploader />
              </TabsContent>
              
              <TabsContent value="url">
                <Card className="p-6 shadow-md">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-deepblue mb-2">Analyze Media from URL</h3>
                    <p className="text-gray-600">
                      Enter the direct link to the image or video you want to analyze
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="https://example.com/image.jpg" 
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                      <button 
                        className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-r-md disabled:bg-teal-300"
                        onClick={handleUrlAnalysis}
                        disabled={isAnalyzingUrl}
                      >
                        {isAnalyzingUrl ? 'Analyzing...' : 'Analyze'}
                      </button>
                    </div>
                    
                    <p className="text-xs text-center text-gray-500">
                      By submitting a URL, you confirm you have the right to analyze this media.
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-medium text-deepblue mb-2">How our detection works</h3>
              <p className="text-sm text-gray-600">
                Our AI model analyzes subtle patterns and inconsistencies in the media that are invisible to the human eye. 
                It looks for artifacts typical of AI-generated content, such as unusual facial features, 
                unnatural lighting, and pixel-level abnormalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
