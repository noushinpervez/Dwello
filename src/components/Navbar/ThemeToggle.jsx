import { PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleClick = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      { resolvedTheme === 'dark' ? (
        <PiSunDuotone onClick={ handleClick } className='h-6 w-6 hover:text-primary' />
      ) : (
        <PiMoonDuotone onClick={ handleClick } className='h-6 w-6 hover:text-primary' />
      ) }
    </>
  );
};

export default ThemeToggle;