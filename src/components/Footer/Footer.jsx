'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { FaFacebook, FaXTwitter, FaPinterest, FaYoutube, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

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
  const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='relative h-[75vh] bg-card'
      style={ { clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' } }
    >
      <div className='relative h-[calc(100vh+75vh)] -top-[100vh]'>
        <div className='h-[75vh] sticky top-[calc(100vh-75vh)]'>
          <div className='py-10 max-w-2xl mx-auto container flex flex-col gap-8 items-center justify-between px-4 font-medium text-left md:text-center'>
            {/* Logo */ }
            <Link href='/' className='mb-4 md:mb-0 flex flex-shrink-0 items-center'>
              <Image src={ logo } alt='Logo' className='h-12 w-auto rounded-xl' />
              <h1 className='text-4xl ml-3'>Dwello</h1>
            </Link>

            {/* Social Links */ }
            <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
              <ul className='flex space-x-8'>
                <a href='#'><FaFacebook className='w-8 h-8 bg-primary text-white p-2 rounded-full' /></a>
                <a href='#'><FaXTwitter className='w-8 h-8 bg-primary text-white p-2 rounded-full' /></a>
                <a href='#'><FaPinterest className='w-8 h-8 bg-primary text-white p-2 rounded-full' /></a>
                <a href='#'><FaYoutube className='w-8 h-8 bg-primary text-white p-2 rounded-full' /></a>
                <a href='#'><FaInstagram className='w-8 h-8 bg-primary text-white p-2 rounded-full' /></a>
              </ul>
            </div>

            {/* Other Links */ }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-start w-full'>
              {/* Our Company */ }
              <div>
                <div onClick={ () => setCompanyDropdownOpen(!isCompanyDropdownOpen) } tabIndex='0' className='flex cursor-pointer items-center justify-between transition w-full md:hidden'>
                  <span>Our Company</span>
                  <span className={ `text-primary transition ${isCompanyDropdownOpen ? '-rotate-180' : ''}` }>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2.5'
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <hr className='block md:hidden border border-border rounded-full my-2.5' />
                <ul className={ `flex flex-col space-y-2.5 ${isCompanyDropdownOpen ? 'block' : 'hidden'} md:block` }>
                  <li className='hidden md:block'>Our Company</li>
                  { companyLinks.map((link) => (
                    <li key={ link.label }>
                      <a href={ link.href } className='text-primary hover:underline hover:underline-offset-4'>{ link.label }</a>
                    </li>
                  )) }
                </ul>
              </div>

              {/* Popular Searches */ }
              <div>
                <div onClick={ () => setSearchDropdownOpen(!isSearchDropdownOpen) } tabIndex='0' className='flex cursor-pointer items-center justify-between transition w-full md:hidden'>
                  <span>Popular Searches</span>
                  <span className={ `text-primary transition ${isSearchDropdownOpen ? '-rotate-180' : ''}` }>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2.5'
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <hr className='block md:hidden border border-border rounded-full my-3' />
                <ul className={ `flex flex-col space-y-2.5 ${isSearchDropdownOpen ? 'block' : 'hidden'} md:block` }>
                  <li className='hidden md:block'>Popular Searches</li>
                  { popularSearches.map((search) => (
                    <li key={ search.label }>
                      <a href={ search.href } className='text-primary hover:underline hover:underline-offset-4'>{ search.label }</a>
                    </li>
                  )) }
                </ul>
              </div>

              {/* Let Us Help */ }
              <div>
                <div onClick={ () => setHelpDropdownOpen(!isHelpDropdownOpen) } tabIndex='0' className='flex cursor-pointer items-center justify-between transition w-full md:hidden'>
                  <span>Let Us Help</span>
                  <span className={ `sm:hidden block text-primary transition ${isHelpDropdownOpen ? '-rotate-180' : ''}` }>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2.5'
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <hr className='block md:hidden border border-border rounded-full my-3' />
                <ul className={ `flex flex-col space-y-2.5 ${isHelpDropdownOpen ? 'block' : 'hidden'} md:block` }>
                  <li className='hidden md:block'>Let Us Help</li>
                  { helpLinks.map((help) => (
                    <li key={ help.label }>
                      <a href={ help.href } className='text-primary hover:underline hover:underline-offset-4'>{ help.label }</a>
                    </li>
                  )) }
                </ul>
              </div>
            </div>

            <div className='text-sm text-edge font-normal text-center'>
              <p className='mt-4'>
                &copy; { currentYear } ToletBD Inc. All rights reserved. <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>Terms of Service</span>, <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>Privacy Policy</span> and <span className='text-primary hover:underline hover:underline-offset-4 cursor-pointer'>MLS Disclosures</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;