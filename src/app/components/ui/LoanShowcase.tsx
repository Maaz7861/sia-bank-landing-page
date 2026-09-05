"use client";

import { Landmark, Building2, Coins, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

export default function LoanShowcase() {
  const { t } = useLanguage();

  const loans = [
    {
      title: t("SIA Girvi Nidhi (Mortgage)", "एसआईए गिरवी निधि (मॉर्गेज)"),
      highlight: t("1 CR", "1 करोड़"),
      subHighlight: t("MAX LOAN", "अधिकतम ऋण"),
      desc: t("Flexible LTV up to 90% and tenure up to 60 months.", "90% तक एलटीवी और 60 महीने तक की अवधि के साथ।"),
      icon: Landmark
    },
    {
      title: t("SIA Gold Rahat", "एसआईए गोल्ड राहत"),
      highlight: t("50 LAKH", "50 लाख"),
      subHighlight: t("RELIEF", "राहत"),
      desc: t("Instant emergency loan with 1-3 days interest slabs.", "1-3 दिन के ब्याज स्लैब के साथ त्वरित आपातकालीन ऋण।"),
      icon: Coins
    },
    {
      title: t("SIA Vyapar Saathi", "एसआईए व्यापार साथी"),
      highlight: t("25 LAKH", "25 लाख"),
      subHighlight: t("BUSINESS", "व्यापार"),
      desc: t("Unsecured business loan with zero processing fees.", "शून्य प्रोसेसिंग फीस के साथ असुरक्षित व्यापार ऋण।"),
      icon: Building2
    },
    {
      title: t("SIA Mahila Samriddhi", "एसआईए महिला समृद्धि"),
      highlight: t("3X", "3X"),
      subHighlight: t("BACHAT GAT", "बचत गट"),
      desc: t("Empowering women with 3x multiplier loans.", "3 गुना ऋण के साथ महिलाओं को सशक्त बनाना।"),
      icon: Users
    }
  ];

  return (
    <section id="loans" className="relative w-full py-24 bg-gray-50 dark:bg-[#050505] overflow-hidden">
      
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sia-green/10 dark:bg-sia-green/5 rounded-full blur-[100px] opacity-70"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Sleek Loan Cards List */}
          <div className="w-full lg:w-1/2">
            
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
                {t("Loan Plans for Every Need", "हर जरूरत के लिए ऋण योजनाएं")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                {t("Transparent assessment, rapid processing, and preferential rates for our dedicated members.", "हमारे समर्पित सदस्यों के लिए पारदर्शी मूल्यांकन, त्वरित प्रसंस्करण और तरजीही दरें।")}
              </p>
            </div>

            <div className="space-y-4">
              {loans.map((loan, idx) => (
                <div 
                  id={idx === 3 ? "bachat-gat" : undefined} 
                  key={idx} 
                  className="group bg-white dark:bg-[#111] p-5 lg:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-sia-green/10 hover:-translate-y-1 hover:border-sia-green/50 dark:hover:border-sia-green/50 transition-all duration-300 cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-5">
                    {/* Icon Container */}
                    <div className="h-14 w-14 rounded-xl bg-gray-50 dark:bg-[#181818] group-hover:bg-sia-green/10 flex items-center justify-center shrink-0 transition-colors">
                      <loan.icon className="h-6 w-6 text-gray-400 group-hover:text-sia-green transition-colors" />
                    </div>
                    
                    {/* Text Details */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-sia-green transition-colors mb-1">{loan.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{loan.desc}</p>
                    </div>
                  </div>

                  {/* Right Action / Highlight */}
                  <div className="hidden sm:flex flex-col items-end justify-center shrink-0">
                    <span className="text-xl font-black text-gray-900 dark:text-white group-hover:text-sia-green transition-colors">{loan.highlight}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{loan.subHighlight}</span>
                  </div>
                  
                  {/* Mobile Arrow */}
                  <div className="sm:hidden text-gray-400 group-hover:text-sia-green transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 w-full sm:w-auto h-12 px-8 rounded-xl bg-gradient-to-r from-sia-green to-sia-green-dark text-white font-bold hover:shadow-lg hover:shadow-sia-green/30 transition-all whitespace-nowrap">
              {t("Apply for a Loan Today", "आज ही ऋण के लिए आवेदन करें")}
            </button>
            
          </div>

          {/* Right Column: Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Decorative Circle Behind Image */}
              <div className="absolute inset-4 bg-gradient-to-bl from-sia-green/10 to-transparent rounded-full border border-gray-100 dark:border-gray-800/50 scale-90 blur-xl"></div>
              
              {/* User Image - Rendering cleanly as requested */}
              <img 
                src="/ChatGPT Image Sep 5, 2026, 06_34_13 PM.png" 
                alt="Loan Illustration" 
                className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
