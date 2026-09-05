import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-gray-800 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 mb-6 w-max shadow-sm">
            <ShieldCheck className="h-4 w-4 text-sia-green" />
            <span className="text-xs font-bold tracking-wide text-gray-700 dark:text-gray-300">Secure Corporate Banking</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-[1.15] tracking-tight mb-6">
            Empowering your financial future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sia-green to-sia-gold">precision.</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-8 max-w-lg leading-relaxed">
            Experience enterprise-grade security, intelligent insights, and seamless global transactions built for modern professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto h-12 px-8 rounded-md bg-sia-green text-white font-bold hover:bg-sia-green-dark transition-colors shadow-md flex items-center justify-center gap-2">
              Open an Account <ArrowRight className="h-4 w-4" />
            </button>
            <button className="w-full sm:w-auto h-12 px-8 rounded-md bg-white dark:bg-[#111] text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex items-center justify-center">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Realistic Visual */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <div className="relative w-full max-w-[600px] aspect-video lg:aspect-square flex items-center justify-center">
            {/* The mix-blend ensures the pure white background of the image vanishes in light mode and becomes transparent against the dark background in dark mode, or we can use a standard rounded image to be safe. Since it's isolated on white, mix-blend-multiply in light mode and standard rendering in dark mode is best, or just render it cleanly. */}
            <div className="relative w-[80%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
               <Image 
                src="/premium_card.jpg" 
                alt="Premium Banking Card" 
                fill
                className="object-cover"
                priority
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
