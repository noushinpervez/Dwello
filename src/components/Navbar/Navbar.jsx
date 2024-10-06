'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { IoNotificationsOutline } from 'react-icons/io5';
import NavLink from './NavLink';
import ProfileMenu from './ProfileMenu';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa6';

const Navbar = () => {
  const { data: session } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const isLoggedIn = !!session;
  const hasProviders = providers && Object.values(providers).length > 0;

  return (
    <nav className='font-medium'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex md:py-3.5 py-5 items-center justify-between'>
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
                <p className='py-1 px-2 font-bold mb-1'>|</p>
                <NavLink href='/properties' isActive={ pathname === '/properties' }>Properties</NavLink>
                { session && (
                  <>
                    <p className='py-1 px-2 font-bold mb-1'>|</p>
                    <NavLink href='/properties/add' isActive={ pathname === '/properties/add' }>Add Property</NavLink>
                  </>
                ) }
              </div>
            </div>
          </div>

          {/* Right Side Menu (Logged Out) */ }
          { !isLoggedIn && hasProviders && (
              <div className='hidden md:block md:ml-6'>
                <div className='flex items-center'>
                  { Object.values(providers).map((provider, index) => (
                    <button
                      onClick={ () => signIn(provider.id) }
                      key={ index }
                      className='flex items-center justify-center text-inv-text bg-inv-background hover:opacity-90 rounded-full font-semibold py-3 px-4 -my-1'
                    >
                      <FaGoogle className='mr-2 mb-0.5' />
                      <span>Login or Register</span>
                    </button>
                  )) }
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
                    className='relative rounded-full bg-background border border-inv-background p-1 text-inv-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>View notifications</span>
                    <IoNotificationsOutline className='h-6 w-6 text-text' aria-hidden='true' />
                  </button>
                  <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>0</span>
                </Link>

                {/* Profile dropdown button */ }
                <ProfileMenu
                  user={ session?.user }
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
            { session && (
              <NavLink href='/properties/add' isActive={ pathname === '/properties/add' }>Add Property</NavLink>
            ) }
            { !isLoggedIn && hasProviders && (
              <>
                <div className='mx-2'>
                  <hr className='w-full mt-2 mb-4 mx-auto border-border border rounded-full' />
                </div>
                <div className='bg-dark py-3 -mx-2 flex justify-end'>
                  { Object.values(providers).map((provider, index) => (
                    <button
                      onClick={ () => signIn(provider.id) }
                      key={ index }
                      className='m-3 flex items-center bg-inv-background hover:opacity-90 text-inv-text rounded-full px-4 py-4 text-lg font-semibold'
                    >
                      <FaGoogle className='mr-2 mb-0.5' />
                      <span>Login or Register</span>
                    </button>
                  )) }
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