
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLookerStudio = () => {
    window.open("https://lookerstudio.google.com/reporting/04b019ab-859f-4c1b-bc34-9baaf263450c", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Trusted Data Solutions Partner</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Unlock Your Data's
            <span className="block text-blue-400">True Potential</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We don't just extract and visualize data—we grow with you. From real-time integrations to decision-ready data, 
            <span className="text-blue-400 font-semibold"> flexibility is our core advantage.</span>
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <BarChart3 className="w-4 h-4 text-green-400" />
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <Target className="w-4 h-4 text-purple-400" />
              <span>Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Competitive Costs</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={openLookerStudio}
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 bg-white/5 px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
