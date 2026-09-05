"use client";

import {
  Smartphone,
  Globe,
  CreditCard,
  Landmark,
  PiggyBank,
  ArrowLeftRight,
  ShieldCheck,
  Banknote,
  Users,
  QrCode,
  Receipt,
  Lock,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const services = [
  {
    icon: Globe,
    en: "Net Banking",
    hi: "नेट बैंकिंग",
    descEn: "Manage accounts, transfer funds & pay bills anytime from your browser.",
    descHi: "कभी भी ब्राउज़र से खाते प्रबंधित करें, फंड ट्रांसफर करें और बिल भुगतान करें।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Smartphone,
    en: "Mobile Banking",
    hi: "मोबाइल बैंकिंग",
    descEn: "Full-featured banking on your phone — 24/7, secure and instant.",
    descHi: "आपके फोन पर पूर्ण बैंकिंग — 24/7, सुरक्षित और त्वरित।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: QrCode,
    en: "UPI Payments",
    hi: "यूपीआई भुगतान",
    descEn: "Instant UPI transfers via SIA Pay. Zero fees, real-time settlement.",
    descHi: "SIA Pay के जरिए तुरंत UPI ट्रांसफर। शून्य शुल्क, रियल-टाइम सेटलमेंट।",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
  },
  {
    icon: ArrowLeftRight,
    en: "NEFT / RTGS / IMPS",
    hi: "NEFT / RTGS / IMPS",
    descEn: "Fast and secure inter-bank transfers across India, all day long.",
    descHi: "पूरे भारत में तेज़ और सुरक्षित इंटर-बैंक ट्रांसफर, पूरे दिन।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: CreditCard,
    en: "Debit / ATM Card",
    hi: "डेबिट / ATM कार्ड",
    descEn: "Contactless RuPay debit card with nationwide ATM access.",
    descHi: "रुपे डेबिट कार्ड के साथ देशव्यापी ATM पहुंच।",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
  },
  {
    icon: PiggyBank,
    en: "Fixed & Recurring Deposit",
    hi: "FD और RD",
    descEn: "Grow wealth at up to 11.50% p.a. with flexible FD & RD plans.",
    descHi: "लचीली FD और RD योजनाओं के साथ 11.50% प्रति वर्ष तक धन बढ़ाएं।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Landmark,
    en: "Loan Services",
    hi: "ऋण सेवाएं",
    descEn: "Home, Gold, Business & Personal loans with minimal documentation.",
    descHi: "न्यूनतम दस्तावेज़ के साथ होम, गोल्ड, बिज़नेस और पर्सनल लोन।",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
  },
  {
    icon: Receipt,
    en: "Bill & Tax Payments",
    hi: "बिल और टैक्स भुगतान",
    descEn: "Pay electricity, water, GST, income tax & more in one place.",
    descHi: "बिजली, पानी, GST, इनकम टैक्स और बहुत कुछ एक ही जगह पर भुगतान करें।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Banknote,
    en: "Daily Collection (Pigmy)",
    hi: "दैनिक संग्रह (पिग्मी)",
    descEn: "Doorstep daily savings collection with discipline bonus up to 1%.",
    descHi: "1% तक डिसिप्लिन बोनस के साथ दरवाजे पर दैनिक बचत संग्रह।",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
  },
  {
    icon: Users,
    en: "Bachat Gat / SHG Banking",
    hi: "बचत गट / SHG बैंकिंग",
    descEn: "Dedicated group savings & loan products for women self-help groups.",
    descHi: "महिला स्व-सहायता समूहों के लिए समर्पित समूह बचत और ऋण उत्पाद।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Lock,
    en: "Safe Deposit Locker",
    hi: "सेफ डिपॉजिट लॉकर",
    descEn: "Store your valuables in highly secure, tamper-proof lockers.",
    descHi: "अपनी कीमती वस्तुओं को अत्यधिक सुरक्षित, छेड़छाड़-रोधी लॉकर में रखें।",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
  },
  {
    icon: ShieldCheck,
    en: "Insurance & Nomination",
    hi: "बीमा और नामांकन",
    descEn: "Deposit insurance up to ₹5 Lakhs under DICGC with easy nomination.",
    descHi: "आसान नामांकन के साथ DICGC के तहत ₹5 लाख तक की जमा बीमा।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/10",
  },
];

export default function OurServices() {
  const { t } = useLanguage();

  return (
    <section
      id="our-services"
      className="w-full py-24 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 mb-5 w-max mx-auto shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-400 uppercase">
              {t("Our Services", "हमारी सेवाएं")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-5">
            {t(
              "Banking Services Built for Every Indian",
              "हर भारतीय के लिए बैंकिंग सेवाएं"
            )}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t(
              "From daily transactions to long-term investments — SIA Secure offers a complete suite of modern cooperative banking services.",
              "दैनिक लेनदेन से लेकर दीर्घकालिक निवेश तक — SIA Secure आधुनिक सहकारी बैंकिंग सेवाओं का पूर्ण सूट प्रदान करता है।"
            )}
          </p>
        </div>

        {/* Services Horizontal Scroll */}
        <div className="relative">
          {/* Fade edges for scroll hint */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10"></div>

          <div className="flex gap-4 overflow-x-auto py-4 px-6 scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-emerald-500 [&::-webkit-scrollbar-thumb]:rounded-full">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group flex-none w-[220px] sm:w-[240px] bg-gray-50 dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl ${service.hoverShadow} ${service.hoverBorder} dark:${service.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              >
                {/* Hover glow layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`h-12 w-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors duration-300 leading-snug">
                    {t(service.en, service.hi)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t(service.descEn, service.descHi)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
