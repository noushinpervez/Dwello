import { PiMoonDuotone, PiSunDuotone, PiToggleRightDuotone } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <PiToggleRightDuotone className='h-6 w-6 hover:text-primary' />
    )
  }

  if (resolvedTheme === 'dark') {
    return <PiSunDuotone onClick={ () => setTheme('light') } className='h-6 w-6 hover:text-primary' />
  }

  if (resolvedTheme === 'light') {
    return <PiMoonDuotone onClick={ () => setTheme('dark') } className='h-6 w-6 hover:text-primary' />
  }
};

export default ThemeToggle;