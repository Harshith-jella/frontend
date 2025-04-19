
import React, { useState } from 'react';
import { FileUploader } from '@/components/FileUploader';
import { CategorySelector } from '@/components/CategorySelector';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const categories = [
  'Automobile', 
  'Housing', 
  'IT', 
  'Industrial', 
  'Healthcare', 
  'Finance', 
  'Other'
];

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleAnalyze = () => {
    if (!selectedCategory || uploadedFiles.length === 0) {
      return;
    }
    setIsAnalyzing(true);
    // TODO: Implement AI analysis logic
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-2xl space-y-6 text-center">
        <h1 className="text-4xl font-bold text-primary">AI Consent Simplifier</h1>
        <p className="text-muted-foreground">Understand complex agreements before you sign</p>

        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">1️⃣ Select Agreement Category</h2>
          <CategorySelector 
            categories={categories}
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />

          <h2 className="text-2xl font-semibold my-4">2️⃣ Upload Agreement (PDF only)</h2>
          <FileUploader 
            onFileUpload={handleFileUpload} 
            uploadedFiles={uploadedFiles}
          />

          {(!selectedCategory || uploadedFiles.length === 0) && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Not Ready to Analyze</AlertTitle>
              <AlertDescription>
                Please select a category and upload at least one PDF file.
              </AlertDescription>
            </Alert>
          )}

          <Button 
            onClick={handleAnalyze} 
            disabled={!selectedCategory || uploadedFiles.length === 0 || isAnalyzing}
            className="mt-4 w-full"
          >
            {isAnalyzing ? 'Analyzing...' : '3️⃣ Analyze Agreement'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
