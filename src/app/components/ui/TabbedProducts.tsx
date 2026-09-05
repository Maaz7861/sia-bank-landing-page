"use client";

import { useState } from "react";
import { ArrowRight, Wallet, CreditCard, Home, Briefcase } from "lucide-react";

export default function TabbedProducts() {
  const [activeTab, setActiveTab] = useState("accounts");

  const tabs = [
    { id: "accounts", label: "Accounts", icon: <Wallet className="h-4 w-4" /> },
    { id: "cards", label: "Credit Cards", icon: <CreditCard className="h-4 w-4" /> },
    { id: "loans", label: "Loans", icon: <Home className="h-4 w-4" /> },
    { id: "business", label: "Business", icon: <Briefcase className="h-4 w-4" /> },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Discover our financial products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Tailored solutions designed to help you save, spend, and invest with absolute confidence.
          </p>
        </div>

        {/* Custom Animated Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
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

        {/* Tab Content Area (Axis Bank style Massive Container) */}
        <div className="w-full bg-sia-green-dark dark:bg-[#072418] rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sia-green/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>

          {activeTab === "accounts" && (
            <div className="relative z-10 animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Open an account that matches your saving style
                  </h3>
                  <p className="text-white/80">Experience zero minimum balance requirements, high-yield interest, and premium rewards.</p>
                </div>
                <button className="h-12 px-8 rounded-xl bg-white text-sia-green-dark font-bold hover:bg-sia-gold transition-colors shadow-lg">
                  Explore Accounts
                </button>
              </div>

              {/* 3 Sub-Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-sia-gold transition-colors">Digital Savings</h4>
                    <ArrowRight className="h-5 w-5 text-white/50 group-hover:text-sia-gold transition-colors" />
                  </div>
                  <p className="text-sm text-white/70">Instant virtual debit card and 4.5% interest on your daily balance.</p>
                </div>

                <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-sia-gold transition-colors">Premium Salary</h4>
                    <ArrowRight className="h-5 w-5 text-white/50 group-hover:text-sia-gold transition-colors" />
                  </div>
                  <p className="text-sm text-white/70">Zero fees on international transfers and dedicated concierge.</p>
                </div>

                <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-sia-gold transition-colors">Senior Citizen</h4>
                    <ArrowRight className="h-5 w-5 text-white/50 group-hover:text-sia-gold transition-colors" />
                  </div>
                  <p className="text-sm text-white/70">Extra 0.5% interest on fixed deposits and priority branch service.</p>
                </div>

              </div>
            </div>
          )}
          
          {/* Placeholder for other tabs just to prove logic works */}
          {activeTab !== "accounts" && (
            <div className="relative z-10 flex flex-col items-center justify-center py-20 animate-fade-in-up text-center">
              <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                 {activeTab === "cards" && <CreditCard className="h-8 w-8 text-sia-gold" />}
                 {activeTab === "loans" && <Home className="h-8 w-8 text-sia-gold" />}
                 {activeTab === "business" && <Briefcase className="h-8 w-8 text-sia-gold" />}
              </div>
              <h3 className="text-3xl font-black text-white mb-4 capitalize">Premium {activeTab} Solutions</h3>
              <p className="text-white/70 max-w-md mx-auto">Click back to Accounts to see the detailed structural layout, or implement this section seamlessly.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
