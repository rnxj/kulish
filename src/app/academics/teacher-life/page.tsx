'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import { BgPattern } from '@/components/bg-pattern';

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
      title: 'SCIENCE AND COMPUTER LABS',
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

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex h-[calc(100vh-80px)] flex-col'>
        <section className='relative w-full flex-1'>
          <Image
            src='/teacher-life/hero.jpg'
            alt='Curriculum Video Thumbnail'
            fill
            className='object-cover'
            priority
          />
        </section>

        {/* Campus Life Overview */}
        <div className='bg-sky-600 py-12 text-center text-white'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 font-serif text-2xl uppercase'>
              TEACHER PROFESSIONAL LIFE AND
              <br />
              TRAINING OPPORTUNITIES
            </h3>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.05 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.96, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.43, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.41 },
          { orientation: 'horizontal', start: 0, end: 0.41, position: 0.8 },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[3fr_4fr]'>
          <div className='mr-8 grid h-full gap-8 lg:grid-rows-2'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex items-center justify-end'
            >
              <h2 className='text-right font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                Teacher
                <br /> Professional
                <br /> Development
                <br /> Program
              </h2>
            </motion.div>
            <p className='ml-auto w-2/3 text-right text-gray-800'>
              At The Kulish School (TKS), we prioritize faculty development through a comprehensive
              and multifaceted approach. Our strategy is intricately linked to the overall school
              professional development plan, ensuring that our faculty's growth aligns with the
              school's mission and goals. Here's an elaborate look at our approach:
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6'
          >
            <p className='text-gray-800'>
              <strong>IN-HOUSE WORKSHOPS BY RENOWNED EXPERTS</strong>
              <br />
              TKS hosts regular in-house workshops conducted by distinguished experts in the field
              of education. These workshops cover a wide range of topics, from innovative teaching
              methods to the latest educational technologies. By bringing experts to our staff, we
              provide immediate and relevant professional development that can be applied in the
              classroom.
            </p>

            <p className='text-gray-800'>
              <strong>Visiting Consultants</strong>
              <br />
              We invite consultants for specialized training and insights. These consultants work
              closely with our staff, offering tailored advice and strategies to address specific
              needs and challenges. This personalized approach helps our teachers refine their
              skills and adopt best practices from leading educators around the world.
            </p>

            <p className='text-gray-800'>
              <strong>E-Learning Opportunities</strong>
              <br />
              TKS offers a variety of e-learning opportunities, allowing our staff to engage in
              professional development at their own pace. These online courses and webinars cover a
              broad spectrum of subjects, ensuring that our staff remains up-to-date with current
              trends and advancements in education.
            </p>

            <p className='text-gray-800'>
              <strong>Future Plans: Teacher Exchange Programmes</strong>
              <br />
              Looking ahead, TKS plans to launch teacher exchange programs with schools across the
              nation. These programs will enable our teachers to experience different educational
              environments, learn from diverse practices, and bring back innovative ideas to enhance
              our own teaching and learning practices. The exchange programs aim to foster
              collaboration, cultural understanding, and the sharing of best practices on a national
              level.
            </p>
          </motion.div>
        </div>
      </BgPattern>

      {/* Principles */}
      <BgPattern
        lines={[
          { orientation: 'vertical', start: 0, end: 1, position: 0.2 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.11, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.34, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.58, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.79, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.84, variant: 'dashed' },
        ]}
        className='my-8'
      >
        <div className='relative mx-auto overflow-hidden px-4 py-12 md:px-32 lg:px-60'>
          <div className='space-y-16'>
            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>01/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>Growing Organically</h2>
                <p className='text-gray-600'>
                  We believe in nurturing our staff from within. By investing in their continuous
                  development, we ensure that our educators grow alongside our institution.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>02/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>Harnessing Potential</h2>
                <p className='text-gray-600'>
                  We recognize the potential of our educators and are committed to helping them
                  realize and enhance their capabilities. This involves providing them with the
                  resources, support, and opportunities they need to excel.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>03/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>
                  Capacity Building from Within
                </h2>
                <p className='text-gray-600'>
                  Our approach focuses on developing internal capacity. By strengthening our staff's
                  skills and knowledge, we build a robust educational community that can sustain and
                  drive our school's success.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>04/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>
                  Developing Leaders
                  <br />
                  Teacher Leadership
                </h2>
                <p className='text-gray-600'>
                  TKS is dedicated to providing opportunities for our staff to develop leadership
                  skills. We believe that strong leaders within our school will drive positive
                  change, inspire their colleagues, and contribute significantly to our school's
                  mission.
                </p>
              </div>
            </section>
          </div>

          <div className='absolute right-[-8rem] top-1/2 hidden -translate-y-1/2 transform md:block lg:right-[-12rem]'>
            <div className='origin-center -rotate-90 transform whitespace-nowrap text-xl font-medium uppercase tracking-wider text-gray-800 lg:text-2xl'>
              Our Beliefs & Core Principles
            </div>
          </div>

          <div className='absolute bottom-0 right-0'>
            <div className='grid grid-cols-3 gap-1'>
              {[...Array(9)].map((_, i) => (
                <div key={i} className='h-3 w-3 bg-blue-500 opacity-80' />
              ))}
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Bento Grid */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.43, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.41 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.9 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.4, end: 1, position: 0.5, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 0.4, position: 0.75, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 md:pl-24 lg:grid-cols-[1fr_2fr]'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-start justify-center'
          >
            <Image
              src='/teacher-life/bento/1.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[400px] w-[600px] rounded-2xl object-cover'
            />
            <div className='flex items-start pt-16'>In house workshops by renowed experts</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mx-auto flex max-w-2xl flex-col justify-center space-y-6'
          >
            <Image
              src='/teacher-life/bento/2.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
            <Image
              src='/teacher-life/bento/3.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
          </motion.div>
        </div>
      </BgPattern>
    </main>
  );
}
