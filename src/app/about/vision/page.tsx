'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function VisionPage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative min-h-[800px] w-full'
      >
        <Image src='/about/hero.jpeg' alt='Hero image' fill className='object-cover' priority />
      </motion.div>

      {/* Vision Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.33, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.3 },
          { orientation: 'horizontal', start: 0, end: 0.3, position: 0.5, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.3, end: 0.5, position: 0.52 },
          { orientation: 'horizontal', start: 0.3, end: 1, position: 0.3, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.3, end: 1, position: 0.7 },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <div className='grid h-full gap-8 lg:grid-rows-2'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex items-center justify-center'
            >
              <Image
                src='/logo.png'
                alt='The Kulish School Logo'
                width={300}
                height={300}
                className='w-full max-w-[300px]'
              />
            </motion.div>
            <div></div>
          </div>

        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex h-full flex-col justify-center lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 decoration-gray-300 decoration-1 underline-offset-8'>
              Vision
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6 lg:p-8'
          >
            <p className='text-gray-800'>
            The Kulish School will empower future leaders with a focus on innovation, global
                citizenship, and compassionate caregiving-- blending the skills of futuristic
                learning and traditional Indian values. Our vision is to nurture adaptable, creative
                thinkers ready to excel in a dynamic, interconnected world.
            </p>
          </motion.div>
        </div>
        </div>
      </BgPattern>
      
    </main>
  );
}
