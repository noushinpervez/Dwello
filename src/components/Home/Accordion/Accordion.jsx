'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Dwello?',
      answer:
        "Dwello is Bangladesh's leading dedicated rental portal and expat accommodation provider. It’s a platform where tenants can easily find residential properties, furnished accommodations, or office spaces within their preferred areas, time frame, and budget. At the same time, property owners can rent out their spaces without any hassle. Our objective is clear: to make the process simple and stress-free.",
    },
    {
      question: 'How it works?',
      answer:
        'Through PropTech (property technology) we manage our property inventory and try to serve prospect tenants requirements.',
    },
    {
      question: 'What services are available at Dwello?',
      answer:
        'We provide all rental solution, e.i Residential apartment, Furnished accommodation, Service apartment, Commercial Office space and full building searching, arrange property viewing, price negotiation and helps to prepare rental agreement for owner and tenant.',
    },
    {
      question: 'How do I add my property on Dwello?',
      answer:
        'We have ‘Add Property’ options in our website. Just visit dwello-alpha.vercel.app, click on ‘Add Property’, fill up the form properly and submit.',
    },
    {
      question: 'Should I pay any listing fees?',
      answer:
        'Add Property or listing a property on Dwello website is completely free.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='relative w-full mt-12 py-12 mx-auto max-w-3xl'>
      <h3 className='mb-4 text-left lg:text-center text-3xl font-medium'>Frequently Asked Questions</h3>
      { faqData.map((faq, index) => (
        <div key={ index } className='border-b-[1px] border-b-border'>
          <button
            onClick={ () => toggleAccordion(index) }
            className='flex w-full items-center justify-between gap-4 py-6'
          >
            <span
              className={ `text-left text-lg font-medium transition-colors duration-300 ${activeIndex === index
                ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
                : 'text-text'
                }` }
            >
              { faq.question }
            </span>
            <span
              className={ `transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                }` }
              style={ { color: activeIndex === index ? 'rgb(22, 104, 227)' : 'var(--text)' } }
            >
              <FiChevronDown className='text-2xl' />
            </span>
          </button>
          <div
            className='overflow-hidden text-edge transition-all duration-300'
            style={ {
              height: activeIndex === index ? 'auto' : '0',
              marginBottom: activeIndex === index ? '24px' : '0',
            } }
          >
            <p>{ faq.answer }</p>
          </div>
        </div>
      )) }
    </section>
  );
};

export default Accordion;