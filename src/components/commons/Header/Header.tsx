import React from 'react';
import logo from '~/assets/icons/foodieland.svg';
import facebook from '~/assets/icons/facebook.svg';
import twitter from '~/assets/icons/twitter.svg';
import instagram from '~/assets/icons/instagram.svg';
import { Link} from 'react-router-dom';
import { NavLinkProps } from '~/commons/interfaces/navLinkProps';



const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link to={href} className="text-primary hover:text-blue-600 px-3 py-2 rounded-md">
        {label}
      </Link>
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
    <Link to="#">
      <img src={iconSrc} alt="icon" className="h-6 w-6" />
    </Link>
  );
};

const socialMediaIcons = [facebook, twitter, instagram];

export const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[45px] pb-[85px] px-8 bg-white font-primary-500">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="h-15 w-15" />
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
