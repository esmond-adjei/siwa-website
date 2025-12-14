
import { ExpandableSection } from '@/components/ExpandableSection';


const FAQS = [
  {
    question: 'What is AINAS?',
    answer: 'AINAS LBG (African Initiative for Nature-Based Solutions) is a non-governmental organization dedicated to empowering African communities to implement innovative nature-based solutions that combat climate change, restore ecosystems, build resilient cities and promote sustainable development.'
  },
  {
    question: 'What are nature-based solutions (NBS)?',
    answer: 'Nature-based solutions are sustainable approaches that use the power of nature to address environmental, social and economic challenges. Examples include reforestation, green infrastructure, sustainable agriculture, agroforestry and water management strategies.'
  },
  {
    question: 'What does AINAS aim to achieve?',
    answer: 'Our goal is to transform African communities through restoring ecosystems, building resilience to climate change and creating sustainable livelihoods. We focus on capacity building, co-creating enterprises, improving agricultural productivity, advocacy, and expanding access to clean water and energy.'
  },
  {
    question: "Who benefits from AINAS's initiatives?",
    answer: "AINAS's primary beneficiaries are rural and urban communities across Africa, especially women, youth, smallholder farmers and vulnerable populations affected by climate change and environmental degradation."
  },
  {
    question: 'How does AINAS engage with local communities?',
    answer: 'AINAS collaborates with communities to co-develop solutions that reflect their unique needs. We provide training, create alternative livelihoods and integrate traditional knowledge with modern innovations to ensure sustainable outcomes.'
  },
  {
    question: 'How can individuals or organizations support AINAS?',
    answer: 'You can support AINAS by donating, volunteering or partnering with us to implement nature-based solutions. Visit our website or contact us directly for more information.'
  },
  {
    question: 'How is AINAS funded?',
    answer: 'AINAS receives funding from a diverse range of sources including grants, private donations, corporate sponsorships and government support. We are committed to transparency and financial accountability.'
  }
];

export default function FAQSection() {
  return (
    <section className={`section py-15`}>
        <div className="max-w-4xl mx-auto">
            <h2 className='heading-1 mb-4'>Frequently Asked Questions (FAQs)</h2>
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
    </section>
  );
};
