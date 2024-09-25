const Card = ({ card }) => {
    return (
        <div
            key={ card.id }
            className='group relative h-96 w-80 lg:h-[450px] lg:w-[450px] overflow-hidden rounded-2xl'
        >
            <div
                style={ {
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } }
                className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
            ></div>
            <div className='absolute inset-0 z-10 flex items-end'>
                <p className='bg-gradient-to-br from-white/20 to-white/0 w-full p-3 lg:px-6 text-2xl font-bold text-center uppercase backdrop-blur-lg text-white'>
                    { card.title }
                </p>
            </div>
        </div>
    );
};

export default Card;