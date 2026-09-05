export default function StatsStrip() {
  const stats = [
    { value: "100+", label: "Global Branches" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50+", label: "Countries" },
    { value: "200K+", label: "Corporate Clients" },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200 dark:divide-gray-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
