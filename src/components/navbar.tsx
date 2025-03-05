'use client';

import { cn } from '@/lib/utils';
import { ChevronDown, Facebook, Instagram, Linkedin, Menu, Twitter, Youtube, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', 
      label: 'About Us',
      submenu: [
        { href: '/about/#vision', label: 'Vision' },
        { href: '/about/#mission', label: 'Mission' },
        { href: '/about/#legacy', label: 'Our Legacy - Patrika Group' },
        { href: '/about/#leadership-team', label: 'Leadership Team' },
      ],
     },
    { href: '/key-information', label: 'Key Information' },
    { href: '/news-events', label: 'News & Events' },
    {
      href: '/academics',
      label: 'Academics',
      submenu: [
        { href: '/academics', label: 'Curriculum Overview' },
        { href: '/academics/enrichment-programmes', label: 'Enrichment Programmes' },
        { href: '/academics/campus-life', label: 'Campus Life' },
        {
          href: '/academics/teacher-life',
          label: 'Teacher Professional Life and Training Opportunities',
        },
      ],
    },
    { href: '/admission', label: 'Admission' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/thekulishschool/' },
    { icon: Instagram, url: 'https://www.instagram.com/the_kulish_school/'  },
    { icon: Linkedin, url:'https://www.linkedin.com/company/the-kulish-school-jaipur/'},
  ];

  return (
    <header
      className={cn(
        'z-50 flex items-center',
        isHome ? 'sticky top-0 lg:py-2 lg:absolute lg:left-0 lg:right-0 lg:top-10' : 'sticky top-0',
        isHome ? 'h-25 lg:h-14' : 'h-25',
        isHome
          ? 'bg-sky-500 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgb(14,165,233)_0%,rgb(14,165,233)_8%,transparent_8%,transparent_20%,rgb(14,165,233)_20%,rgb(14,165,233)_100%)]'
          : 'bg-sky-500'
      )}
    >
      {isHome && (
        <div className='absolute left-[8%] hidden lg:block'>
          <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={200} height={80} />
          </Link>
        </div>
      )}
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className={cn('flex items-center', isHome ? 'visible lg:invisible' : '')}>
            <Link href='/'>
              <Image src='/logo.png' alt='Logo' width={100} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={cn('hidden items-center space-x-8 lg:flex', isHome ? 'ml-16' : '')}>
            {menuItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className='flex items-center gap-1 font-medium text-white transition-colors hover:text-gray-200'>
                    {item.label} <ChevronDown className='h-4 w-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-sky-500 p-2'>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.href}
                        asChild
                        className='cursor-pointer text-white hover:bg-sky-600 hover:text-white focus:bg-sky-600 focus:text-white'
                      >
                        <Link href={subItem.href} className='py-2'>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className='font-medium text-white transition-colors hover:text-gray-200'
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Social Icons & CTA */}
          <div className='hidden items-center space-x-4 mr-4 md:flex md:flex-row'>
            {/* <div className='text-white text-xs border-2 rounded-full p-2'>Connect with us</div> */}
            {/* <div className='items-center flex-row space-x-2'> */}
            {/* <div className='text-white text-center text-xs mb-2 border-2 rounded-full p-1'>Connect with us</div> */}
            {/* <div className='flex items-center space-x-2'> */}
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.url}
                    target='_blank'
                    className='rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20'
                  >
                    <Icon className='h-4 w-4' />
                  </Link>
                ); 
              })}
              {/* </div> */}
            {/* </div> */}
            {/* <Button className='bg-white text-sky-500 hover:bg-white/90'>Call to Action</Button> */}
          </div>

          {/* Mobile Menu */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full border-white text-sky-500 lg:hidden'
              >
                <Menu className='h-6 w-6' />
              </Button>
            </DrawerTrigger>
            <DrawerContent className='bg-sky-500'>
              <DrawerHeader>
                <DrawerTitle className='border-b border-border p-4 text-center text-white text-lg font-bold'>
                  Menu
                </DrawerTitle>
              </DrawerHeader>
              <div className='mt-8 flex flex-col gap-4 px-4 text-center'>
                {menuItems.map((item) =>
                  item.submenu ? (
                    <div key={item.href} className='flex flex-col gap-2'>
                      <span className='font-bold bg-white text-sky-500 text-foreground'>{item.label} <ChevronDown className='inline w-4 h-4'/></span>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setOpen(false)}
                          className='text-sm text-muted-foreground transition-all text-white hover:text-sky-800'
                        >
                          {subItem.label}
                          
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className='text-foreground font-bold transition-all bg-white text-sky-500'
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className='flex justify-center space-x-4 pt-4'>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.url}
                        target='_blank'
                        className='rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-sky-500 hover:text-white'
                        onClick={() => setOpen(false)}
                      >
                        <Icon className='h-4 w-4' />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <DrawerFooter>
                {/* <Button className='w-full bg-sky-500 text-white hover:bg-sky-600'>
                  Call to Action
                </Button> */}
                <DrawerClose asChild>
                  <Button variant='outline' className='w-full rounded-full'>
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <nav className='items-center my-3 mx-auto sm:hidden w-full justify-center text-center flex flex-row flex-wrap space-x-3'>
            {menuItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className='flex items-center gap-1 py-1 font-thin text-sm text-white transition-colors hover:text-gray-200'>
                    {item.label} <ChevronDown className='h-4 w-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-sky-500 p-2'>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.href}
                        asChild
                        className='cursor-pointer text-white text-sm hover:bg-sky-600 hover:text-white focus:bg-sky-600 focus:text-white'
                      >
                        <Link href={subItem.href} className='py-2'>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className='font-thin text-sm text-white transition-colors hover:text-gray-200'
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
      </div>
    </header>
  );
};
