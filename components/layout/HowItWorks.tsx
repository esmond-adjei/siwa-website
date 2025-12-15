export default function FeaturesSection() {
  const features = [
    {
      title: "Works Completely Offline",
      description: "SIWA functions fully without internet, critical for rural areas with limited connectivity. Record observations, submit predictions, and log rainfall anytime. Data syncs automatically when connection is available.",
      icon: (
        <svg className="size-8 md:size-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
        </svg>
      ),
      features: [
        "No internet required for daily use",
        "Automatic sync when connected",
        "Perfect for remote farming areas"
      ],
      imageUrl: "/images/mobile-app/home-screen.jpg",
    },
    {
      title: "Icon-Driven Interface",
      description: "Visual design accessible to all literacy levels. No reading or typing; just tap icons for clouds, moon, animals, and plants. Audio support available in Twi.",
      icon: (
        <svg className="size-8 md:size-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: [
        "No typing or reading needed",
        "Local language support",
        "Audio guidance available"
      ],
      imageUrl: "/images/mobile-app/rain-intensity-screen.jpg",
    },
    {
      title: "AI-Powered Predictions",
      description: "Machine learning trained on validated data from expert forecasters across 14 communities. Integrates winning solutions from Indigenous Intel AI Challenge with real-time Ghana Meteorological Agency data.",
      icon: (
        <svg className="size-8 md:size-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Trained on 3 regions of data",
        "GMet scientific data integration",
        "Learns from community feedback"
      ],
      imageUrl: "/images/mobile-app/model-prediction-screen-3.jpg",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Local by Design.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for smallholder farmers with limited connectivity and diverse literacy levels
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6 max-w-229 mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 items-center`}
            >
              {/* Content Side */}
              <div className={`flex-1 space-y-6 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {/* Icon */}
                <div className="inline-block">
                  <span className="text-5xl md:text-7xl font-bold text-primary-200">
                    {feature.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Points */}
                <div className={`gap-3 pt-2  flex flex-row md:flex-col flex-wrap justify-center md:justify-normal md:flex-nowrap ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  {feature.features.map((point, idx) => (
                    <div key={idx} className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
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
                    <div className="relative w-60 md:w-80 bg-black rounded-[3rem] p-3 shadow-2xl transform transition-transform duration-300">
                      {/* Screen */}
                      <div className="relative bg-transparent rounded-[2.5rem] overflow-hidden aspect-9/19">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black h-6 w-1/2 rounded-b-3xl"/>
                        
                        {/* Screen Content */}
                        <div className="flex items-center justify-center h-full bg-linear-to-br from-primary-50 to-teal-50 p-8"
                          style={{ backgroundImage: `url(${feature.imageUrl})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
                        />
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
