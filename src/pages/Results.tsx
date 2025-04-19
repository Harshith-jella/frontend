
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { toast } from "sonner";
import {
  AlertTriangle,
  CheckCircle,
  Pin,
  Volume2,
  Languages,
  Shield,
  FileText,
  ArrowLeft,
  Zap,
  BarChart4,
  Info,
} from 'lucide-react';

// Mock data for demonstration
const mockResults = {
  documentName: "Rental_Agreement_2025.pdf",
  trustScore: 87,
  summary: "This is a standard residential lease agreement for a 12-month term. It contains some common clauses about tenant responsibilities and landlord rights, with a few concerning provisions regarding security deposit return timing and repair responsibility.",
  risks: [
    "Late payment fees are exceptionally high (10% daily).",
    "Tenant responsible for all repairs under $300 regardless of cause.",
    "Security deposit may be held for up to 60 days after move-out (longer than typical)."
  ],
  rights: [
    "Right to quiet enjoyment of the property.",
    "Landlord must provide 48 hours notice before entry.",
    "Tenant may terminate lease with 30 days notice if landlord fails to make essential repairs."
  ],
  responsibilities: [
    "Pay rent of $1,500 on the 1st of each month.",
    "Maintain property in clean condition.",
    "Obtain renter's insurance within 14 days of move-in.",
    "No pets without explicit written permission and pet deposit."
  ]
};

