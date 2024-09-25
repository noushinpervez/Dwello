import { FiArrowUpRight } from 'react-icons/fi';

const PropertyInfoBox = ({
  heading,
  backgroundColor,
  textColor = 'text-text',
  buttonInfo,
  children,
}) => {
  return (
    <div className={ `${backgroundColor} p-6 rounded-2xl mx-auto grid max-w-5xl grid-cols-1 md:gap-8 gap-4 lg:grid-cols-12 border border-${backgroundColor} dark:border-primary-100` }>
      <h1 className='col-span-1 md:col-span-4 text-2xl font-bold'>{ heading }</h1>
      <div className='col-span-1 md:col-span-8'>
        <p className='text-edge md:text-2xl text-xl mb-8'>{ children }</p>
        <a
          href={ buttonInfo.link }
          className={ `inline-block ${buttonInfo.backgroundColor} ${textColor} rounded-full px-8 py-4 hover:opacity-90 md:text-xl transition-colors md:w-fit` }
        >
          { buttonInfo.text }<FiArrowUpRight className='inline w-6 h-6 ml-1' />
        </a>
      </div>
    </div>
  );
};

export default PropertyInfoBox;