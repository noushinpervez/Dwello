import StickyImage from './StickyImage';
import OverlayCopy from './Overlay';

const IMG_PADDING = 3;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <section style={ { paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING } }>
      <div className='relative min-h-[150vh]'>
        <StickyImage imgUrl={ imgUrl } />
        <OverlayCopy heading={ heading } subheading={ subheading } />
      </div>
      <div className='pt-16'>{ children }</div>
    </section>
  );
};

export default TextParallaxContent;