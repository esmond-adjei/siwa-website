export default function PartnerSection() {

    const icons = [
        { Icon: 'dipperlab-logo.png', id: 1, name: 'Dipper Lab', href: 'https://dipperlab.knust.edu.com' },
        { Icon: 'AIFDA.png', id: 2, name: 'AI for Development in Africa', href: 'https://www.ai4d.ai' },
        { Icon: 'rail-logo.png', id: 3, name: 'Respnosible AI Lab', href: 'https://rail.knust.edu.gh' },
        // { Icon: 'british-council.svg', id: 4, name: 'British Council', href: 'https://www.britishcouncil.org.gh' },
    ];

    // Double the icons for seamless loop
    const allIcons = [...icons];

    return (
        <section className="section bg-background py-16 overflow-hidden">
            <div className="container mx-auto">
                <div 
                    className="relative"
                >
                    <div className={`flex gap-10 items-center justify-evenly`}>
                        {allIcons.map((item, index) => (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" key={`${item.id}-${index}`}>
                                <div 
                                    key={`${item.id}-${index}`} 
                                    className="shrink-0 grayscale-0 hover:grayscale transition-all"
                                    title={item.name}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={`/partners/${item.Icon}`} className="h-10 md:h-15 text-primary"/>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}