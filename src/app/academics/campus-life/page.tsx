'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import { BgPattern } from '@/components/bg-pattern';
import { Button } from '@/components/ui/button';

export default function CampusLifePage() {
  const academicPrograms = [
    {
      title: 'MODERN CLASSROOMS',
      description: 'Equipped with the latest technology to enhance learning experiences.',
      image: '/campus-life/carousel/main-1.jpg',
      logo: '/campus-life/carousel/logo-1.png',
    },
    {
      title: 'LIBRARY AND MEDIA CENTER',
      description: 'A resource-rich environment for research and study.',
      image: '/campus-life/carousel/main-2.jpg',
      logo: '/campus-life/carousel/logo-2.png',
    },
    {
      title: 'SCIENCE AND STEM LABS',
      description: 'Cutting-edge facilities for hands-on experiments and technological learning.',
      image: '/campus-life/carousel/main-3.jpg',
      logo: '/campus-life/carousel/logo-3.png',
    },
    {
      title: 'SPORTS FACILITIES',
      description: 'Including fields, and courts, for various athletic activities.',
      image: '/campus-life/carousel/main-4.jpg',
      logo: '/campus-life/carousel/logo-4.png',
    },
    {
      title: 'ARTS STUDIOS',
      description: 'Spaces dedicated to visual arts, music, dance, and theater.',
      image: '/campus-life/carousel/main-5.jpg',
      logo: '/campus-life/carousel/logo-5.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentIndex + i) % academicPrograms.length);
    }
    return indices;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? academicPrograms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % academicPrograms.length);
  };

  const upcomingEvents = [
    {
      date: { day: '17', month: 'OCT' },
      title: 'POCSO ACT Awareness Session',
      time: '1:00 pm - 5:00 pm',
      location: 'The Kulish School',
    },
    {
      date: { day: '26', month: 'OCT' },
      title: 'Cyber Safety Session',
      time: '2:00 pm - 6:00 pm',
      location: 'The Kulish School',
    },
    {
      date: { day: '5', month: 'NOV' },
      title: 'First Aid and Safety of Children Session',
      time: '11:00 am - 3:00 pm',
      location: 'The Kulish School',
    },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex h-[calc(100vh-80px)] flex-col'>
        <section className='relative w-full flex-1'>
          <Image
            src='/campus-life/hero.jpg'
            alt='Curriculum Video Thumbnail'
            fill
            className='object-cover'
            priority
          />
        </section>

        {/* Campus Life Overview */}
        <div className='bg-sky-600 py-12 text-center text-white'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 font-serif text-2xl uppercase'>Campus Life</h3>
            <p>
              Our vibrant campus life includes state-of-the-art facilities, green spaces, and a
              variety of activities to engage students beyond the classroom. We believe in creating
              a supportive and dynamic environment where students can thrive.
              <br />
              Our campus features:
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className='relative flex flex-col items-start justify-center p-4 md:p-12'>
        <Image
          src='/news-events/grid.png'
          alt='Grid Background'
          fill
          className='object-cover opacity-90'
        />
        <div className='relative flex w-full items-center justify-center'>
          <Button variant='secondary' size='icon' onClick={handlePrevious}>
            <ArrowLeft className='h-4 w-4' />
          </Button>
          <div className='mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-3'>
            {getVisibleIndices().map((index) => {
              const program = academicPrograms[index];
              return (
                <motion.div
                  key={`${program.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='overflow-hidden bg-white shadow-md'
                >
                  <div className='relative h-96'>
                    <Image src={program.image} alt={program.title} fill className='object-cover' />
                  </div>
                  <div className='flex gap-4 p-4'>
                    <div>
                      <h5 className='mb-2 font-medium'>{program.title}</h5>
                      <p className='mb-2 text-xs text-gray-600'>{program.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <Button variant='secondary' size='icon' onClick={handleNext}>
            <ArrowRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Clubs and Societies */}
      <div className='relative'>
        <div>
          <div className='absolute left-0 right-0 top-[10%] h-[1px] w-full -rotate-3 bg-sky-500' />
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
              <div className='mx-auto space-y-8 md:max-w-[60%]'>
                <h2 className='font-serif text-3xl text-gray-800 decoration-gray-300 decoration-1 underline-offset-8'>
                  Clubs & Societies
                </h2>

                <p className='text-lg text-gray-600'>
                  At The Kulish School, students can join various clubs designed to foster personal
                  growth and development. From the Personality Development Club, Debate Club, and
                  Science Club to the Art Club and more, these clubs offer enriching experiences
                  that help students expand their skills and engage in collaborative learning.
                </p>

                <p className='text-sm font-bold text-gray-600'>
                  More details will be updated soon! Stay tuned for a full list of exciting club
                  activities.
                </p>
              </div>
              {/* Image */}
              <div>
                <Image
                  src='/campus-life/clubs.jpg'
                  alt='Clubs and Societies Image'
                  width={600}
                  height={400}
                  className='h-[450px] w-full rounded-2xl object-cover'
                />
              </div>
            </div>
          </div>
        </BgPattern>

        <div>
          <div className='absolute bottom-[10%] left-0 right-0 h-[1px] w-full rotate-3 bg-sky-500' />
          <div className='absolute bottom-[10%] left-0 right-0 w-full border-t-2 border-dashed border-gray-200' />
        </div>
      </div>
    </main>
  );
}
