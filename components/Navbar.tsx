'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '@/lib';
import { usePathname } from 'next/navigation';
import { AppIconName } from './SiteLogo';

const MENU_ITEMS = [
  { name: 'Home', route: ROUTES.home },
  { name: 'About', route: ROUTES.about },
  { name: 'Impact', route: ROUTES.team },
  { name: 'Features', route: ROUTES.features },
  { name: 'Contact Us', route: ROUTES.contact },
];

/**
 * Navigation bar with menu items
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navTheme = `menu-item text-primary-600 ${
    isScrolled ? '!text-black' : '!text-light'
  }`;

  return (
    <motion.header
      className="fixed w-full top-0 p-2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`hcb flex-wrap p-4 lg:px-10 max-w-360 mx-auto transition-all duration-200 ${
          isScrolled
            ? 'bg-white/50 backdrop-blur-md shadow-sm text-black m-2 rounded-xl'
            : 'bg-transparent text-light'
        }`}
      >
        {/* main site logo */}
        <Link
          href="/"
          className={`text-2xl font-heading font-bold ${
            isScrolled ? 'text-primary' : 'text-light'
          }`}
        >
          <AppIconName size={40} theme={isScrolled ? 'light' : 'dark'} />
        </Link>

        {/* show for only larger than mobile-size screens */}
        <div className="gap-4 hidden md:flex items-center">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className={isActive(item.route) ? `${navTheme} active` : navTheme}
            >
              {item.name}
            </Link>
          ))}

          <Link href={ROUTES.waitingList} className="cta-btn shrink-0">
            Join Us
          </Link>
        </div>

        {/* show for only mobile-size screens */}
        <button
          className={`block md:hidden ${isScrolled ? 'text-black' : 'text-light'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${mobileMenuOpen
              ? 'absolute top-20 left-0 h-screen transition-all duration-300'
              : 'hidden'
          } w-full`}
        >
          <div
            ref={menuRef}
            className="drawer *:block space-y-0.5 flex flex-col px-10 py-4 pt-8 text-black bg-white rounded-xl shadow-lg"
            aria-expanded={mobileMenuOpen}
            style={{
              ['--drawer-height-final' as string]: '100%',
              ['--animation-duration' as string]: '0.8s',
            }}
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                className={isActive(item.route) ? 'menu-item active' : 'menu-item'}
              >
                {item.name}
              </Link>
            ))}

            <Link href={ROUTES.waitingList} className="cta-btn inline-block! text-center w-full md:w-max">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
