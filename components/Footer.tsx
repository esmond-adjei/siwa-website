import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ROUTES } from '@/lib';
import { AppIconName } from './SiteLogo';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-borderColor pt-16">
      <div className="container mx-auto px-4 space-y-8">

        {/* Flex Layout for Large Screens */}
        <div className="flex flex-col md:flex-row gap-8 justify-around text-center md:text-left">
          {/* Logo and Brief Description */}
          <div className="space-y-4 mx-auto md:mx-0 text-center md:text-left">
            <Link href="/" className="block text-2xl w-max mx-auto md:mx-0 font-heading font-bold text-primary">
              <AppIconName size={40} />
            </Link>
  
            <p className="text-textSecondary max-w-xs">
              Empowering students to achieve academic excellence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-row gap-2 md:flex-col flex-wrap justify-center md:justify-start">
              <Link href={ROUTES.home} className="block text-textSecondary text-sm hover:text-primary transition">Home</Link>
              <Link href={ROUTES.about} className="block text-textSecondary text-sm hover:text-primary transition">About</Link>
              <Link href={ROUTES.team} className="block text-textSecondary text-sm hover:text-primary transition">Our Team</Link>
              <Link href={ROUTES.contact} className="block text-textSecondary text-sm hover:text-primary transition">Contact Us</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mx-auto md:mx-0 justify-center md:justify-start">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition">
                <Linkedin size={30} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition">
                <Facebook size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition">
                <Instagram size={30} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-center text-textSecondary text-xs mt-8 border-t border-gray-400 border-opacity-50 py-4">
          &copy; {new Date().getFullYear()} examn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
