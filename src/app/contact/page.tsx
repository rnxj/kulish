'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative hidden min-h-screen w-full md:block'
      >
        <Image src='/contact/hero.jpg' alt='Hero image' fill className='object-cover' priority />
      </motion.div>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}
