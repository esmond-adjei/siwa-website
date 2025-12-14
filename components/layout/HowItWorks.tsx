export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Observe & Record",
      description: "Farmers use the mobile app to log indigenous indicators they notice—cloud patterns, frog calls, tree flowering, wind changes. The icon-based interface makes recording intuitive and quick.",
      features: [
        "Icon-based interface",
        "No typing required",
        "Works offline"
      ],
      imagePlaceholder: "📱 App screenshot showing icon-based observation input",
      imageAlt: "SIWA app observation screen"
    },
    {
      number: "02",
      title: "Predict & Share",
      description: "Based on their observations and traditional knowledge, farmers submit weather predictions through simple icons. No typing, no complexity.",
      features: [
        "Simple icon selection",
        "Traditional knowledge integration",
        "Community predictions"
      ],
      imagePlaceholder: "🌤️ App screenshot showing weather prediction interface",
      imageAlt: "SIWA app prediction screen"
    },
    {
      number: "03",
      title: "Measure & Track",
      description: "Using calibrated rain gauges at their homes, farmers record actual rainfall twice daily, building a local weather database.",
      features: [
        "Daily rainfall logging",
        "Historical data tracking",
        "Community weather network"
      ],
      imagePlaceholder: "📊 App screenshot showing rainfall measurement input",
      imageAlt: "SIWA app measurement screen"
    },
    {
      number: "04",
      title: "Learn & Decide",
      description: "SIWA's AI combines farmer observations with scientific forecasts to deliver increasingly accurate predictions for smarter farming decisions.",
      features: [
        "AI-powered forecasts",
        "Planting & irrigation alerts",
        "Crop disease warnings"
      ],
      imagePlaceholder: "🎯 App screenshot showing forecast dashboard",
      imageAlt: "SIWA app forecast screen"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          {/* 
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps, powerful results
          </p> 
          */}
        </div>

        {/* Steps */}
        <div className="space-y-6 max-w-229 mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 items-center`}
            >
              {/* Content Side */}
              <div className={`flex-1 space-y-6 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {/* Step Number */}
                <div className="inline-block">
                  <span className="text-6xl md:text-7xl font-bold text-primary-200">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className={`gap-3 pt-2  flex flex-row md:flex-col flex-wrap justify-center md:justify-normal md:flex-nowrap ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  {step.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative group">
                  {/* Phone Frame */}
                  <div className="relative mx-auto w-full max-w-60 md:max-w-80">
                    {/* Shadow & Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-primary-400 to-primary-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    
                    {/* Phone Container */}
                    <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform transition-transform duration-300">
                      {/* Screen */}
                      <div className="relative bg-transparent rounded-[2.5rem] overflow-hidden aspect-9/19">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 h-6 w-40 rounded-b-3xl"></div>
                        
                        {/* Screen Content - Placeholder */}
                        <div className="flex items-center justify-center h-full bg-linear-to-br from-primary-50 to-teal-50 p-8">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{step.imagePlaceholder.split(' ')[0]}</div>
                            <p className="text-sm text-gray-500">
                              {step.imagePlaceholder.split(' ').slice(1).join(' ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
