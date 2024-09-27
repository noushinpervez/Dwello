import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';
import { FaFacebook, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const PropertyShare = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

  return (
    <>
      <p className='text-2xl text-center pt-2'>Share This Property</p>
      <div className='flex gap-3 items-center justify-center pb-6'>
        <FacebookShareButton
          url={ shareUrl }
          quote={ property.name }
          hashtag={ `#${property.type.replace(/\s/g, '')}ForRent` }
        >
          <FaFacebook size={ 40 } />
        </FacebookShareButton>

        <TwitterShareButton
          url={ shareUrl }
          title={ property.name }
          hashtags={ [`${property.type.replace(/\s/g, '')}ForRent`] }
        >
          <FaXTwitter size={ 40 } />
        </TwitterShareButton>

        <WhatsappShareButton
          url={ shareUrl }
          title={ property.name }
          separator=':: '
        >
          <FaWhatsapp size={ 40 } />
        </WhatsappShareButton>

        <EmailShareButton
          url={ shareUrl }
          subject={ property.name }
          body={ `Check out this property listing: ${shareUrl}` }
        >
          <MdEmail size={ 40 } />
        </EmailShareButton>
      </div>
    </>
  );
};

export default PropertyShare;