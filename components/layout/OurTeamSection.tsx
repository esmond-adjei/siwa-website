'use client';

import TeamMember from '@/components/TeamMember';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    imageSrc: "/images/max-profile-sm.jpg",
    name: "Maxwell Angelo",
    title: "CEO",
    bio: 
      <a href="https://linkedin.com/in/maxwell-angelo">
      <Image src="/linkedin-logo.png" alt="linkedin" width={60} height={60} className="mx-auto" />
      </a>
  },
  {
    imageSrc: "/images/nkay-profile.jpg",
    name: "Nana Akwasi Ahenkan",
    title: "COO",
    bio: 
      <a href="https://www.linkedin.com/in/nana-kwasi-owusu-ahenkan">
      <Image src="/linkedin-logo.png" alt="linkedin" width={60} height={60} className="mx-auto" />
      </a>
  },
  {
    imageSrc: "images/esm-profile.jpg",
    name: "Esmond Adjei",
    title: "CTO",
    bio: 
      <a href="https://linkedin.com/in/esmond-adjei">
      <Image src="/linkedin-logo.png" alt="linkedin" width={60} height={60} className="mx-auto" />
      </a>
}
];

export default function OurTeam() {
  return (
    <section id="team" className="section bg-foreground text-center space-y-4">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="heading-1 text-light mb-10">The Team</h2>
      </div>

      {/* Team Members Grid */}
      <motion.div 
        initial={{ scale: 0.8, y: 50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="flex-container"
      >
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            title={member.title}
          >{member.bio}</TeamMember>
        ))}
      </motion.div>

    </section>
  );
}
