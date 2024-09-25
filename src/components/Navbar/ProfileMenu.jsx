import { useState } from 'react';
import Image from 'next/image';
import { PiUserDuotone, PiHeartDuotone, PiSignOutDuotone } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ProfileMenu = ({ profileImage, isProfileMenuOpen, setIsProfileMenuOpen }) => {
  const pathname = usePathname();

  return (
    <div className='relative ml-3'>
      <button
        type='button'
        className='relative flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
        id='user-menu-button'
        aria-expanded={ isProfileMenuOpen ? 'true' : 'false' }
        aria-haspopup='true'
        onClick={ () => setIsProfileMenuOpen(prev => !prev) }
      >
        <span className='absolute -inset-1.5'></span>
        <span className='sr-only'>Open user menu</span>
        <Image className='h-8 w-8 rounded-full' src={ profileImage } alt='User' />
      </button>

      {/* Profile dropdown */ }
      { isProfileMenuOpen && (
        <div
          id='user-menu'
          className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-2xl bg-background ring-1 ring-border focus:outline-none overflow-hidden'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu-button'
          tabIndex='-1'
        >
          <div className='flex items-center px-4 py-3 text-sm transition-colors duration-300 transform hover:text-primary'>
            <div className='mx-1'>
              <h1 className='font-semibold'>Jane Doe</h1>
              <p className='text-edge hover:text-secondary'>janedoe@example.com</p>
            </div>
          </div>
          <hr className='border-border mx-4 rounded-full' />
          <Link
            href='/profile'
            className='px-4 py-3 text-sm flex items-center transition-colors duration-300 transform hover:bg-border hover:text-primary'
            role='menuitem'
            tabIndex='-1'
            id='user-menu-item-2'
          >
            <PiUserDuotone className='w-5 h-5 mx-1' />
            <span className='mx-1'>Your Profile</span>
          </Link>
          <Link
            href='/properties/saved'
            className='px-4 py-3 text-sm flex items-center transition-colors duration-300 transform hover:bg-border hover:text-primary'
            role='menuitem'
            tabIndex='-1'
            id='user-menu-item-3'
          >
            <PiHeartDuotone className='w-5 h-5 mx-1' />
            <span className='mx-1'>Saved Properties</span>
          </Link>
          <button
            className='px-4 py-3 text-sm flex items-center transition-colors duration-300 transform hover:bg-border w-full hover:text-primary'
            role='menuitem'
            tabIndex='-1'
            id='user-menu-item-4'
          >
            <PiSignOutDuotone className='w-5 h-5 mx-1' />
            <span className='mx-1'>Sign Out</span>
          </button>
        </div>
      ) }
    </div>
  );
};

export default ProfileMenu;