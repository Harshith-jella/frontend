
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
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI Consent Simplifier
          </h1>
          <p className="text-muted-foreground">
            Understand complex agreements before you sign
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
              <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
              Select Agreement Category
            </h2>
            <CategorySelector 
              categories={categories}
              onSelectCategory={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
              <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
              Upload Agreement (PDF only)
            </h2>
            <FileUploader 
              onFileUpload={handleFileUpload} 
              uploadedFiles={uploadedFiles}
            />
          </div>

          {(!selectedCategory || uploadedFiles.length === 0) && (
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
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
            className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 transition-opacity"
          >
            <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm mr-2">3</span>
            {isAnalyzing ? 'Analyzing...' : 'Analyze Agreement'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
