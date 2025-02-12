'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AboutPage() {
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

      

     

      {/* The Patrika Group Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.67, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[2fr_1fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6 lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Our Legacy - <br/>
              The Patrika Group
            </h2>

            <p className='text-gray-800'>
              The Kulish School is associated with the Patrika Group, one of the most widely
              recognized and accomplished media houses in the world. The Patrika Group is dedicated
              to democracy and promotes cherished values enshrined in the Indian Constitution.
              Forbes describes it as "Keeping readers above advertisers," The New York Times calls
              it "Civic-minded hyper-local with large circulation," and a Wharton University article
              describes it as a "Publishing House with pan-India presence." It is among the three
              most trusted newspapers according to a BBC-Reuters survey and among Asia's five top
              community newspapers per AMIC UNESCO.
            </p>

            <p className='text-gray-800'>
              The Patrika Group was founded by the late Karpoor Chandra 'Kulish', a renowned Vedic
              scholar and entrepreneur who revived the scientific aspects of ancient Indian
              scriptures. He believed education was the "mightiest divine weapon" to destroy
              ignorance and that true knowledge invites enlightenment about oneself and the world
              around us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex items-center justify-center'
            style={{
              backgroundImage: 'url(/about/bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image
              src='/about/patrika-group.png'
              alt='Patrika Group Logo'
              width={400}
              height={400}
              className='w-full max-w-[400px]'
            />
          </motion.div>
        </div>
      </BgPattern>
    </main>
  );
}
