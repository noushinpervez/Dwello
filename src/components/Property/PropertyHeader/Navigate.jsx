const Navigate = ({ imgIndex, setImgIndex, images }) => {
  return (
    <div className='absolute bottom-[8%] flex w-full justify-center gap-2'>
      { images.map((_, idx) => (
        <button
          key={ idx }
          onClick={ () => setImgIndex(idx) }
          className={ `h-1.5 w-[7%] rounded-full transition-colors ${idx === imgIndex ? 'bg-primary' : 'bg-edge hover:bg-background opacity-80'
            }` }
        />
      )) }
    </div>
  );
};

export default Navigate;