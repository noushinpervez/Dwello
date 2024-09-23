const Card = ({ card }) => {
    return (
        <div
            key={ card.id }
            className='group relative h-80 w-72 lg:h-[450px] lg:w-[450px] overflow-hidden rounded-2xl'
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
                <p className='bg-gradient-to-br from-white/20 to-white/0 p-3 lg:p-6 text-2xl font-bold text-center uppercase backdrop-blur-lg rounded-2xl m-4 text-white'>
                    { card.title }
                </p>
            </div>
        </div>
    );
};

export default Card;