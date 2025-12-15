import { ExpandableSection } from '@/components/ExpandableSection';

const FAQS = [
  {
    question: 'What is SIWA?',
    answer: 'SIWA (Smart Indigenous Weather App) is a mobile application that bridges traditional weather forecasting knowledge with modern AI technology. Developed by DIPPER Lab, SIWA empowers smallholder farmers in the Pra River Basin with accurate, localized weather predictions by combining validated indigenous ecological indicators with scientific data.'
  },
  {
    question: 'Who can use SIWA?',
    answer: 'SIWA is designed for smallholder farmers in Ghana, particularly in the Pra River Basin covering Ashanti, Eastern, and Central regions. The app is accessible to users with varying literacy levels through its icon-driven interface. We currently work with 500+ farmers across 14 communities and are expanding to reach more farming households.'
  },
  {
    question: 'Does SIWA work without internet?',
    answer: 'Yes! SIWA functions completely offline for daily use—critical for rural areas with limited connectivity. Farmers can record observations, submit predictions, and log rainfall data anytime. All data automatically syncs when internet connection becomes available, ensuring no information is lost.'
  },
  {
    question: 'What languages is SIWA available in?',
    answer: 'SIWA uses visual icons to be accessible across literacy levels and languages, requiring no reading or typing. We\'re developing user manuals and audio support in local languages including Twi, Fante, and English to ensure all farmers can use the app effectively regardless of their literacy level.'
  },
  {
    question: 'Is there a cost to use SIWA?',
    answer: 'SIWA is currently free for farmers participating in our partner communities across the Pra River Basin. We\'re working on sustainable funding models through partnerships with Ghana Meteorological Agency, agricultural extension services, and development organizations to ensure continued free access as we scale to more regions.'
  },
  {
    question: 'How does SIWA protect indigenous knowledge and farmer data?',
    answer: 'Indigenous knowledge is documented only with prior permission, proper attribution, and cultural sensitivity. All personal data is anonymized where possible, stored securely, and used only for agreed purposes in compliance with national data protection laws. Communities retain ownership of their local knowledge. All participants provide informed consent and can withdraw at any time.'
  },
  {
    question: 'Can women farmers participate in SIWA?',
    answer: 'Absolutely! We\'re committed to at least 50% women participation in all project activities, including training and leadership roles. We provide targeted smartphone and digital literacy training, safe and accessible venues, and times that accommodate caregiving responsibilities. Women serve as data collectors, trainers, and decision-makers in the SIWA project, addressing the gap where women produce 70% of food crops but historically owned only 8% of agricultural land.'
  },
  {
    question: 'What indigenous indicators does SIWA use?',
    answer: 'SIWA tracks validated indigenous ecological indicators including moon phases, cloud patterns, celestial signs (stars, rainbow), animal behaviors (cattle birds, frogs, termites, ants), plant responses (Ceiba trees, bamboo, water taro, Emire and Odum trees), and atmospheric conditions (wind direction, dew, heat, thunder). Our research with 25 indigenous forecasters across 14 communities documented these indicators and their correlation with actual weather outcomes.'
  },
  {
    question: 'How is SIWA different from other weather apps?',
    answer: 'SIWA uniquely combines validated indigenous ecological indicators with scientific weather data and AI-powered predictions. It\'s co-produced with farmers to meet their specific needs, works completely offline for rural areas, and uses an local language interface accessible to all literacy levels. Unlike generic weather apps, SIWA is built specifically for smallholder farmers in rainfed agriculture.'
  },
  {
    question: 'Will SIWA expand to other regions?',
    answer: 'Yes! SIWA is designed for scalability. After successful implementation in the Pra River Basin (Obuasi East, Atiwa West, and Assin Foso districts), we plan to expand across Ghana and adapt the model for other climate-vulnerable regions in West Africa. Our partnerships with universities and meteorological agencies position us to replicate this indigenous knowledge-science integration approach in diverse agricultural contexts.'
  }
];

export default function FAQSection() {
  return (
    <section className={`section py-15`}>
        <div className="max-w-4xl mx-auto">
            <h2 className='heading-1 mb-4'>Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-2">
              {FAQS.map((faq, idx) => (
              <ExpandableSection 
                  key={idx} 
                  title={faq.question}
                  className='py-4'
              >
                  <p className='text-gray-600 pb-4'>{faq.answer}</p>
              </ExpandableSection>
              ))}
          </div>
        </div>
    </section>
  );
};
