import { useTheme } from 'next-themes';
import Image from 'next/image';
import logoDark from '@/assets/images/logo_dark.png';
import logoLight from '@/assets/images/logo_light.png';
import Link from 'next/link';

const Logo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link className='flex flex-shrink-0 items-center' href='/'>
    <Image
      className='h-10 w-auto rounded-xl'
      src={ resolvedTheme === 'dark' ? logoDark : logoLight }
      alt='Logo'
      />
      <h1 className='block text-4xl ml-3'>Dwello</h1>
    </Link>
  );
};

export default Logo;