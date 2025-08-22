'use client';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


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

export const Footer = () => {

  const pathname = usePathname();
  const isContactUs = pathname === '/contact';
  const isAboutUs = pathname === '/about'

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/key-information', label: 'Key Information' },
    { href: '/news-events', label: 'News & Events' },
    // { href: '/parents', label: 'Parents' },
    { href: '/academics', label: 'Academics' },
    { href: '/academics/enrichment-programmes', label: 'Enrichment Programmes' },
    { href: '/academics/campus-life', label: 'Campus Life' },
    { href: '/academics/teacher-life', label: 'Training Opportunities' },
    { href: '/admission', label: 'Admission' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const sociallogo = [
    {icon: Facebook, src:"social-logo/facebook footer.svg", href: "https://www.facebook.com/thekulishschool/"},
    {icon: Instagram, src:"social-logo/instagram footer.svg", href: "https://www.instagram.com/the_kulish_school/"},
    {icon: Linkedin, src:"social-logo/linkedin footer.svg", href: "https://www.linkedin.com/company/the-kulish-school-jaipur/"},


  ]

  const socialLinks = [
    { icon: Facebook, label: 'thekulishschool', url: 'https://www.facebook.com/thekulishschool/' },
    { icon: Instagram, label: '@the_kulish_school', url: 'https://www.instagram.com/the_kulish_school/' },
    { icon: Linkedin, label: 'thekulishschool', url:'https://www.linkedin.com/company/the-kulish-school-jaipur/' },
  ];

  const footerSocialIcons = [
    // { icon: Twitter },
    { icon: Facebook, url: 'https://www.facebook.com/thekulishschool/' },
    { icon: Instagram, url: 'https://www.instagram.com/the_kulish_school/'  },
    { icon: Linkedin, url:'https://www.linkedin.com/company/the-kulish-school-jaipur/'  },
  ];

  return (
    <footer className='footer-section'>
      {/* Blue Background Section */}
      {!isContactUs && <div className='bg-sky-500 px-4 py-6 text-center text-white'>
        {/* <h2 className='mb-2 text-xl uppercase md:text-2xl'>Ready to take the next step?</h2>
        <p className='mb-6 text-sm md:mb-8 md:text-base'>
          Classes Start April 7, 2025 | Term Dates
        </p> */}

        {isAboutUs? 
        <div className='justify-items-center  py-6'>
          <div className='border-2 border-dotted text-center p-2 mb-6 text-sm rounded-xl w-fit'>Connect with us</div>
        <div className='flex text-sm md:text-lg'>
           {footerSocialIcons.map((social, index) => (
              <SocialLink
                key={index}
                href={social.url}
                icon={social.icon}
                size={48}
                stroke="#ffffff"
                className='text-white mx-6'
              />
            ))}
        </div>
        </div> :
        <></>
        }
        
      </div>}

      {/* Middle Section */}
      <div className={cn('my-8 flex flex-col px-4 py-6 text-center md:my-16 md:flex-row md:px-5 md:py-8', isContactUs? 'mb-[50%]':'')}>
        <div className='mb-8 w-full md:mb-0 md:w-1/2'>
          <Image
            src='/logo.png'
            alt='The Kulish School'
            width={300}
            height={100}
            className='mx-auto w-48 md:w-auto'
          />
        </div>
        <div className='text-center text-[#4a4a4a]'>
        {isContactUs? 
        <>
          <p className={cn('text-sm md:text-xl', !isContactUs ? 'hidden' : '')}>
            Management & Administration,
          </p>
          <p className={cn('text-sm md:text-xl mb-8', !isContactUs ? 'hidden' : '')}>
            Working hours: 9:00 AM to 4:30 PM | Sunday: Closed
          </p>
          </> :
          <>
          <p className={cn('text-sm md:text-xl')}>
            <strong>The Kulish School</strong>
          </p>
          <p className={cn('text-sm md:text-xl mb-8')}>
          INS-1, Opposite Bombay Hospital, Mahal Road, Jagatpura, Jaipur
          </p>
          </>
          }

          <p className='text-sm md:text-xl mb-6'>
            Mobile No.: +91 90575 31015 <br />
            E-mail Address:  admission@thekulishschool.com 
            
          </p>
          {!isAboutUs?
          <div className={cn('mt-4 flex flex-col w-fit mx-auto gap-3 md:gap-4', isContactUs? 'md:flex-col' : 'md:flex-row')}>
            {socialLinks.map((social, index) => (
              <div key={index}>
                <SocialLink href={social.url} icon={social.icon} className='text-[#373c42] md:text-sm justify-start'>
                  {social.label}
                </SocialLink>
              </div>
            ))}
          </div>:<></>}
          
          <div className={cn('flex w-max mx-auto md:justify-start mt-6', !isContactUs? 'hidden': '')}>
            {/* <Link target="_blank" href="https://tksj.edunexttechnologies.com/mvc/std/DynamicEnquiryForm?id=gm44E2x75eawnpF5K7VGUQ&istrue=true"> */}
            <Link href="admission/admission-enquiry">
            <Button className='mt-2 mr-4 p-5 w-24 md:w-36 bg-black text-md text-white hover:bg-sky-600 md:mt-0 md:text-lg'>
              Admissions
            </Button>
            </Link>
            {/* <Link target="_blank" href="https://dev.thekulishschool.com/career.php"> */}
            <Link href="/careers">
            <Button className='mt-2 ml-4 p-5 w-24 md:w-36 bg-black text-md text-white hover:bg-sky-600 md:mt-0 md:text-lg'>
              Careers
            </Button>
            </Link>
          </div>
        </div>
        <div className='mt-8 w-full flex justify-center md:mt-0 md:w-1/2'>
          <Image
            src='/academics/ib-world-school-logo-2-colour.png'
            alt='IB Logo'
            width={120}
            height={120}
            className='object-contain w-24 md:w-28'
          />
          <div className='w-[0.5px] bg-black self-center mx-2 md:mx-2 h-24 md:h-28'></div>
          <Image
              src='/academics/pyp-programme-logo-en.png'
              alt='IB Logo'
              className='object-contain w-60 md:w-72'
              width={280}
              height={130}
            />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col items-center w-full bg-neutral-800 px-4 py-4 text-white md:flex-row md:px-5'>
        <nav className='mb-4 flex w-full flex-wrap justify-center gap-3 text-center md:mb-0 md:ml-20 md:w-[75%] md:justify-start md:gap-5'>
           {/* <Link href='/' className='text-xs hover:underline md:text-sm'>Home</Link> */}
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className= {cn('text-xs hover:underline md:text-sm', item.label==='Home'?'w-full md:w-auto':'')}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='flex w-full flex-row items-end justify-center md:justify-end md:w-[25%]'>
          <div className='mr-4 flex flex-wrap justify-center gap-3 md:gap-4'>
            {footerSocialIcons.map((social, index) => (
              <SocialLink
                key={index}
                href={social.url}
                icon={social.icon}
                size={16}
                className='text-white'
              />
            ))}
            {/* <Button className='mt-2 bg-sky-500 text-xs text-white hover:bg-sky-600 md:mt-0 md:text-sm'>
              Call to Action
            </Button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};