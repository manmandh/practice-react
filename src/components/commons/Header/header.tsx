import React from 'react';
import logo from '~/assets/icons/foodieland.svg';
import facebook from '~/assets/icons/facebook.svg';
import twitter from '~/assets/icons/twitter.svg';
import instagram from '~/assets/icons/instagram.svg';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a href={href} className=" text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md">
        {label}
      </a>
    </li>
  );
};

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about-us', label: 'About Us' },
];

const SocialIcon = ({ iconSrc }: { iconSrc: string }) => {
  return (
    <a href="#" className="text-gray-700 hover:text-gray-900">
      <img src={iconSrc} alt="" className="h-6 w-6" />
    </a>
  );
};

const socialMediaIcons = [facebook, twitter, instagram];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-100 font-primary-500">
      <div className="flex-shrink-0">
        <img src={logo} alt="" className="h-15 w-15" />
      </div>
      <nav className="space-x-4">
        <ul className='flex'>
          {navigationLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </nav>
      <div className="flex space-x-2">
        {socialMediaIcons.map((iconSrc) => (
          <SocialIcon key={iconSrc} iconSrc={iconSrc} />
        ))}
      </div>
    </header>
  );
};

export {Header};
