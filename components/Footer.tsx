import Link from 'next/link';
import { ROUTES } from '@/lib';
import { AppIconName } from './SiteLogo';

const MENU_ITEMS = [
  { name: 'Home', route: ROUTES.home },
  { name: 'About', route: ROUTES.about },
  { name: 'Impact', route: ROUTES.impact },
  { name: 'Features', route: ROUTES.features },
  { name: 'Contact Us', route: ROUTES.contact },
];


export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-border pt-16">
      <div className="container mx-auto px-4 space-y-8">

        {/* Flex Layout for Large Screens */}
        <div className="flex flex-col md:flex-row gap-8 justify-around text-center md:text-left">
          {/* Logo and Brief Description */}
          <div className="space-y-4 mx-auto md:mx-0 text-center md:text-left">
            <Link href="/" className="block text-2xl w-max mx-auto md:mx-0 font-heading font-bold text-primary">
              <AppIconName size={60} />
            </Link>
  
            <p className="text-black/60 max-w-md">
              Building climate-resilient futures for Ghanaian farmers through indigeno-scientific forecasting
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-row gap-2 flex-wrap justify-center md:justify-start">
              {
                MENU_ITEMS.map((item) => (
                  <Link
                    key={item.name+item.route}
                    href={item.route}
                    className="block text-secondary text-sm hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

      </div>
      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs mt-8 border-t border-gray-300 border-opacity-50 py-4">
        &copy; {new Date().getFullYear()} SIWA. All rights reserved.
      </p>
    </footer>
  );
}
