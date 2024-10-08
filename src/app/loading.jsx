import home from '@/assets/images/home.gif';

const Loading = () => {
  const height = '90vh';
  const background = 'var(--background)';
  const imgUrl = home.src;

  return (
    <div className='relative' style={ { height } }>
      <div
        className='absolute inset-0 z-0'
        style={ {
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        } }
      />
      <div
        style={ { background } }
        className='absolute inset-0 animate-pulse z-10'
      />
      <span
        className='font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none'
        style={ {
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          fontSize: 'clamp(3rem, 12vw, 10rem)',
          lineHeight: height,
          WebkitTextStroke: '1.5px var(--primary)',
        } }
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;