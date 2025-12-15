export default function BackgroundSection() {
  const stats = [
    { heading: "Reduces", value: "30%", label: "in crop losses" },
    { heading: "Trained", value: "100+", label: "local farmers" },
    { heading: "Forecasts", value: "200K+", label: "rainfall predictions" },
    { heading: "Empowering", value: "50+", label: "women in agric" }
  ];

  return (
    <section id="about" className="bg-white py-10 md:py-15 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Problem Statement */}
          <p className="w-full md:w-3/5 text-2xl md:text-4xl font-bold">
            Unpredictable weather patterns devastate smallholder farmers, threatening food security for over 5,000 people.
          </p>

          <div className="w-full md:w-2/5 text-sm md:text-base space-y-2">
            <p className="text-zinc-500">
              <em>SIWA</em> changes this reality by uniting two powerful knowledge systems: 
              the time-tested wisdom of indigenous ecological indicators and the precision of modern AI technology.
            </p>
            <p className="text-zinc-500">
              The result? Farmers gain reliable, <strong>localized forecasts</strong> that turn 
              uncertainty into opportunity, enabling smarter decisions that protect livelihoods and increase yields.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white space-y-4">
              <div className="text-base md:text-lg font-semibold text-zinc-400 border-b border-border pb-2">
                {stat.heading}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-zinc-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
