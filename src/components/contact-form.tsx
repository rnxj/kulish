'use client';

import { Asterisk } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

type QueryType = 'general' | 'support' | 'business';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: QueryType;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    queryType: 'general',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='relative'>
      <div className='absolute left-0 right-0 top-0 h-[1px] w-full -rotate-2 bg-sky-500' />
      <div className='absolute left-0 right-0 top-0 w-full border-t-2 border-dashed border-gray-200' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto my-16 max-w-4xl px-4 py-16'
      >
        <div className='relative pt-16'>
          <h2 className='absolute left-1/2 top-1 -z-10 -translate-x-1/2 whitespace-nowrap font-serif text-5xl font-light text-sky-500 lg:-left-60 lg:top-4 lg:translate-x-0 lg:translate-y-0 lg:text-9xl'>
            GET IN TOUCH
          </h2>
          <h3 className='absolute -left-40 top-36 -z-10 font-serif text-9xl font-light text-sky-500'>
            <Asterisk className='text-sky-500' size={80} />
          </h3>
          <div className='relative'>
            <form
              onSubmit={handleSubmit}
              className='space-y-6 rounded-3xl border-4 border-sky-500 bg-white/70 p-8 backdrop-blur-sm'
            >
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
                    First name*
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    required
                    className='mt-1 w-full border-b border-gray-300 py-2 outline-none focus:border-sky-500'
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
                    Last name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className='mt-1 w-full border-b border-gray-300 py-2 outline-none focus:border-sky-500'
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email address*
                  </label>
                  <input
                    type='email'
                    id='email'
                    required
                    className='mt-1 w-full border-b border-gray-300 py-2 outline-none focus:border-sky-500'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor='queryType' className='block text-sm font-medium text-gray-700'>
                    Query type
                  </label>
                  <select
                    id='queryType'
                    className='mt-1 w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-sky-500'
                    value={formData.queryType}
                    onChange={(e) =>
                      setFormData({ ...formData, queryType: e.target.value as QueryType })
                    }
                  >
                    <option value='general'>General Inquiry</option>
                    <option value='support'>Support</option>
                    <option value='business'>Business</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                  Message*
                </label>
                <textarea
                  id='message'
                  required
                  rows={1}
                  className='mt-1 w-full resize-none border-b border-gray-300 py-2 outline-none focus:border-sky-500'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder='Type your message here'
                />
              </div>

              <button
                type='submit'
                className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-sky-500 bg-white px-8 py-2 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <div className='absolute bottom-0 left-0 right-0 h-[1px] w-full rotate-2 bg-sky-500' />
      <div className='absolute bottom-0 left-0 right-0 w-full border-t-2 border-dashed border-gray-200' />
    </div>
  );
}
