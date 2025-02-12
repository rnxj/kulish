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

      {/* Mission Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.17, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex h-full flex-col lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 decoration-gray-300 decoration-1 underline-offset-8'>
              Mission
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full mt-12 flex-col space-y-6 lg:p-8'
          >
            <p className='text-gray-800'>
                  The Kulish School is committed to shaping the future by preparing students to
                  excel in a globally connected India. Our mission is defined by the acronym
                  L.E.A.D.E.R.S:
                </p>

                <ul className='space-y-4 text-gray-800'>
                  <li>
                    <span className='font-bold'>Leadership Skills:</span> Cultivating effective,
                    compassionate leadership abilities in our students.
                  </li>
                  <li>
                    <span className='font-bold'>Excellence in Academics:</span> Ensuring academic
                    rigour and excellence in education.
                  </li>
                  <li>
                    <span className='font-bold'>Awareness:</span> Promoting cultural awareness and
                    sensitivity.
                  </li>
                  <li>
                    <span className='font-bold'>Diversity:</span> Embracing diverse backgrounds to
                    enrich the learning experience.
                  </li>
                  <li>
                    <span className='font-bold'>Ethical Citizenship:</span> Instilling principles
                    of ethical behaviour and responsible citizenship.
                  </li>
                  <li>
                    <span className='font-bold'>Rich Cultural Heritage:</span> Integrating India's
                    rich cultural heritage into our educational approach.
                  </li>
                  <li>
                    <span className='font-bold'>Social Contribution:</span> Preparing students to
                    actively contribute to society, both locally and globally.
                  </li>
                </ul>
          </motion.div>
        </div>
      </BgPattern>
    </main>
  );
}
