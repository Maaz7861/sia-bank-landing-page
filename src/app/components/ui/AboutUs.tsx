"use client";
import { ShieldCheck, Target, Handshake } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-black tracking-widest text-sia-green uppercase mb-4">{t("KNOW ABOUT US", "हमारे बारे में जानें")}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
              {t("A Modern, Transparent & Fully Regulated Financial Institution.", "एक आधुनिक, पारदर्शी और पूरी तरह से विनियमित वित्तीय संस्थान।")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              {t("Our primary objective is to keep 100% of our members' and customers' deposits safe and provide them with superior corporate banking services. We work on a robust banking model to empower every section of society financially.", "हमारा प्राथमिक उद्देश्य हमारे सदस्यों और ग्राहकों की जमा राशि को 100% सुरक्षित रखना और उन्हें बेहतर कॉर्पोरेट बैंकिंग सेवाएं प्रदान करना है। हम समाज के हर वर्ग को आर्थिक रूप से सशक्त बनाने के लिए एक मजबूत बैंकिंग मॉडल पर काम करते हैं।")}
            </p>
            
            <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border-l-4 border-sia-green mb-8 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Handshake className="h-5 w-5 text-sia-green" /> {t("100% Secure Deposits", "100% सुरक्षित जमा")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("We prioritize modernized cooperative banking with 100% transparency, ensuring that every rupee you deposit is fully protected.", "हम 100% पारदर्शिता के साथ आधुनिक सहकारी बैंकिंग को प्राथमिकता देते हैं, यह सुनिश्चित करते हुए कि आपका जमा किया गया हर रुपया पूरी तरह से सुरक्षित है।")}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          
            {/* Vision Card */}
            <div className="bg-white dark:bg-[#111] p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-sia-green/20 hover:-translate-y-2 hover:border-sia-green/50 dark:hover:border-sia-green/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-sia-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex-1">
                <div className="h-16 w-16 rounded-2xl bg-sia-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Target className="h-8 w-8 text-sia-green" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-sia-green transition-colors duration-300">{t("Our Vision", "हमारा विज़न")}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <span className="font-bold text-gray-900 dark:text-gray-200">{t(`"Trust, Security, and Continuous Growth"`, `"भरोसा, सुरक्षा और निरंतर विकास"`)}</span> <br/><br/>
                  {t("We aim to build an unbreakable foundation of trust with our members, ensuring their wealth grows securely.", "हमारा उद्देश्य अपने सदस्यों के साथ विश्वास की एक अटूट नींव बनाना है, जिससे उनकी संपत्ति सुरक्षित रूप से बढ़े।")}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white dark:bg-[#111] p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-sia-green/20 hover:-translate-y-2 hover:border-sia-green/50 dark:hover:border-sia-green/50 transition-all duration-500 group relative overflow-hidden mt-0 md:mt-12 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-sia-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex-1">
                <div className="h-16 w-16 rounded-2xl bg-sia-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <ShieldCheck className="h-8 w-8 text-sia-green" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-sia-green transition-colors duration-300">{t("Our Mission", "हमारा लक्ष्य")}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <span className="font-bold text-gray-900 dark:text-gray-200">{t(`"100% Security and Transparent Banking"`, `"100% सुरक्षा और पारदर्शी बैंकिंग"`)}</span> <br/><br/>
                  {t("To provide unparalleled security and transparent financial growth for every individual and business.", "हर व्यक्ति और व्यवसाय के लिए अद्वितीय सुरक्षा और पारदर्शी वित्तीय विकास प्रदान करना।")}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
