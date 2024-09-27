const GradientEdges = () => {
  return (
    <>
      <div className='pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-white/30 dark:from-black/50 to-black/0' />
      <div className='pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-white/30 dark:from-black/50 to-black/0' />
    </>
  );
};

export default GradientEdges;