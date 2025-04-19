
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/FileUploader';
import { CategorySelector } from '@/components/CategorySelector';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Info } from 'lucide-react';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();
  
  const categories = [
    "Automobile",
    "Housing",
    "IT",
    "Industrial",
    "Healthcare",
    "Finance",
    "Other"
  ];

  const handleAnalyze = () => {
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
      <div className="min-h-screen bg-background/50 backdrop-blur-sm p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              👋 Welcome to the AI Consent Simplifier!
            </h1>
            <p className="text-lg text-muted-foreground">
              We help you understand complex agreements before you sign. Let's get started:
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Step 1: Category Selection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-primary">1️⃣</span> Select the category of your agreement:
              </h2>
              <CategorySelector
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Step 2: File Upload */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-primary">2️⃣</span> Upload the agreement file (PDF only)
              </h2>
              <FileUploader
                onFileUpload={setUploadedFiles}
                uploadedFiles={uploadedFiles}
              />
            </div>

            {/* Step 3: AI Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-primary">3️⃣</span> Our AI will:
              </h2>
              <div className="grid gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <span>✔️</span>
                  <span>Break it down into plain English</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Highlight important risks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📌</span>
                  <span>Clarify your responsibilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Identify your rights</span>
                </div>
              </div>

              {/* User Guidance Alert */}
              <Alert className="bg-secondary/50 border-primary/20">
                <Info className="h-5 w-5 text-primary" />
                <AlertDescription className="text-muted-foreground">
                  For best results, ensure your PDF is text-searchable and not a scanned image.
                </AlertDescription>
              </Alert>

              {/* Analyze Button */}
              <div className="pt-4">
                <Button 
                  onClick={handleAnalyze}
                  className="w-full py-6 text-lg"
                  disabled={!selectedCategory || uploadedFiles.length === 0}
                >
                  🔍 Analyze Agreement
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-lg font-medium text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Everything you need to know before signing — simplified.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
