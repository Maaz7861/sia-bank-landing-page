"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, ChevronDown, User, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Deposits & Savings", "जमा एवं बचत"), href: "#deposits" },
    { name: t("Loans & Mortgages", "ऋण (Loans)"), href: "#loans" },
    { name: t("Bachat Gat", "बचत गट"), href: "#bachat-gat" },
    { name: t("About Us", "हमारे बारे में"), href: "#about" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-gray-100 dark:border-gray-800 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/logo.png" alt="SIA Logo" width={56} height={56} className="object-contain group-hover:scale-105 transition-transform duration-300" priority />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
              SIA<span className="text-sia-green">Secure</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-1 hidden sm:block">Co-Operative Society</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-sia-green dark:hover:text-sia-green transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 z-50">
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-sia-green/10 dark:hover:bg-sia-green/20 hover:text-sia-green dark:hover:text-sia-gold transition-all duration-300"
            title="Toggle Language"
          >
            <Languages className="h-4 w-4" />
            <span className="ml-1.5 text-[10px] font-black tracking-wider">{language === 'en' ? 'EN' : 'HI'}</span>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-sia-green/10 dark:hover:bg-sia-green/20 hover:text-sia-green dark:hover:text-sia-gold transition-all duration-300 hover:rotate-12"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          
          <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-sia-green dark:hover:text-sia-gold transition-colors">
            <User className="h-4 w-4" /> Login
          </button>
          
          <button className="hidden sm:block relative overflow-hidden h-11 px-6 rounded-lg bg-gradient-to-r from-sia-green to-sia-green-dark text-white font-bold text-sm shadow-lg hover:shadow-sia-green/30 transition-all duration-300 group">
            <span className="relative z-10">Open Account</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sia-gold to-sia-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[400px] border-b" : "max-h-0 border-b-0"}`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-gray-900 dark:text-white hover:text-sia-green dark:hover:text-sia-green transition-colors pb-2 border-b border-gray-100 dark:border-gray-800/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white">
              <User className="h-4 w-4" /> Login
            </button>
            <button className="flex-1 h-12 rounded-lg bg-sia-green text-white font-bold">
              Open Account
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
