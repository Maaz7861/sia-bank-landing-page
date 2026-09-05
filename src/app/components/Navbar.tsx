"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800" : "bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-sia-green rounded-md flex items-center justify-center shadow-sm">
             <Image src="/logo.png" alt="SIA Logo" width={20} height={20} className="object-contain filter brightness-0 invert" priority sizes="20px" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white leading-none">SIA<span className="text-sia-green">Bank</span></span>
            <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase leading-none mt-0.5">Trust & Prosperity</span>
          </div>
        </Link>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-sia-green transition-colors">Personal</Link>
          <Link href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-sia-green transition-colors">Business</Link>
          <Link href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-sia-green transition-colors">Corporate</Link>
          <Link href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-sia-green transition-colors">Support</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <Link href="#" className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white hover:text-sia-green transition-colors px-2">
            Login
          </Link>
          <button className="h-10 px-5 rounded-md bg-sia-green text-white font-bold text-sm hover:bg-sia-green-dark transition-colors shadow-sm flex items-center gap-2">
            Open Account <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
