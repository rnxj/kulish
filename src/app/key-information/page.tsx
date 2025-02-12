'use client';

import Image from 'next/image';
import Link from 'next/link';


import { BgPattern } from '@/components/bg-pattern';

export default function KeyInformationPage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src='/key-information/hero.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-4xl font-light text-[#333]'>ENHANCERS</h2>
          <h3 className='mb-5 text-xl font-normal text-[#555]'>Kulish Community Service Program</h3>
          <p className='mx-auto w-[85%] text-sm leading-relaxed text-[#666]'>
            At The Kulish School, we believe in nurturing the holistic development of our students
            through a well-rounded curriculum that includes Community, Activity, and Service (CAS).
            Aligned with the principles of the Primary Years Programme (PYP), our CAS program is
            designed to instill a sense of responsibility, teamwork, and empathy in our young
            learners. Through a variety of engaging and meaningful activities, we encourage students
            to become active, compassionate, and lifelong learners who understand the importance of
            contributing to their communities.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          {/* <div className='mb-12'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Innovation, Initiative
              <br />& Impact at The Kulish
              <br />
              School
            </h2>
          </div> */}

          {/* Content Container */}
          <div className='grid grid-cols-1 gap-8 '>
            {/* Left Column - Text */}
            {/* <div className='flex h-full flex-col justify-start space-y-6'>
              <p className='text-gray-800'>
                At The Kulish School, we believe in nurturing the holistic development of our
                students through a well-rounded curriculum that includes the '3Is'—Innovation,
                Initiative & Impact. Our '3Is' program is designed to instill a sense of
                responsibility, teamwork, and empathy in our young learners. Through a variety of
                engaging and meaningful activities, we encourage students to become active,
                compassionate, and lifelong learners who understand the importance of contributing
                to their communities.
              </p>
            </div> */}

            {/* Right Column - Cards */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {/* Innovation Card */}
              <div className='relative overflow-hidden'>
               <Link href='/key-information/Innovation'>
                <Image
                  src='/key-information/innovation.jpg'
                  alt='Innovation'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
                <div className='bg-[#3aa4b4] hover:bg-blue-600 p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>INNOVATION</h5>
                </div>
                </Link>
              </div>

              {/* Initiative Card */}
              <div className='relative overflow-hidden'>
              <Link href='/key-information/Initiative'>
                <Image
                  src='/key-information/initiative.jpg'
                  alt='Initiative'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
                <div className='bg-[#3aa4b4] hover:bg-blue-600 p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>INITIATIVE</h5>
                </div>
                </Link>
              </div>

              {/* Impact Card */}
              <div className='relative overflow-hidden'>
              <Link href='/key-information/Impact'>
                <Image
                  src='/key-information/impact.jpg'
                  alt='Impact'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
                <div className='bg-[#5cbccb] hover:bg-blue-600 p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>IMPACT</h5>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BgPattern>
    </main>
  );
}
