'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';
import { RegistrationForm } from '@/components/registration-form';

export default function AcademicsPage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex h-[calc(100vh-80px)] flex-col'>
        <section className='relative w-full flex-1'>
          <Image
            src='/admission/hero.jpg'
            alt='Curriculum Video Thumbnail'
            fill
            className='object-cover'
            priority
          />
        </section>

        {/* Curriculum Overview */}
        <div className='bg-sky-600 py-12 text-center text-white'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 text-2xl'>ADMISSIONS</h3>
            <p>
              We welcome you to visit our school, book appointment and have a conversation with our
              academic team to understand our vision and value delivery. We offer an internationally
              poised curriculum, including IB and CBSE, further enhanced by advanced subjects that
              prepare children for the unforeseeable and rapidly changing future.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className='relative'>
        <div>
          <div className='absolute left-0 right-0 top-[10%] h-[1px] w-full rotate-3 bg-sky-500' />
          <div className='absolute left-0 right-0 top-[10%] w-full border-t-2 border-dashed border-gray-200' />
        </div>

        <BgPattern
          lines={[
            { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
            { orientation: 'vertical', start: 0, end: 1, position: 0.55 },
            { orientation: 'vertical', start: 0, end: 1, position: 0.52, variant: 'dashed' },
            { orientation: 'vertical', start: 0.1, end: 0.9, position: 0.1, variant: 'dashed' },

            { orientation: 'horizontal', start: 0, end: 0.55, position: 0.2, variant: 'dashed' },
            { orientation: 'horizontal', start: 0, end: 0.55, position: 0.8, variant: 'dashed' },
          ]}
        >
          <div className='container mx-auto py-12 md:py-48'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-[4fr_3fr]'>
              {/* Content */}
              <div className='mx-auto space-y-8 md:max-w-[60%]'>
                <h2 className='font-serif text-3xl text-gray-800'>ADMISSIONS PROCESS</h2>

                <div className='space-y-4'>
                  <p className='text-lg text-gray-600'>
                    Our admissions process is designed to identify students who will thrive in our
                    dynamic learning environment.
                  </p>

                  <div className='space-y-2'>
                    <p className='text-lg text-gray-600'>
                      Please contact the admissions team for further details. You could book your
                      meeting{' '}
                      <a href='#' className='text-sky-500 hover:text-sky-600'>
                        here
                      </a>
                    </p>
                  </div>
                </div>

                {/* Application Form Download Section */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-sky-400 px-8 py-4 text-xl text-white'>Application Form</div>
                    <a
                      href='#'
                      className='relative overflow-hidden bg-teal-400 px-8 py-4 text-xl text-white transition-colors hover:bg-teal-500'
                    >
                      <div className='absolute left-0 top-0 h-full w-2 bg-sky-400'></div>
                      <span className='relative z-10'>DOWNLOAD</span>
                    </a>
                  </div>

                  <div className='space-y-2 text-gray-600'>
                    <p className='italic text-sky-500'>[Download Application Form]</p>
                    <p className='text-sm'>and submit it to our admissions office.</p>
                    <p className='text-sm'>You can also apply online through our website.</p>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div>
                <Image
                  src='/admission/illustration.png'
                  alt='Admission Image'
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </BgPattern>

        <div>
          <div className='absolute bottom-[10%] left-0 right-0 h-[1px] w-full -rotate-3 bg-sky-500' />
          <div className='absolute bottom-[10%] left-0 right-0 w-full border-t-2 border-dashed border-gray-200' />
        </div>
      </div>

      {/* Registration form */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
