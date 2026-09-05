import { ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="w-full py-20 bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Accounts designed for your goals
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Whether you are an individual saver or an enterprise, we have a customized banking solution for you.
            </p>
          </div>
          <button className="hidden md:flex text-sia-green font-bold items-center gap-1 hover:gap-2 transition-all">
            View All Accounts <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-sia-green dark:hover:border-sia-green transition-colors cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sia-green transition-colors">Premium Savings</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 h-10">High-yield interest rates tailored for significant liquid reserves.</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Interest Rate</p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">5.25% <span className="text-sm font-normal text-gray-500">APY</span></p>
              </div>
              <div className="h-10 w-10 rounded-full bg-white dark:bg-[#222] flex items-center justify-center group-hover:bg-sia-green group-hover:text-white transition-colors shadow-sm">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-sia-green dark:hover:border-sia-green transition-colors cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sia-green transition-colors">Corporate Current</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 h-10">Zero fee business checking with advanced payroll integration.</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Monthly Fee</p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">$0.00</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-white dark:bg-[#222] flex items-center justify-center group-hover:bg-sia-green group-hover:text-white transition-colors shadow-sm">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-sia-green dark:hover:border-sia-green transition-colors cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sia-green transition-colors">Elite Wealth</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 h-10">Dedicated wealth management and exclusive investment opportunities.</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Min. Balance</p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">$100k</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-white dark:bg-[#222] flex items-center justify-center group-hover:bg-sia-green group-hover:text-white transition-colors shadow-sm">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
