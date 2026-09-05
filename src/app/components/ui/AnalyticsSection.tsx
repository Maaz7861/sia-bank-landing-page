"use client";

import { useEffect, useState, useRef } from "react";
import { BarChart3, PieChart, Activity, ChevronRight } from "lucide-react";

export default function AnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => setIsVisible(true), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section ref={sectionRef} id="analytics-section" className="w-full py-24 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 mb-6 w-max shadow-sm">
              <Activity className="h-4 w-4 text-sia-green" />
              <span className="text-xs font-bold tracking-wide text-gray-700 dark:text-gray-300 uppercase">Real-Time Insights</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Track your wealth <br/> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sia-green to-sia-gold">intelligent analytics.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed">
              Our advanced mobile application gives you a crystal-clear view of your FD growth, RD maturity, and daily collection portfolios. Make informed decisions instantly.
            </p>

            <ul className="space-y-4 mb-10">
              {["Predictive AI-driven wealth forecasting", "Interactive FD & RD maturity calculators", "Real-time Daily Collection (Pigmy) tracking"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300">
                  <div className="h-6 w-6 rounded-full bg-sia-green/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="h-3 w-3 text-sia-green" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="h-12 px-8 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-bold hover:shadow-xl hover:shadow-gray-300 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
              Download the SIA App
            </button>
          </div>

          {/* Right Interactive Chart Visual */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl relative group/card">
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Portfolio Growth</h3>
                  <p className="text-xs text-gray-500">SIA Dhan Samriddhi (FD)</p>
                </div>
                <div className="flex gap-2 bg-gray-200 dark:bg-[#222] p-1 rounded-full">
                  <button 
                    onClick={() => setChartType("bar")}
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${chartType === "bar" ? "bg-white dark:bg-[#333] shadow-md scale-105" : "hover:bg-white/50 dark:hover:bg-[#333]/50"}`}
                  >
                    <BarChart3 className={`h-4 w-4 ${chartType === "bar" ? "text-sia-green" : "text-gray-400"}`} />
                  </button>
                  <button 
                    onClick={() => setChartType("pie")}
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${chartType === "pie" ? "bg-white dark:bg-[#333] shadow-md scale-105" : "hover:bg-white/50 dark:hover:bg-[#333]/50"}`}
                  >
                    <PieChart className={`h-4 w-4 ${chartType === "pie" ? "text-sia-gold" : "text-gray-400"}`} />
                  </button>
                </div>
              </div>

              {/* Dynamic Chart Area */}
              <div className="h-56 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2 relative">
                
                {/* Bar Chart View */}
                <div className={`absolute inset-0 flex items-end justify-between gap-3 transition-opacity duration-500 ${chartType === "bar" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
                  {[
                    { height: "30%", value: "Year 1" },
                    { height: "45%", value: "Year 2" },
                    { height: "65%", value: "Year 3" },
                    { height: "85%", value: "Year 4" },
                    { height: "100%", value: "Year 5" }
                  ].map((bar, idx) => (
                    <div key={idx} className="flex flex-col items-center w-full gap-2 group cursor-pointer h-full justify-end">
                      <div className="w-10 sm:w-14 relative flex justify-center h-full items-end">
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap z-20 shadow-lg">
                          +25% Return
                        </div>
                        
                        <div 
                          className="w-full bg-gradient-to-t from-sia-green to-emerald-400 dark:to-emerald-300 rounded-t-lg transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:from-sia-gold group-hover:to-amber-300 shadow-lg shadow-sia-green/20"
                          style={{ 
                            height: isVisible && chartType === "bar" ? bar.height : "0%",
                            transitionDelay: isVisible && chartType === "bar" ? `${idx * 150}ms` : "0ms"
                          }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">{bar.value}</span>
                    </div>
                  ))}
                </div>

                {/* Pie/Donut Chart View */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${chartType === "pie" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
                  <div className="relative h-48 w-48 rounded-full flex items-center justify-center shadow-2xl group cursor-pointer hover:scale-105 transition-transform duration-500"
                       style={{ 
                         background: isVisible && chartType === "pie" ? "conic-gradient(#10B981 0% 65%, #F59E0B 65% 85%, #E5E7EB 85% 100%)" : "conic-gradient(#E5E7EB 0% 100%)",
                         transition: "background 1s ease-out"
                       }}>
                    <div className="absolute inset-0 rounded-full border-4 border-white dark:border-[#111]"></div>
                    {/* Donut Hole */}
                    <div className="h-32 w-32 bg-gray-50 dark:bg-[#111] rounded-full shadow-inner flex flex-col items-center justify-center relative z-10">
                      <span className="text-2xl font-black text-sia-green">65%</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Principal</span>
                    </div>
                    {/* Tooltips */}
                    <div className="absolute -right-4 top-4 bg-white dark:bg-[#222] px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4">
                      <p className="text-[10px] font-bold text-sia-gold">20% Interest</p>
                    </div>
                    <div className="absolute -left-8 bottom-4 bg-white dark:bg-[#222] px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4">
                      <p className="text-[10px] font-bold text-sia-green">65% Principal</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex justify-between items-center bg-white dark:bg-[#222] p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Expected ROI (15 Lakhs)</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white">₹3,75,000</p>
                </div>
                <div className="h-10 px-4 rounded-lg bg-sia-green/10 text-sia-green font-bold text-sm flex items-center justify-center animate-pulse">
                  +13% Bonus
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
