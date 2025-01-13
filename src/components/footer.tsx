import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const SocialLink = ({
  href,
  icon: Icon,
  children,
  size = 18,
  className = '',
}: {
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  size?: number;
  className?: string;
}) => (
  <a
    href={href}
    target='_blank'
    className={`flex items-center justify-center gap-2 text-sm hover:text-sky-500 md:text-base ${className}`}
  >
    <Icon className='hover:text-sky-500' size={size} />
    {children}
  </a>
);

export const Footer = () => {
  const menuItems = [
    { href: '/about', label: 'About Us' },
    { href: '/key-information', label: 'Key Information' },
    { href: '/news-events', label: 'News & Events' },
    { href: '/parents', label: 'Parents' },
    { href: '/admission', label: 'Admission' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'thekulishschool' },
    { icon: Instagram, label: '@the_kulish_school' },
    { icon: Linkedin, label: 'the kulish school' },
  ];

  const footerSocialIcons = [
    { icon: Twitter },
    { icon: Facebook },
    { icon: Youtube },
    { icon: Linkedin },
  ];

  return (
    <footer className='footer-section'>
      {/* Blue Background Section */}
      <div className='bg-sky-500 px-4 py-6 text-center text-white'>
        <h2 className='mb-2 text-xl uppercase md:text-2xl'>Ready to take the next step?</h2>
        <p className='mb-6 text-sm md:mb-8 md:text-base'>Classes Start June 3 | Term Dates</p>
        <Button size='lg' className='rounded-none text-sm md:text-base'>
          REQUEST INFO
        </Button>
      </div>

      {/* Middle Section */}
      <div className='my-8 flex flex-col px-4 py-6 text-center md:my-16 md:flex-row md:px-5 md:py-8'>
        <div className='mb-8 w-full md:mb-0 md:w-1/2'>
          <Image
            src='/logo.png'
            alt='The Kulish School'
            width={300}
            height={100}
            className='mx-auto w-48 md:w-auto'
          />
        </div>
        <div className='text-center text-[#4a4a4a] md:text-left'>
          <p>
            <strong>The Kulish School,</strong>
          </p>
          <p className='text-sm md:text-base'>
            INS-1, Opposite Bombay Hospital, Mahal Road, Jagatpura, Jaipur
          </p>
          <p className='text-sm md:text-base'>
            <strong>E-mail Address:</strong> enquiry@thekulishschool.com <br />
            <strong>Mobile No.:</strong> +91 90575 31015
          </p>
          <div className='mt-4 flex flex-col justify-center gap-3 md:flex-row md:gap-5'>
            {socialLinks.map((social, index) => (
              <span key={index}>
                <SocialLink href='#' icon={social.icon} className='text-[#373c42] md:justify-start'>
                  {social.label}
                </SocialLink>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col items-center bg-neutral-800 px-4 py-4 text-white md:flex-row md:px-5'>
        <nav className='mb-4 flex w-full flex-wrap justify-center gap-3 text-center md:mb-0 md:ml-20 md:w-[55%] md:justify-start md:gap-5'>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className='text-xs hover:underline md:text-sm'>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='flex w-full flex-row md:w-[45%]'>
          <div className='mx-auto flex flex-wrap justify-center gap-3 md:gap-4'>
            {footerSocialIcons.map((social, index) => (
              <SocialLink
                key={index}
                href='#'
                icon={social.icon}
                size={16}
                className='text-white'
              />
            ))}
            <Button className='mt-2 bg-sky-500 text-xs text-white hover:bg-sky-600 md:mt-0 md:text-sm'>
              Call to Action
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
