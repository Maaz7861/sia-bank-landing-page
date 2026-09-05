"use client";

import { useState } from "react";
import { ArrowRight, Wallet, Briefcase, CalendarClock } from "lucide-react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("savings");

  const tabs = [
    { id: "savings", label: "SIA Samriddhi Khata (Savings)", icon: <Wallet className="h-4 w-4" /> },
    { id: "current", label: "SIA Vyapar Khata (Current)", icon: <Briefcase className="h-4 w-4" /> },
    { id: "daily", label: "SIA Dhanpocket (Daily)", icon: <CalendarClock className="h-4 w-4" /> },
  ];

  return (
    <section id="deposits" className="w-full py-20 bg-gray-50 dark:bg-black border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Unmatched Core Banking Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            High-yield accounts designed specifically to maximize your wealth and business operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-sia-green to-sia-green-dark text-white shadow-lg shadow-sia-green/20 scale-105"
                  : "bg-white dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden min-h-[400px]">
          
          {activeTab === "savings" && (
            <div className="relative z-10 animate-fade-in-up flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">10% <span className="text-xl md:text-2xl text-gray-500">% P.A.</span></h3>
                <h4 className="text-xl font-bold text-sia-green mb-6">SIA Samriddhi Khata (Savings Account)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Available in Secure Basic, Smart, and Elite tiers. Benefit from up to 10% p.a. on incremental balances, zero account closing charges for premium, and auto-sweep facilities.
                </p>
                <button className="h-12 px-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Open Savings Account <ArrowRight className="h-4 w-4" />
             </button>
              </div>
              <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-sia-green/50 dark:hover:border-sia-green/50 hover:shadow-2xl hover:shadow-sia-green/10 transition-all duration-500 group">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Incremental Balance</span>
                  <span className="text-gray-900 dark:text-white font-bold">10L to 4CR</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Interest Rate</span>
                  <span className="text-sia-green font-bold text-lg">10.00% p.a.</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Elite Min Balance</span>
                  <span className="text-gray-900 dark:text-white font-bold">₹25,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Loan Benefit</span>
                  <span className="text-gray-900 dark:text-white font-bold text-right">Preferential terms</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "current" && (
            <div className="relative z-10 animate-fade-in-up flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">50 LAKH</h3>
                <h4 className="text-xl font-bold text-sia-green mb-6">SIA Vyapar Khata (Current Account)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Built for businesses. Get up to ₹50,00,000 free cash deposit per month with Secure Corporate Elite, zero RTGS/NEFT charges, and up to 90% Overdraft against FD.
                </p>
                <button className="h-12 px-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Open Current Account <ArrowRight className="h-4 w-4" />
             </button>
              </div>
              <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">Target Member</span>
                  <span className="text-gray-900 dark:text-white font-bold text-right">Contractors, Pharma, B2B</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">Free Cash Deposit</span>
                  <span className="text-sia-green font-bold">Up to ₹50,00,000/mo</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">OD Facility</span>
                  <span className="text-gray-900 dark:text-white font-bold text-right">90% against FD</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 font-medium">P.A. Incentive</span>
                  <span className="text-gray-900 dark:text-white font-bold text-right">Up to 1.50% p.a.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "daily" && (
            <div className="relative z-10 animate-fade-in-up flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">5.25% <span className="text-xl md:text-2xl text-gray-500">Yield</span></h3>
                <h4 className="text-xl font-bold text-sia-green mb-6">SIA Dhanpocket (Daily Collection)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Perfect for small vendors. Save daily and earn up to 5.25% (Annual Compounding) over 5 years, plus an extra 1.00% discipline bonus on maturity!
                </p>
                <button className="h-12 px-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Start Daily Collection <ArrowRight className="h-4 w-4" />
             </button>
              </div>
              <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">Daily RD Target</span>
                  <span className="text-gray-900 dark:text-white font-bold">₹1,000 - ₹4,999</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">1 Year Return</span>
                  <span className="text-gray-900 dark:text-white font-bold">3.25%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500 font-medium">5 Year Return</span>
                  <span className="text-sia-green font-bold">5.25%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 font-medium">Extra on Maturity</span>
                  <span className="text-sia-gold font-bold">+1.00% Extra</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
