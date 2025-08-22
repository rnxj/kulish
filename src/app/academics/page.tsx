'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import { BgPattern } from '@/components/bg-pattern';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function VideoPlaySVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width='100%'
      height='100%'
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: '-webkit-optimize-contrast',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox='0 0 200.63 200.63'
    >
      <defs>
        <style>{'.fil0{fill:#0098da;fill-rule:nonzero}'}</style>
      </defs>
      <g id='Layer_x0020_1'>
        <g id='_2368928980928'>
          <path
            d='M100.31 0C45 0 0 45 0 100.31s45 100.31 100.31 100.31 100.31-45 100.31-100.31S155.62 0 100.31 0m0 192.79c-50.99 0-92.48-41.48-92.48-92.48 0-50.99 41.48-92.48 92.48-92.48 50.99 0 92.48 41.48 92.48 92.48 0 50.99-41.49 92.48-92.48 92.48'
            className='fil0'
          />
          <path
            d='M147.7 27.83C107.73 1.7 53.96 12.95 27.83 52.92s-14.88 93.74 25.09 119.87 93.74 14.88 119.87-25.09 14.88-93.74-25.09-119.87m-90.49 138.4C20.86 142.46 10.62 93.56 34.39 57.21s72.67-46.59 109.02-22.82 46.59 72.67 22.82 109.02S93.56 190 57.21 166.23'
            className='fil0'
          />
          <path
            d='M42.55 62.44a3.92 3.92 0 0 0-5.35 1.43 72.6 72.6 0 0 0-8.65 23.76c-.38 2.13 1.05 4.16 3.18 4.54q.345.06.69.06a3.91 3.91 0 0 0 3.85-3.24 64.9 64.9 0 0 1 7.72-21.21 3.92 3.92 0 0 0-1.43-5.35zM172.92 93.99a3.913 3.913 0 0 0-4.24-3.56 3.913 3.913 0 0 0-3.56 4.24c1.16 13.36-1.76 26.56-8.47 38.17a3.92 3.92 0 0 0 6.79 3.92c7.51-13.01 10.79-27.8 9.49-42.77zM31.35 96.16a3.92 3.92 0 0 0-3.92 3.92v.24a3.92 3.92 0 1 0 7.84 0v-.24a3.92 3.92 0 0 0-3.92-3.92M170.78 81.69l-.07-.25a3.92 3.92 0 0 0-7.57 2.03l.06.21a3.915 3.915 0 0 0 4.79 2.79c2.09-.55 3.34-2.7 2.79-4.79zM134.72 87.4 112.4 74.51c-.23-.15-.45-.29-.66-.41L89.48 61.25a14.87 14.87 0 0 0-8.24-2.47c-8.25 0-14.96 6.71-14.96 14.96v53.17c0 .17.01.33.03.49.08 2.45.77 4.86 2.01 6.99 2.66 4.6 7.62 7.45 12.94 7.45 2.62 0 5.2-.7 7.47-2.01l23.02-13.29c.12-.07.24-.15.35-.23l22.47-12.97c2.35-1.31 4.3-3.24 5.65-5.59 4.1-7.13 1.63-16.27-5.49-20.36zm-1.3 16.46a7 7 0 0 1-2.69 2.66l-.06.03-22.86 13.2c-.12.07-.24.14-.35.23l-22.67 13.09c-1.08.63-2.31.96-3.55.96-2.53 0-4.89-1.36-6.16-3.54a7.07 7.07 0 0 1-.96-3.56c0-.14-.01-.28-.02-.42V73.76c0-3.93 3.2-7.13 7.13-7.13 1.43 0 2.8.42 3.98 1.21.08.05.15.1.23.15l22.38 12.92c.13.07.25.15.37.23.06.04.13.08.2.12l22.42 12.94c1.64.94 2.81 2.47 3.31 4.29.49 1.82.25 3.73-.7 5.37'
            className='fil0'
          />
        </g>
      </g>
    </svg>
  );
}
export default function AcademicsPage() {
  const academicPrograms = [
    // {
    //   title: 'Early Years',
    //   description:
    //     'At our school, the Early Years curriculum provides a nurturing and stimulating environment for young learners, fostering their natural curiosity and love for learning. We emphasize',
    //   image: '/academics/carousel/main-4.jpg',
    //   logo: '/academics/carousel/logo-1.png',
    //   href: '/stages/early-years',
    // },
    {
      title: 'Primary Years Programme',
      description:
        'The Primary School, offering international curriculum caters to students from Nursery to Grade 5. Our curriculum covers languages, social studies, mathematics, science, arts, and physical education, providing ',
      // image: '/academics/carousel/main-2.jpg',
      image: '/academics/carousel/main-4.jpg',
      logo: '/academics/carousel/logo-2.png',
      href: '/stages/primary-school',
    },
    {
      title: 'Middle Years',
      description:
        'The Middle Years curriculum (national and international) is designed to give the learners a robust and rigorous academic learning experience. The learners will be exposed to various disciplines',
      image: '/academics/carousel/main-3.jpg',
      logo: '/academics/carousel/logo-3.png',
      href: '/stages/middle-school',
    },
  ];

  const [order, setOrder] = useState([0, 1]); //2

  const handlePrevious = () => {
    setOrder((prev) => [prev[1], prev[2], prev[0]]);
  };

  const handleNext = () => {
    setOrder((prev) => [prev[2], prev[0], prev[1]]);
  };

  return (
    <main className='min-h-screen'>
      {/* Hero Video Section */}
      <section className='relative h-[70vh] w-full'>
        <Image
          src='/academics/hero.jpg'
          alt='Curriculum Video Thumbnail'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center text-white'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='mb-4 h-16 w-16 rounded-full bg-white/20 p-0 hover:bg-white/30 [&_svg]:h-full [&_svg]:w-full'
              >
                <VideoPlaySVG />
              </Button>
            </DialogTrigger>
            <DialogContent className='p-0 sm:max-w-[800px]'>
              <DialogTitle className='hidden'>
                Unlock Global Potential with a Balanced Curriculum
              </DialogTitle>
              <video
                controls
                autoPlay
                className='h-full w-full'
                src='/academics/what_is_your_curriculum.mp4'
              />
            </DialogContent>
          </Dialog>
          <h3 className='mb-4 text-2xl font-medium'>
            Unlock Global Potential with a Balanced Curriculum
          </h3>
          <p className='max-w-3xl px-4'>
            Experience a curriculum that combines the best of National and International Boards,
            fostering critical thinking and creativity. At The Kulish School, we prepare students
            for higher education and a successful future.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <BgPattern
        className='bg-sky-600 py-12 text-center text-white'
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='mx-auto max-w-4xl px-4'>
          <h3 className='mb-4 text-2xl font-medium uppercase'>Academics</h3>
          <div className='flex justify-center mb-4'>
            <Image
              src='/academics/ib.png'
              alt='IB Logo'
              className='object-contain items-center pr-2 border-r-[1px] border-white'
              width={85}
              height={85}
            />
            <Image
              src='/academics/pyp-programme-logo-en.png'
              alt='IB Logo'
              className='object-contain items-center pl-2'
              width={200}
              height={90}
            />
          </div>
          <p className='text-sm md:text-base'>
            The Kulish School offers a balanced curriculum that combines the best of National and
            International Boards. Our curriculum is designed to foster critical thinking,
            creativity, and a love of learning. We provide a comprehensive education that prepares
            students for higher education and future careers.
          </p>
          <p className='text-sm md:text-base mt-2'>
            The Kulish School is a Candidate School for the IB Primary Years Programme (PYP). This school ispursuing authorization as an IB World School.
          </p>
        </div>
      </BgPattern>

      {/* Academic Programs */}
      <div className='mx-4 flex items-center justify-center'>
        <Button variant='secondary' size='icon' onClick={handlePrevious}>
          <ArrowLeft className='h-4 w-4' />
        </Button>
        <div className='mx-auto my-24 grid max-w-5xl gap-12 px-4 md:grid-cols-2'>
          {order.map((index) => {
            const program = academicPrograms[index];
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden bg-white font-serif shadow-md'
              >
                <div className='relative h-96'>
                  <Image src={program.image} alt={program.title} fill className='object-cover' />
                </div>
                <div className='flex gap-4 p-4'>
                  <div className='flex-shrink-0'>
                    <Image
                      src={program.logo}
                      alt={`${program.title} Icon`}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h5 className='mb-2 font-medium'>{program.title}</h5>
                    <p className='mb-2 text-xs text-gray-600'>{program.description}</p>
                    <Button variant='link' className='p-0 text-sky-600'>
                      <a href={program.href}>Read More</a>
                    </Button>
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

      {/* New Age Content Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.58, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.6 },
          { orientation: 'vertical', start: 0.1, end: 0.9, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 0.6, position: 0.3, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 md:pr-24 lg:grid-cols-[2fr_1fr]'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mx-auto flex h-full max-w-sm flex-col justify-center space-y-6'
          >
            <h2 className='font-serif text-2xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8 md:text-4xl'>
              New-Age Content
            </h2>

            <p className='text-sm text-gray-800 md:text-base'>
            As we embrace the transformative impact of AI and automation in the job market, it's crucial to prepare our students with the skills and opportunities needed. The Kulish School, in collaboration with various local and global partners, aims to equip students with the skills and knowledge necessary for the future. By combining traditional learning facets, we can ensure that our students are empowered to thrive in the age of AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center'
          >
            <Image
              src='/academics/new-age1.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[500px] w-[500px] rounded-2xl object-cover'
            />
          </motion.div>
        </div>
      </BgPattern>

      {/* Bento Grid */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.58, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.6 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.1 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 0.6, position: 0.5, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.6, end: 1, position: 0.75, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 md:pr-24 lg:grid-cols-[2fr_1fr]'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mx-auto flex max-w-2xl flex-col justify-center space-y-6'
          >
            <Image
              src='/academics/bento/4.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
            <Image
              src='/academics/bento/5.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center justify-center'
          >
            <Image
              src='/academics/bento/6.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[400px] w-[600px] rounded-2xl object-cover'
            />
            <div className='mb-12 mt-12 text-sm md:mb-0 md:text-base'>
              Our mission is to empower children for the future by integrating future-oriented
              subjects, innovative pedagogical approaches, and advanced evaluation techniques into
              the curriculum.
            </div>
          </motion.div>
        </div>
      </BgPattern>
    </main>
  );
}
