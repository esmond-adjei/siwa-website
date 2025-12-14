'use client';
import AnimatedSection from '@/components/AnimatedSection';

export default function ProblemSection() {
    return (
        <AnimatedSection className="section min-h-[700px] hcc py-20">
            <div className='relative hcc w-full max-w-6xl'>
                {/* Central Text */}
                    <h2 className="heading-1 text-3xl md:!text-5xl text-center max-w-3xl">
                        Cater to <span className='highlight'>Schools</span>, Academic Consultancies, and Exam Prep Centers
                    </h2>

                {/* Orbital Images */}
                <img 
                    src="/educator.svg" 
                    alt="educator" 
                    className="absolute w-32 md:w-40 -top-40 translate-x-1/2 animate-float-1"
                />
                <img 
                    src="/road-to-knowledge.svg" 
                    alt="road-to-knowledge" 
                    className="hidden md:block absolute w-32 md:w-40 top-1/3 -translate-y-1/2 -left-10 animate-float-2"
                />
                <img 
                    src="/teaching.svg" 
                    alt="teaching" 
                    className="absolute w-32 md:w-40 -bottom-40 left-1/2 -translate-x-1/2 animate-float-3"
                />
                <img 
                    src="/elements.svg" 
                    alt="elements" 
                    className="hidden md:block absolute w-32 md:w-40 top-1/4 -translate-y-1/2 -right-10 animate-float-4"
                />
            </div>

            <style jsx global>{`
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }

                @keyframes float-2 {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }

                @keyframes float-3 {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(10px) scale(1.05); }
                }

                @keyframes float-4 {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(20px) scale(1.05); }
                }

                .animate-float-1 {
                    animation: float-1 4s ease-in-out infinite;
                }

                .animate-float-2 {
                    animation: float-2 5s ease-in-out infinite;
                    animation-delay: -1s;
                }

                .animate-float-3 {
                    animation: float-3 4.5s ease-in-out infinite;
                    animation-delay: -2s;
                }

                .animate-float-4 {
                    animation: float-4 5.5s ease-in-out infinite;
                    animation-delay: -3s;
                }
            `}</style>
        </AnimatedSection>
    );
}