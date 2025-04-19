
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/FileUploader';
import { CategorySelector } from '@/components/CategorySelector';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    "Automobile",
    "Housing",
    "IT",
    "Industrial",
    "Healthcare",
    "Finance",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
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
            <h2 className="text-2xl font-semibold">
              1️⃣ Select the category of your agreement:
            </h2>
            <CategorySelector
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Step 2: File Upload */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              2️⃣ Upload the agreement file (PDF only)
            </h2>
            <FileUploader
              onFileUpload={setUploadedFiles}
              uploadedFiles={uploadedFiles}
            />
          </div>

          {/* Step 3: AI Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3️⃣ Our AI will:
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
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-lg font-medium text-primary">
          🔍 Everything you need to know before signing — simplified.
        </div>
      </div>
    </div>
  );
};

export default Index;
