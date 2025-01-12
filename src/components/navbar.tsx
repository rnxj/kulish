'use client';

import { Facebook, Linkedin, Menu, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

import { Button } from './ui/button';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '/about', label: 'About Us' },
    { href: '/key-information', label: 'Key Information' },
    { href: '/news-events', label: 'News & Events' },
    { href: '/academics', label: 'Academics' },
    { href: '/admission', label: 'Admission' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <header className='sticky top-0 z-50 bg-sky-500'>
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image src='/logo.png' alt='Logo' width={100} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden items-center space-x-4 lg:flex'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='font-medium text-white transition-colors hover:text-gray-200'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons & CTA */}
          <div className='hidden items-center space-x-4 lg:flex'>
            <div className='flex items-center space-x-2'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className='rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20'
                  >
                    <Icon className='h-4 w-4' />
                  </Link>
                );
              })}
            </div>
            <Button className='bg-white text-sky-500 hover:bg-white/90'>Call to Action</Button>
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
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className='border-b border-border p-4 text-center text-lg font-semibold'>
                  Menu
                </DrawerTitle>
              </DrawerHeader>
              <div className='mt-8 flex flex-col gap-4 px-4 text-center'>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='text-foreground transition-all hover:text-sky-500'
                  >
                    {item.label}
                  </Link>
                ))}
                <div className='flex justify-center space-x-4 pt-4'>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.href}
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
                <Button className='w-full bg-sky-500 text-white hover:bg-sky-600'>
                  Call to Action
                </Button>
                <DrawerClose asChild>
                  <Button variant='outline' className='w-full rounded-full'>
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
