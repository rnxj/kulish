'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className='md:min-h-screen'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative min-h-[500px] w-full md:min-h-screen'
      >
        <Image src='/contact/hero.jpg' alt='Hero image' fill className='object-cover' priority />
      </motion.div>

      {/* <div className='py-8 text-center'>
        <h2 className='text-2xl font-bold text-gray-800'>Contact Us</h2>
        <p className='mt-2 text-gray-600'>
          Call us at: <a href='tel:+919057531015'>+91 90575 31015</a>
        </p>
      </div> */}

      {/* Contact Form Section */}
      {/* <ContactForm /> */}
    </main>
  );
}
