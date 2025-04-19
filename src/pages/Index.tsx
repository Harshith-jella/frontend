
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/FileUploader';
import { CategorySelector } from '@/components/CategorySelector';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();
  
  const categories = [
    "Automobile",
    "Housing",
    "IT",
    "Healthcare",
    "Finance",
    "Other"
  ];

  const handleContinue = () => {
    if (!selectedCategory) {
      toast({
        variant: "destructive",
        title: "Category Required",
        description: "Please select a category for your agreement first."
      });
      return;
    }

    if (uploadedFiles.length === 0) {
      toast({
        variant: "destructive",
        title: "No Files Selected",
        description: "Please upload at least one PDF file to analyze."
      });
      return;
    }

    toast({
      title: "Analysis Started",
      description: "We're analyzing your agreement. This might take a moment."
    });
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen bg-background/5 backdrop-blur-sm p-6">
        <div className="max-w-3xl mx-auto space-y-12 pt-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-medium bg-gradient-to-r from-[#00ffd5] to-[#00ffd5]/80 bg-clip-text text-transparent">
              Welcome to the<br />AI Consent Simplifier!
            </h1>
            <p className="text-xl text-gray-300">
              We help you understand complex agreements<br />before you sign. Let's get started:
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Step 1: Category Selection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00ffd5]/10 text-[#00ffd5]">1</span>
                Select the category of your agreement:
              </h2>
              <CategorySelector
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Step 2: File Upload */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00ffd5]/10 text-[#00ffd5]">2</span>
                Upload the agreement file (PDF only)
              </h2>
              <FileUploader
                onFileUpload={setUploadedFiles}
                uploadedFiles={uploadedFiles}
              />
            </div>

            {/* Step 3: AI Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00ffd5]/10 text-[#00ffd5]">3</span>
                Our AI will:
              </h2>
              <div className="grid gap-4 text-lg text-gray-300 pl-11">
                <div>• Break it down into plain English</div>
                <div>• Highlight important risks</div>
                <div>• Clarify your responsibilities</div>
                <div>• Identify your rights</div>
              </div>

              {/* Continue Button */}
              <div className="pt-8 flex justify-end">
                <Button 
                  onClick={handleContinue}
                  className="w-40 h-14 text-lg bg-gradient-to-r from-[#00ffd5] to-[#0066ff] hover:opacity-90 transition-opacity"
                  disabled={!selectedCategory || uploadedFiles.length === 0}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
