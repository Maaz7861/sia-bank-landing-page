import { Smartphone, Landmark, PiggyBank, Calculator, CreditCard, ShieldCheck } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: <Landmark className="h-7 w-7" />, title: "Open Account", subtitle: "In just 3 minutes" },
    { icon: <CreditCard className="h-7 w-7" />, title: "Apply for Card", subtitle: "Instant approval" },
    { icon: <PiggyBank className="h-7 w-7" />, title: "Fixed Deposits", subtitle: "Up to 7.5% p.a." },
    { icon: <Calculator className="h-7 w-7" />, title: "Loan EMI", subtitle: "Calculate instantly" },
    { icon: <Smartphone className="h-7 w-7" />, title: "Mobile Banking", subtitle: "Download App" },
    { icon: <ShieldCheck className="h-7 w-7" />, title: "Buy Insurance", subtitle: "Secure your future" },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800 pb-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Floating Grid pulled slightly up into the Hero section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 -mt-8">
          {actions.map((action, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-[#111] p-6 rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-sia-green dark:hover:border-sia-green hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-gray-50 dark:bg-[#222] flex items-center justify-center text-sia-green dark:text-sia-gold group-hover:bg-sia-green group-hover:text-white transition-colors duration-300 mb-4 shadow-inner">
                {action.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{action.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{action.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