const Results = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [simplifiedView, setSimplifiedView] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [language, setLanguage] = useState("english");

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (!voiceEnabled) {
      // This would be where the actual text-to-speech implementation would go
      toast({
        title: "Voice Reading Enabled",
        description: "In a production environment, this would read the content aloud."
      });
    }
  };

  const toggleView = () => {
    setSimplifiedView(!simplifiedView);
  };

  const switchLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    // In a real implementation, this would trigger translation
  };

  const handleBackToHome = () => {
    // In a real application, we might want to confirm if user wants to leave the results
    // For now, just navigate back
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen bg-background/5 backdrop-blur-sm p-6">
        <div className="max-w-5xl mx-auto space-y-10 pt-12">
          {/* Header with Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-[#00ffd5] transition-colors">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Zap size={24} className="text-[#00ffd5]" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00ffd5] to-[#0066ff] bg-clip-text text-transparent">
                ConsentIQ
              </h1>
            </div>

            <div className="flex gap-3">
              {voiceEnabled ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleVoice} 
                  className="bg-[#00ffd5]/20 border-[#00ffd5]/50 text-[#00ffd5]"
                >
                  <Volume2 size={16} />
                  <span>Voice On</span>
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleVoice} 
                  className="bg-black/30 border-white/10 text-gray-300 hover:bg-[#00ffd5]/10 hover:text-[#00ffd5] hover:border-[#00ffd5]/30"
                >
                  <Volume2 size={16} />
                  <span>Voice Off</span>
                </Button>
              )}

              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => switchLanguage(language === "english" ? "spanish" : "english")}
                className="bg-black/30 border-white/10 text-gray-300 hover:bg-[#00ffd5]/10 hover:text-[#00ffd5] hover:border-[#00ffd5]/30"
              >
                <Languages size={16} />
                <span>{language === "english" ? "English" : "Spanish"}</span>
              </Button>
            </div>
          </div>

          {/* Document Info & Trust Score */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="md:col-span-3 border-0 backdrop-blur-sm bg-black/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Analysis Results</CardTitle>
                <CardDescription className="text-gray-300">
                  Document: <span className="font-medium text-[#00ffd5]">{mockResults.documentName}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {mockResults.summary}
                </p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 backdrop-blur-sm bg-black/30 flex flex-col items-center justify-center p-6 text-center">
              <Shield className="text-[#00ffd5] mb-3" size={32} />
              <h3 className="text-lg font-medium text-white mb-1">Trust Score</h3>
              <div className="relative h-32 w-32 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#00ffd5" 
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 45 * mockResults.trustScore / 100} ${2 * Math.PI * 45 * (1 - mockResults.trustScore / 100)}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    className="transform -rotate-90 origin-center"
                  />
                </svg>
                <span className="absolute text-4xl font-bold bg-gradient-to-r from-[#00ffd5] to-[#0066ff] bg-clip-text text-transparent">
                  {mockResults.trustScore}
                </span>
              </div>
              <p className="text-sm text-gray-300">
                Document verified via Masumi blockchain API
              </p>
            </Card>
          </div>

          {/* Display Options */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-gray-300">View Mode:</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleView}
                className={simplifiedView ? 
                  "bg-[#00ffd5]/20 border-[#00ffd5]/50 text-[#00ffd5]" : 
                  "bg-black/30 border-white/10 text-gray-300"}
              >
                Simplified
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleView}
                className={!simplifiedView ? 
                  "bg-[#00ffd5]/20 border-[#00ffd5]/50 text-[#00ffd5]" : 
                  "bg-black/30 border-white/10 text-gray-300"}
              >
                Detailed
              </Button>
            </div>
            
            <div>
              <Badge variant="outline" className="bg-black/30 border-white/10 text-gray-300">
                <Info size={14} className="mr-1" />
                AI Confidence: High
              </Badge>
            </div>
          </div>

          {/* Tabs for Different Results Sections */}
          <Tabs defaultValue="risks" className="w-full">
            <TabsList className="w-full bg-black/30 border border-white/10 p-1">
              <TabsTrigger 
                value="risks" 
                className="flex items-center gap-2 data-[state=active]:bg-[#00ffd5]/20 data-[state=active]:text-[#00ffd5]"
              >
                <AlertTriangle size={16} />
                Risks
              </TabsTrigger>
              <TabsTrigger 
                value="rights" 
                className="flex items-center gap-2 data-[state=active]:bg-[#00ffd5]/20 data-[state=active]:text-[#00ffd5]"
              >
                <CheckCircle size={16} />
                Rights
              </TabsTrigger>
              <TabsTrigger 
                value="responsibilities" 
                className="flex items-center gap-2 data-[state=active]:bg-[#00ffd5]/20 data-[state=active]:text-[#00ffd5]"
              >
                <Pin size={16} />
                Responsibilities
              </TabsTrigger>
              <TabsTrigger 
                value="full" 
                className="flex items-center gap-2 data-[state=active]:bg-[#00ffd5]/20 data-[state=active]:text-[#00ffd5]"
              >
                <FileText size={16} />
                Full Analysis
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="risks" className="mt-6">
              <Card className="border-0 backdrop-blur-sm bg-black/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <AlertTriangle className="text-red-400" size={20} />
                    Potential Risks
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    These clauses could put you at a disadvantage or carry unexpected obligations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 pt-2">
                    {mockResults.risks.map((risk, index) => (
                      <li key={index} className="flex gap-3 items-start backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-red-400/30 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <AlertTriangle className="text-red-400 mt-1" size={18} />
                        <div>
                          <p className="text-gray-100">{risk}</p>
                          {!simplifiedView && (
                            <p className="text-sm text-gray-400 mt-1">Additional context would appear here in detailed view...</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rights" className="mt-6">
              <Card className="border-0 backdrop-blur-sm bg-black/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    Your Rights
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    These clauses grant you specific rights and protections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 pt-2">
                    {mockResults.rights.map((right, index) => (
                      <li key={index} className="flex gap-3 items-start backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-green-400/30 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <CheckCircle className="text-green-400 mt-1" size={18} />
                        <div>
                          <p className="text-gray-100">{right}</p>
                          {!simplifiedView && (
                            <p className="text-sm text-gray-400 mt-1">Additional context would appear here in detailed view...</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="responsibilities" className="mt-6">
              <Card className="border-0 backdrop-blur-sm bg-black/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Pin className="text-blue-400" size={20} />
                    Your Responsibilities
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    These clauses outline what you are agreeing to do or provide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 pt-2">
                    {mockResults.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex gap-3 items-start backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-blue-400/30 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <Pin className="text-blue-400 mt-1" size={18} />
                        <div>
                          <p className="text-gray-100">{responsibility}</p>
                          {!simplifiedView && (
                            <p className="text-sm text-gray-400 mt-1">Additional context would appear here in detailed view...</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="full" className="mt-6">
              <Card className="border-0 backdrop-blur-sm bg-black/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <FileText className="text-[#00ffd5]" size={20} />
                    Full Document Analysis
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Complete breakdown of your document's key points
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8 pt-2">
                    <div>
                      <h3 className="text-lg font-medium flex items-center gap-2 mb-3 text-white">
                        <AlertTriangle className="text-red-400" size={18} />
                        Risks
                      </h3>
                      <ul className="space-y-3 pl-7">
                        {mockResults.risks.map((risk, index) => (
                          <li key={index} className="list-disc text-red-400">
                            <span className="text-gray-300">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium flex items-center gap-2 mb-3 text-white">
                        <CheckCircle className="text-green-400" size={18} />
                        Rights
                      </h3>
                      <ul className="space-y-3 pl-7">
                        {mockResults.rights.map((right, index) => (
                          <li key={index} className="list-disc text-green-400">
                            <span className="text-gray-300">{right}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium flex items-center gap-2 mb-3 text-white">
                        <Pin className="text-blue-400" size={18} />
                        Responsibilities
                      </h3>
                      <ul className="space-y-3 pl-7">
                        {mockResults.responsibilities.map((responsibility, index) => (
                          <li key={index} className="list-disc text-blue-400">
                            <span className="text-gray-300">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" className="bg-black/30 border-white/10 text-gray-300 hover:bg-[#00ffd5]/10 hover:text-[#00ffd5] hover:border-[#00ffd5]/30">
              <BarChart4 size={16} className="mr-2" />
              Export Report
            </Button>
            
            <div className="flex gap-3">
              <Link to="/">
                <Button variant="outline" className="bg-black/30 border-white/10 text-gray-300 hover:bg-[#00ffd5]/10 hover:text-[#00ffd5] hover:border-[#00ffd5]/30">
                  Upload New Document
                </Button>
              </Link>
              
              <Button 
                className="bg-gradient-to-r from-[#00ffd5] to-[#0066ff] hover:opacity-90 transition-opacity relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Human Review
                </span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-sm mt-12">
            <p>Powered by CrewAI, Masumi API, and OpenAI</p>
            <p className="mt-2">© 2025 ConsentIQ. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
