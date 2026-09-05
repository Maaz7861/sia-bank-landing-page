import { ShieldCheck, TrendingUp, Landmark, Shield, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 dark:bg-[#050505] overflow-hidden">
      
      {/* Background gradients instead of problematic images */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sia-green/10 dark:bg-sia-green/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sia-gold/10 dark:bg-sia-gold/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Typography */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 mb-6 w-max shadow-sm hover:border-sia-green/50 transition-colors cursor-pointer group">
            <ShieldCheck className="h-4 w-4 text-sia-green group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-bold tracking-wide text-gray-700 dark:text-gray-300 uppercase">100% Secure Deposits</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sia-green to-sia-gold">Safe Future</span> with Modern Co-Operative Banking.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-8 max-w-lg leading-relaxed">
            SIA Secure United Urban Credit Co-Operative Society Ltd. delivers transparent, highly regulated, and immensely rewarding financial services for every citizen.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#deposits" className="relative overflow-hidden w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-sia-green to-sia-green-dark text-white font-bold hover:shadow-xl hover:shadow-sia-green/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
              <span className="relative z-10">Explore Our Plans</span>
              <TrendingUp className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-white dark:bg-[#111] text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-800 hover:border-sia-gold dark:hover:border-sia-gold hover:text-sia-gold dark:hover:text-sia-gold transition-colors flex items-center justify-center">
              Our Vision
            </a>
          </div>
        </div>

        {/* Right Hero Image with Floating Elements */}
        <div className="w-full lg:w-[40%] mt-16 lg:mt-0 relative flex justify-center lg:justify-end">

          {/* Floating icons — outside the image, around its edges */}
          <div className="absolute -top-4 left-4 h-14 w-14 bg-white dark:bg-[#111] rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 animate-bounce z-20" style={{animationDelay: "0ms", animationDuration: "3s"}}>
            <Shield className="h-6 w-6 text-sia-green" />
          </div>
          <div className="absolute bottom-8 -left-2 lg:left-0 h-14 w-14 bg-white dark:bg-[#111] rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 animate-bounce z-20" style={{animationDelay: "600ms", animationDuration: "3s"}}>
            <TrendingUp className="h-6 w-6 text-sia-gold" />
          </div>
          <div className="absolute top-1/3 -right-2 lg:right-0 h-14 w-14 bg-white dark:bg-[#111] rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 animate-bounce z-20" style={{animationDelay: "1200ms", animationDuration: "3s"}}>
            <Leaf className="h-6 w-6 text-sia-green" />
          </div>

          {/* Image container — clean, no icons inside */}
          <div className="relative w-[90%] max-w-[480px] aspect-square flex items-center justify-center">
            {/* Glowing background behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-sia-green/20 to-sia-gold/20 rounded-full animate-pulse blur-3xl"></div>
            
            <div className="relative h-full w-full flex items-center justify-center animate-fade-in-up">
              <img 
                src="/hero_image.png" 
                alt="SIA Secure Hero" 
                className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
