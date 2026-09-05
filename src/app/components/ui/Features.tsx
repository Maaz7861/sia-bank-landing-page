import { ShieldCheck, Globe, Zap, Landmark, LineChart, HeadphonesIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-sia-green" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption and multi-factor authentication keeping your assets completely secure."
    },
    {
      icon: <Globe className="h-6 w-6 text-sia-green" />,
      title: "Global Operations",
      description: "Seamlessly transact across 50+ countries with minimal forex markup and instant settlements."
    },
    {
      icon: <Zap className="h-6 w-6 text-sia-green" />,
      title: "Real-time Transfers",
      description: "Send and receive funds globally in seconds through our proprietary routing networks."
    },
    {
      icon: <Landmark className="h-6 w-6 text-sia-green" />,
      title: "Corporate Accounts",
      description: "Dedicated account management and custom limits tailored for enterprise businesses."
    },
    {
      icon: <LineChart className="h-6 w-6 text-sia-green" />,
      title: "Advanced Analytics",
      description: "Gain deep insights into your spending and cash flow with our intelligent dashboards."
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-sia-green" />,
      title: "24/7 Priority Support",
      description: "Access our elite support team anytime, anywhere, for immediate resolution."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Built for modern professionals
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Experience a banking platform engineered for speed, security, and absolute transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-[#111] p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-sia-green/10 flex items-center justify-center mb-6">
                 {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
