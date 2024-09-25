import { FaFacebook, FaXTwitter, FaPinterest, FaYoutube, FaInstagram } from 'react-icons/fa6';

const LinkList = ({ links }) => (
  <ul className='flex space-x-8'>
    { links.map(({ href, label }) => {
      const Icon = {
        Facebook: FaFacebook,
        Twitter: FaXTwitter,
        Pinterest: FaPinterest,
        YouTube: FaYoutube,
        Instagram: FaInstagram,
      }[label];

      return Icon ? (
        <a key={ label } href={ href }>
          <Icon className='w-8 h-8 bg-primary text-white p-2 rounded-full' />
        </a>
      ) : null;
    }) }
  </ul>
);

export default LinkList;