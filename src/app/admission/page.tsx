'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BgPattern } from '@/components/bg-pattern';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const SocialLink = ({
  href,
  icon: Icon,
  children,
  size = 28,
  stroke='#0ea5e9',
  className = '',
}: {
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  size?: number;
  stroke?: string;
  className?: string;
}) => (
  <a
    href={href}
    target='_blank'
    className={`flex items-center text-sm gap-2 hover:text-sky-500 md:text-lg ${className}`}
  >
    <Icon className='hover:text-sky-500 mr-2' size={size} stroke={stroke} />
    {children}
  </a>
);

export default function AcademicsPage() {
  const socialLinks = [
    { icon: Facebook, label: 'thekulishschool', url: 'https://www.facebook.com/thekulishschool/' },
    { icon: Instagram, label: '@the_kulish_school', url: 'https://www.instagram.com/the_kulish_school/' },
    { icon: Linkedin, label: 'the kulish school', url:'https://www.linkedin.com/company/the-kulish-school-jaipur/' },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex flex-col'>
      {/* h-[calc(100vh-80px)] */}
        {/* <section className='relative w-full flex-1'>
          <Image
            src='/admission/hero.jpg'
            alt='Curriculum Video Thumbnail'
            fill
            className='object-fill'
            priority
          />
        </section> */}

        {/* Curriculum Overview */}
        <div className='bg-sky-600 py-12 text-center text-white'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 text-2xl'>ADMISSIONS</h3>
            <p className='text-sm md:texp-base'>
              We welcome you to visit our school, book appointment and have a conversation with our
              academic team to understand our vision and value delivery. We offer an internationally
              poised curriculum, further enhanced by advanced subjects that prepare children for the
              unforeseeable and rapidly changing future.
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
              <div className='mx-auto space-y-6 px-4 md:max-w-[60%] md:space-y-8 md:px-0'>
                <h2 className='text-center font-serif text-2xl text-gray-800 md:text-left md:text-3xl'>
                  ADMISSIONS PROCESS
                </h2>

                <div className='space-y-4'>
                  <p className='text-sm text-gray-600 md:text-lg'>
                    Our admissions process is designed to identify students who will thrive in our
                    dynamic learning environment.
                  </p>

                  <div className=''>
                    {/* <p className='text-base text-gray-600 md:text-lg'>
                      Please contact the admissions team for further details. You could book your
                      meeting{' '}
                      <a href='#' className='text-sky-500 underline hover:text-sky-600'>
                        here
                      </a>
                    </p> */}
                    <div className='mb-8'>
                      <p className='text-sm md:text-lg'>Management & Administration,</p>
                      <p className='text-sm md:text-lg mb-6'>Working hours: 9:00 AM to 4:30 PM | Sunday: Closed</p>
                      <p className='text-sm md:text-lg mb-6'>
                          Mobile No.: +91 90575 31015 <br />
                          E-mail Address: admission@thekulishschool.com</p>
                    </div>

                      <div className='mt-4 flex flex-col mb-8 w-fit mx-auto gap-3 md:gap-5 md:flex-col' >
                        {socialLinks.map((social, index) => (
                          <div key={index}>
                            <SocialLink href={social.url} icon={social.icon} className='text-[#373c42] md:justify-start'>
                              {social.label}
                            </SocialLink>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
                <div className='w-full mx-auto justify-center md:justify-start flex md:block ml-auto mr-auto'>
                        <Link target="_blank" href="https://tksj.edunexttechnologies.com/mvc/std/DynamicEnquiryForm?id=gm44E2x75eawnpF5K7VGUQ&istrue=true">
                          <Button className='mt-4 md:mr-4 px-8 p-5 w-28 md:w-36 bg-black text-md text-white hover:bg-sky-600 md:mt-0 md:text-lg'>
                            Admissions
                          </Button>
                        </Link>
                    </div>

                {/* Application Form Download Section */}
                {/* <div className='space-y-4'>
                  <div className='flex flex-col items-center gap-4 sm:flex-row'>
                    <div className='w-full bg-sky-400 px-6 py-3 text-center text-lg text-white sm:w-auto md:px-8 md:py-4 md:text-xl'>
                      Application Form
                    </div>
                    <a
                      href='#'
                      className='relative w-full overflow-hidden bg-teal-400 px-6 py-3 text-center text-lg text-white transition-colors hover:bg-teal-500 sm:w-auto md:px-8 md:py-4 md:text-xl'
                    >
                      <div className='absolute left-0 top-0 h-full w-2 bg-sky-400'></div>
                      <span className='relative z-10'>DOWNLOAD</span>
                    </a>
                  </div>

                  <div className='space-y-2 text-center text-gray-600 sm:text-left'>
                    <p className='italic text-sky-500'>[Download Application Form]</p>
                    <p className='text-sm'>and submit it to our admissions office.</p>
                    <p className='text-sm'>You can also apply online through our website.</p>
                  </div>
                </div> */}
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
      {/* <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <RegistrationForm />
        </div>
      </div> */}
    </main>
  );
}
