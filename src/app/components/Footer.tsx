import Link from "next/link";
import { Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#050505] pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 border-b border-gray-200 dark:border-gray-800 pb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-sia-green rounded-md flex items-center justify-center">
                 <Image src="/logo.png" alt="SIA Logo" width={20} height={20} className="object-contain filter brightness-0 invert" priority sizes="20px" />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">SIA<span className="text-sia-green">Bank</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              Empowering your financial journey with enterprise-grade security, intelligent tools, and dedicated global support.
            </p>
            <div className="flex w-full max-w-sm bg-gray-50 dark:bg-[#111] rounded-md p-1.5 border border-gray-200 dark:border-gray-800">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="flex-1 bg-transparent border-none text-gray-900 dark:text-white px-3 text-sm focus:outline-none"
              />
              <button className="bg-sia-green text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-sia-green-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-sia-green transition-colors">Savings Accounts</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Corporate Checking</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Credit Cards</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Loans & Mortgages</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-sia-green transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Investor Relations</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-sia-green transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Security Details</Link></li>
              <li><Link href="#" className="hover:text-sia-green transition-colors">Lodge Complaint</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <p>© 2026 SIA Secure United Urban Credit Co-Operative Society Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-300">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-300">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
