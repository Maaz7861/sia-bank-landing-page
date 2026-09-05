import { ArrowRight } from "lucide-react";

export default function VibrantCTA() {
  return (
    <section className="w-full bg-sia-green py-24 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/20 to-transparent"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center relative z-10">
        
        <div className="w-full lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
            Your Future in <br /> Banking Starts Here
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto lg:mx-0">
            Join thousands of satisfied customers who trust SIA Bank for secure, flexible, and smart banking solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="h-14 px-8 rounded-full bg-gray-900 text-white font-bold shadow-xl hover:bg-black transition-colors w-full sm:w-auto">
              Open an Account
            </button>
            <button className="h-14 px-8 rounded-full bg-white text-sia-green font-bold shadow-xl hover:bg-gray-50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* Abstract Dashboard representation instead of an image for a clean code block */}
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/20 h-24 rounded-xl"></div>
              <div className="bg-white/20 h-24 rounded-xl"></div>
            </div>
            <div className="bg-white/20 h-40 rounded-xl mb-4"></div>
            <div className="bg-white/20 h-16 rounded-xl w-2/3"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
