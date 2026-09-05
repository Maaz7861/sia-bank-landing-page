import { TrendingUp, Award, ShieldCheck } from "lucide-react";

export default function InvestmentPlans() {
  const plans = [
    {
      title: "SIA Dhan Samriddhi (FD)",
      rate: "25%",
      label: "(P.A.) Incentive",
      description: "Get massive returns up to 13.00% extra discipline bonus on 49 months lock-in.",
      icon: <TrendingUp className="h-6 w-6 text-sia-green" />,
      features: ["Up to 11.50% base interest", "Quarterly withdrawals allowed", "Pre-mature withdrawal available"]
    },
    {
      title: "SIA Dhanpravah (RD)",
      rate: "16%",
      label: "Locked (P.A.) Incentive",
      description: "Consistent monthly savings with unmatched discipline bonuses up to 3.00% extra.",
      icon: <Award className="h-6 w-6 text-sia-gold" />,
      features: ["High returns up to 16% for 84 months", "Partial deposit accepted", "Flexible terms"]
    },
    {
      title: "SIA Jeevan Nidhi (Pension)",
      rate: "6%",
      label: "Locked (P.A.) Incentive",
      description: "Secure your golden years with stable, guaranteed monthly income.",
      icon: <ShieldCheck className="h-6 w-6 text-sia-green" />,
      features: ["Monthly withdrawals allowed", "Up to 6.00% yearly extra bonus", "Smart Portfolio tracking"]
    }
  ];

  return (
    <section className="w-full py-24 bg-white dark:bg-[#050505] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Grow your wealth securely
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our Fixed Deposit, Recurring Deposit, and Pension plans offer the highest incentives in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-sia-green/10 dark:hover:shadow-sia-green/20 hover:-translate-y-3 hover:border-sia-green/50 dark:hover:border-sia-green/50 transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sia-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-white dark:bg-[#222] shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 leading-none group-hover:from-sia-green group-hover:to-sia-green-dark transition-all duration-500">{plan.rate}</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase mt-1">{plan.label}</p>
                  </div>
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-sia-green transition-colors duration-300">{plan.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {plan.description}
                </p>
              </div>
              
              <div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-sia-gold"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full h-12 rounded-xl bg-white dark:bg-[#222] text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-700 hover:border-sia-green dark:hover:border-sia-green hover:text-sia-green transition-colors">
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
