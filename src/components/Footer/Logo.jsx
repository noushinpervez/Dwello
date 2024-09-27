import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const { resolvedTheme } = useTheme();

  const currentLogo = resolvedTheme === 'light' ? '/images/logo_light.png' : '/images/logo_dark.png';

  return (
    <Link className='flex flex-shrink-0 items-center' href='/'>
      <Image
        className='h-10 w-auto rounded-xl'
        src={ currentLogo }
        alt='Logo'
        width={ 0 }
        height={ 0 }
        sizes='100vw'
      />
      <h1 className='block text-4xl font-normal ml-3'>Dwello</h1>
    </Link>
  );
};

export default Logo;