'use client';

import { useState } from 'react';
import Dropdown from './Dropdown';
import LinkList from './LinkList';
import Logo from './Logo';

const companyLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Contact Us' },
];

const popularSearches = [
  { href: '#', label: 'Apartments for Rent Near Me' },
  { href: '#', label: 'Houses for Rent Near Me' },
  { href: '#', label: '1 Bedroom Apartments Near Me' },
  { href: '#', label: 'Studio Apartments Near Me' },
  { href: '#', label: 'Cheap Houses Near Me' },
  { href: '#', label: 'Luxury Apartments Near Me' },
];

const helpLinks = [
  { href: '#', label: 'Avoid Scams' },
  { href: '#', label: 'List a Property' },
  { href: '#', label: 'Site Map' },
  { href: '#', label: 'Dhaka Apartments Sitemap' },
  { href: '#', label: 'New Listings In Dhaka' },
  { href: '#', label: 'Popular Listings In Dhaka' },
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const currentYear = new Date().getFullYear();

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <footer
      className='relative h-[80vh] bg-card'
      style={ { clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' } }
    >
      <div className='fixed bottom-0 h-[80vh] w-full'>
        <div className='py-10 max-w-2xl mx-auto container flex flex-col flex-shrink-0 gap-8 items-center h-full px-4 font-medium text-left md:text-center'>
          {/* Logo */ }
          <Logo />

          {/* Social Links */ }
          <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
            <LinkList
              links={ [
                { href: '#', label: 'Facebook' },
                { href: '#', label: 'Twitter' },
                { href: '#', label: 'Pinterest' },
                { href: '#', label: 'YouTube' },
                { href: '#', label: 'Instagram' }
              ] }
            />
          </div>

          {/* Other Links */ }
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-start w-full'>
            <Dropdown
              id='company'
              label='Our Company'
              links={ companyLinks }
              openDropdown={ openDropdown }
              handleDropdownToggle={ handleDropdownToggle }
            />
            <Dropdown
              id='search'
              label='Popular Searches'
              links={ popularSearches }
              openDropdown={ openDropdown }
              handleDropdownToggle={ handleDropdownToggle }
            />
            <Dropdown
              id='help'
              label='Let Us Help'
              links={ helpLinks }
              openDropdown={ openDropdown }
              handleDropdownToggle={ handleDropdownToggle }
            />
          </div>

          <div className='flex-grow'></div>
          <p className='text-sm text-edge font-normal text-center'>
            &copy; { currentYear } Dwello Inc. All rights reserved. <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>Terms of Service</span>, <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>Privacy Policy</span> and <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>MLS Disclosures</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;