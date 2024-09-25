'use client';

import Image from 'next/image';
import illustration from '../assets/images/illustration.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <section className='dark:bg-slate-900 bg-background'>
      <div className='container min-h-screen px-6 py-12 mx-auto flex md:flex-row flex-col items-center gap-12'>
        <div className='w-full lg:w-1/2'>
          <p className='text-sm font-medium text-primary'>404 error</p>
          <h1 className='mt-3 text-3xl font-semibold'>Page not found</h1>
          <p className='mt-4 text-edge'>Sorry, the page you are looking for doesn&#39;t exist. Here are some helpful links:</p>

          <div className='flex items-center mt-6 gap-x-3'>
            <button
              className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-edge transition-colors duration-200 bg-background border rounded-full gap-x-2 sm:w-auto dark:hover:bg-border hover:bg-border hover:text-primary dark:text-text dark:border-edge'
              onClick={ () => router.back() }
            >
              <span className='flex items-center pb-1'>&#10229;</span> Go back
            </button>

            <Link href='/' className='text-center w-1/2 px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-full shrink-0 sm:w-auto hover:opacity-90'>Take me home</Link>
          </div>
        </div>

        <div className='relative w-full mt-12 lg:w-1/2 lg:mt-0'>
          <Image className='w-full max-w-lg lg:mx-auto' src={ illustration } alt='404' />
        </div>
      </div>
    </section>
  );
};

export default NotFound;