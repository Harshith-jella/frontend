
import React from 'react';
import { Button } from '@/components/ui/button';
import { LinkedIn, Github, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                Charan Reddy <span className="text-[#00ffd5]">Doolam</span>
              </h1>
              <div className="space-x-8">
                <Link to="/" className="text-[#00ffd5] hover:text-[#00ffd5]/80">Home</Link>
                <Link to="/about" className="text-white/90 hover:text-[#00ffd5]">About</Link>
                <Link to="/projects" className="text-white/90 hover:text-[#00ffd5]">Projects</Link>
                <Link to="/contact" className="text-white/90 hover:text-[#00ffd5]">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <p className="max-w-3xl text-lg text-white/80">
              Hi! I'm a software developer with diverse experience in drive impact via technical solutions. I am actively seeking internship opportunities to apply my skills in UI/UX design, web development, data analysis, and project management, while continuing to grow as a professional in the tech industry. Let's connect and explore ways to innovate together!
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="rounded-full p-3 bg-[#00ffd5]/10 hover:bg-[#00ffd5]/20 transition-colors">
                <LinkedIn className="w-6 h-6 text-[#00ffd5]" />
              </a>
              <a href="#" className="rounded-full p-3 bg-[#00ffd5]/10 hover:bg-[#00ffd5]/20 transition-colors">
                <Github className="w-6 h-6 text-[#00ffd5]" />
              </a>
              <a href="#" className="rounded-full p-3 bg-[#00ffd5]/10 hover:bg-[#00ffd5]/20 transition-colors">
                <Instagram className="w-6 h-6 text-[#00ffd5]" />
              </a>
              <a href="#" className="rounded-full p-3 bg-[#00ffd5]/10 hover:bg-[#00ffd5]/20 transition-colors">
                <Facebook className="w-6 h-6 text-[#00ffd5]" />
              </a>
              <a href="#" className="rounded-full p-3 bg-[#00ffd5]/10 hover:bg-[#00ffd5]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#00ffd5]" />
              </a>
            </div>

            <Button className="bg-[#00ffd5] text-black hover:bg-[#00ffd5]/90 px-8 py-6 text-lg rounded-full">
              Hire Me
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
