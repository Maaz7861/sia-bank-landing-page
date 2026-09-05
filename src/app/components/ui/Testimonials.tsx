export default function Testimonials() {
  return (
    <section className="w-full bg-[#111] dark:bg-[#0a0a0a] py-24 border-y border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/3 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Here's What <br /> They Have to <br /> Say
          </h2>
          <div className="flex -space-x-4">
            {/* Avatar placeholders */}
            <div className="w-12 h-12 rounded-full border-2 border-[#111] bg-gray-600"></div>
            <div className="w-12 h-12 rounded-full border-2 border-[#111] bg-gray-500"></div>
            <div className="w-12 h-12 rounded-full border-2 border-[#111] bg-gray-400"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-gray-800 relative">
          <span className="absolute top-6 left-6 text-6xl text-gray-700 opacity-50 font-serif">"</span>
          <p className="text-gray-300 text-lg md:text-xl relative z-10 leading-relaxed mb-8">
            The personalized service gives feel of traditional bank. It has made saving money so much easier, and the app is super simple to use.
          </p>
          <div>
            <h4 className="text-white font-bold">Sarah Williams</h4>
            <p className="text-gray-500 text-sm">New York, USA</p>
          </div>
        </div>

      </div>
    </section>
  );
}
