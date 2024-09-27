'use client';

import { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

const ContactForm = ({ property }) => {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      recipient: property.owner,
      property: property._id,
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setWasSubmitted(true);
      } else if (res.status === 400 || res.status === 401) {
        const dataObj = await res.json();
        toast.error(dataObj.message);
      } else {
        toast.error('Error sending form');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error sending form');
    } finally {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <div>
      <p className='text-2xl mb-6'>Contact Property Manager</p>
      { !session ? (
        <p className='text-red-500'>Log in to send a message</p>
      ) : wasSubmitted ? (
        <p className='text-green-500 mb-4'>Message has been sent successfully</p>
      ) : (
        <form onSubmit={ handleSubmit }>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='appearance-none border bg-card font-light border-border rounded-xl w-full py-3 px-3 leading-tight focus:outline-offset-2 focus:outline focus:outline-primary'
              id='name'
              type='text'
              placeholder='Enter your name'
              required
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='appearance-none border bg-card font-light border-border rounded-xl w-full py-3 px-3 leading-tight focus:outline-offset-2 focus:outline focus:outline-primary'
              id='email'
              type='email'
              placeholder='Enter your email'
              required
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='phone'
            >
              Phone
            </label>
            <input
              className='appearance-none border bg-card font-light border-border rounded-xl w-full py-3 px-3 leading-tight focus:outline-offset-2 focus:outline focus:outline-primary'
              id='phone'
              type='text'
              placeholder='Enter your phone number'
              value={ phone }
              onChange={ (e) => setPhone(e.target.value) }
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='h-44 appearance-none border bg-card font-light border-border rounded-xl w-full py-3 px-3 leading-tight focus:outline-offset-2 focus:outline focus:outline-primary'
              id='message'
              placeholder='Enter your message'
              value={ message }
              onChange={ (e) => setMessage(e.target.value) }
            ></textarea>
          </div>
          <button
            className='bg-primary hover:opacity-90 font-medium text-white py-3 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center ring-1 ring-primary ring-offset-background ring-offset-2 transition-all scale-[0.98] hover:scale-[1] hover:ring-transparent active:scale-[0.96] active:ring-primary'
            type='submit'
          >
            <FaRegPaperPlane className='mr-2' /> Send Message
          </button>
        </form>
      ) }
    </div>
  );
};

export default ContactForm;