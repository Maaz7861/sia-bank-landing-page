import { Check } from "lucide-react";

export default function PricingTable() {
  return (
    <section className="w-full py-32 bg-gray-50 dark:bg-[#050505]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Choose the Plan That Suits You Best
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No hidden fees. Transparent pricing designed for your financial success.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic</h3>
              <p className="text-4xl font-black text-gray-900 dark:text-white mb-6">Free</p>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-sia-green p-8 rounded-3xl shadow-2xl flex flex-col justify-between transform md:-translate-y-4 relative">
            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <p className="text-4xl font-black text-white mb-6">$5.00 <span className="text-sm font-normal text-white/70">/month</span></p>
            </div>
            <button className="w-full py-3 rounded-full bg-white text-sia-green font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Get Premium
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Elite</h3>
              <p className="text-4xl font-black text-white mb-6">$15.00 <span className="text-sm font-normal text-white/50">/month</span></p>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-gray-700 text-white font-bold hover:bg-gray-800 transition-colors">
              Get Elite
            </button>
          </div>

        </div>

        {/* Detailed Table (Simplified for brevity) */}
        <div className="hidden md:block w-full overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-800">
                <th className="py-6 font-bold text-gray-900 dark:text-white">Features</th>
                <th className="py-6 font-bold text-gray-900 dark:text-white text-center">Basic</th>
                <th className="py-6 font-bold text-gray-900 dark:text-white text-center">Premium</th>
                <th className="py-6 font-bold text-gray-900 dark:text-white text-center">Elite</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-6 font-medium">Accounts Managed</td>
                <td className="py-6 text-center">1 Account</td>
                <td className="py-6 text-center">Up to 3 Accounts</td>
                <td className="py-6 text-center">Unlimited Accounts</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-6 font-medium">Transaction Limits</td>
                <td className="py-6 text-center">Standard ($1k/mo)</td>
                <td className="py-6 text-center">Higher Limits ($10k/mo)</td>
                <td className="py-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-6 font-medium">Support</td>
                <td className="py-6 text-center">Community Support</td>
                <td className="py-6 text-center">Priority Email</td>
                <td className="py-6 text-center">Dedicated Manager</td>
              </tr>
              <tr>
                <td className="py-6 font-medium">International Transfers</td>
                <td className="py-6 text-center">Standard Fees</td>
                <td className="py-6 text-center">Reduced Fees</td>
                <td className="py-6 text-center">Zero Fees</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
