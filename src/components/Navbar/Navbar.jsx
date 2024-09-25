'use client';

import { useState } from 'react';
import profileDefault from '@/assets/images/profile.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { IoNotificationsOutline } from 'react-icons/io5';
import NavLink from './NavLink';
import ProfileMenu from './ProfileMenu';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  return (
    <nav className='font-medium'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex md:py-4 py-5 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* Mobile menu button */ }
            <div
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-full'
              aria-controls='mobile-menu'
              aria-expanded={ isMobileMenuOpen ? 'true' : 'false' }
              onClick={ () => setIsMobileMenuOpen(prev => !prev) }
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <HamburgerButton />
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* Logo */ }
            <Logo />

            {/* Desktop Menu hidden below md screens */ }
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2 place-items-end h-full'>
                <NavLink href='/' isActive={ pathname === '/' }>Home</NavLink>
                <p className='py-1 px-2 font-bold'>|</p>
                <NavLink href='/properties' isActive={ pathname === '/properties' }>Properties</NavLink>
                { isLoggedIn && (
                  <>
                    <p className='py-1 px-2 font-bold'>|</p>
                    <NavLink href='/properties/add' isActive={ pathname === '/properties/add' }>Add Property</NavLink>
                  </>
                ) }
              </div>
            </div>
          </div>

          {/* Right Side Menu (Logged Out) */ }
          { !isLoggedIn && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                <button className='flex items-center text-white bg-primary hover:opacity-90 rounded-full font-semibold p-4'>
                  <svg className='mr-2 w-5 h-5' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 496 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'></path>
                  </svg>
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          ) }

          {/* Right Side Menu (Logged In) */ }
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
            { isLoggedIn && (
              <>
                <Link href='/messages' className='relative group'>
                  <button
                    type='button'
                    className='relative rounded-full bg-background border border-primary p-1 text-inv-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>View notifications</span>
                    <IoNotificationsOutline className='h-6 w-6 text-primary' aria-hidden='true' />
                  </button>
                  <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                    2
                  </span>
                </Link>

                {/* Profile dropdown button */ }
                <ProfileMenu
                  profileImage={ profileDefault }
                  isProfileMenuOpen={ isProfileMenuOpen }
                  setIsProfileMenuOpen={ setIsProfileMenuOpen }
                />
              </>
            ) }

            {/* Theme Toggle */ }
            <div className={ `rounded-full transition-all duration-200 ${isLoggedIn ? 'md:ml-6 ml-3' : 'ml-0'}` }>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */ }
      { isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 py-3 bg-card'>
            <NavLink href='/' isActive={ pathname === '/' }>Home</NavLink>
            <NavLink href='/properties' isActive={ pathname === '/properties' }>Properties</NavLink>
            { isLoggedIn && (
              <NavLink href='/properties/add' isActive={ pathname === '/properties/add' }>Add Property</NavLink>
            ) }
            { !isLoggedIn && (
              <>
                <div className='mx-2'>
                  <hr className='w-full mt-2 mb-4 mx-auto border-border border rounded-full' />
                </div>
                <div className='bg-dark py-3 -mx-2 flex justify-end'>
                  <button className='m-3 flex items-center text-inv-text bg-primary hover:opacity-90 text-white rounded-full px-4 py-4 text-lg font-semibold'>
                    <svg className='mr-2 w-5 h-5' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 496 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'></path>
                    </svg>
                    <span>Login or Register</span>
                  </button>
                </div>
              </>
            ) }
          </div>
        </div>
      ) }
    </nav>
  );
};

export default Navbar;