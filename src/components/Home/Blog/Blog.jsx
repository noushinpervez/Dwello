'use client';

import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '11 Steps to Follow When Renting an Apartment',
      description: 'Apartment hunting can be exciting, yet overwhelming. Simplify the task by getting organized.',
      href: '#',
      imageUrl: 'https://www.belleproperty.com/media/soqfrzse/bp-secure-a-home-in-a-rental-crisis.png?mode=max&width=800&rnd=133601635627170000',
    },
    {
      id: 2,
      title: 'How Much Should You Spend on Rent?',
      description: 'Let us know your income, expenses, and desired location. We’ll help you find the right rent budget.',
      href: '#',
      imageUrl: 'https://propvue.azureedge.net/belle-cache/d/a/5/0/c/d/da50cd88a732dadd923efc1a99c54eb795c7065a.png',
    },
    {
      id: 3,
      title: '9 Simple Ways to Style Your Rental Property',
      description: 'As a tenant, there are rules around what you can and can’t do to the property you are renting.',
      href: '#',
      imageUrl: 'https://propvue.azureedge.net/belle-cache/b/2/1/b/8/4/b21b846b9e0f877852b8b810fb2a431c07c2650b.jpg',
    },
  ];

  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-12'>
      <div className='w-full flex justify-center flex-col py-28 px-16 md:p-28 m-auto gap-8 h-full'
        style={ {
          backgroundImage:
            'radial-gradient(var(--primary-100) 13%, transparent 0), radial-gradient(var(--primary-100) 13%, transparent 0)',
          backgroundPosition: '5px 5px, 17px 18px',
          backgroundSize: '24px 26px',
        } }>
        <h1 className='font-bold text-5xl md:text-6xl'>
          Renting <span className='line underline decoration-[#1668e35e] decoration-[0.5em]'>tips</span> & <span className='underline decoration-[#001668e3] underline-offset-[0.1em] decoration-[0.2em]'>insights</span>
        </h1>
        <p className='font-medium text-lg'>
          Advice from our experts to help you along your <span className='underline text-primary decoration-[#a2c4f6] decoration-wavy decoration-[3px] underline-offset-4'>rental journey</span>.
        </p>
      </div>
      <div className='overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden px-2 md:px-16 gap-12 flex md:grid md:grid-cols-1 lg:grid-cols-1'>
        <div className='flex flex-nowrap gap-12 md:flex-col lg:flex-col'>
          { blogPosts.map((post) => (
            <Link
              key={ post.id }
              href={ post.href }
              className='flex-shrink-0 group w-full md:w-full lg:w-full grid grid-cols-1 items-center lg:grid-cols-12 gap-6'
            >
              <Image
                loader={ () => post.imageUrl }
                className='col-span-1 md:col-span-6 h-48 w-48 object-cover group-hover:border-4 group-hover:scale-95 transition-all duration-500 ease-in-out group-hover:border-primary'
                style={ { clipPath: 'polygon(50% 2.45%, 100% 38.77%, 100% 100%, 0% 99.55%, 0% 38.77%)' } }
                src={ post.imageUrl }
                alt={ post.title }
                sizes='100vw'
                height={ 0 }
                width={ 0 }
              />
              <div className='space-y-3 text-lg col-span-1 md:col-span-6'>
                <h5 className='font-semibold group-hover:underline hover:underline-offset-4 text-xl'>
                  { post.title }
                </h5>
                <p>{ post.description }</p>
              </div>
            </Link>
          )) }
        </div>
      </div>
    </section>
  );
};

export default Blog;