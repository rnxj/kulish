'use client';

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
        <style>{'.fil0{fill:#14b8a6;fill-rule:nonzero}'}</style>
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
    {
      title: 'EARLY YEARS',
      description:
        'A Nurturing Start: The Early Years Curriculum At our school, the Early Years curriculum provides a warm, stimulating environment where young learers thrive. By fostering natural curiosity and a love for',
      image: '/academics/carousel/main-1.jpg',
      logo: '/academics/carousel/logo-1.png',
    },
    {
      title: 'PRIMARY SCHOOL',
      description:
        'Physical activity is an essential component of our 3l program, promoting a healthy lifestyle and the development of motor skills. We offer a wide range of sports and physical activities that not only enhance',
      image: '/academics/carousel/main-2.jpg',
      logo: '/academics/carousel/logo-2.png',
    },
    {
      title: 'MIDDLE SCHOOL',
      description:
        'Our community-focused innovation initiatives aim to connect students with the world around them, fostering a sense of belonging and purpose. Students participate in innovation led projects that',
      image: '/academics/carousel/main-3.jpg',
      logo: '/academics/carousel/logo-3.png',
    },
  ];

  const [order, setOrder] = useState([0, 1, 2]);

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
          src='/enrichment-programmes/hero.jpg'
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
                Enrichment Programmes In The Kulish School
              </DialogTitle>
              <video controls autoPlay className='h-full w-full' src='/academics/video.mp4' />
            </DialogContent>
          </Dialog>

          <h3 className='mb-4 text-2xl font-medium'>Enrichment Programmes In The Kulish School</h3>
          <p className='max-w-3xl px-4'>
            Experience Kulish School's Enrichment Programmes, where innovation and creativity come
            to life.
            <br />
            Discover how our hands-on experiences and diverse activities ignite curiosity and foster
            growth in every student
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <div className='bg-sky-600 py-12 text-center text-white'>
        <div className='mx-auto max-w-5xl px-4'>
          <h3 className='mb-4 text-2xl font-medium uppercase'>Enrichment Programs</h3>
          <p>
            At The Kulish School, we believe in nurturing the whole child by offering a variety of
            enrichment programmes that complement our core curriculum. These programs are designed
            to develop essential life skills, spark curiosity, and inspire a love of learning.
            <br />
            Here are the skill-based opportunities available for our primary students:
          </p>
        </div>
      </div>

      {/* Financial Literacy */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 0.58, position: 0.27, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.88, variant: 'dashed' },
          { orientation: 'vertical', start: 0.1, end: 0.88, position: 0.1 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.58 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.56, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.92, variant: 'dashed' },
        ]}
      >
        <div className='grid grid-cols-1 gap-8 p-4 md:p-24 lg:grid-cols-[4fr_3fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-start space-y-6 lg:px-24'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Financial
              <br />
              Literacy
            </h2>

            <p className='text-gray-800'>
              At The Kulish School, we believe in starting early to equip students with essential
              life skills. Our Financial Literacy program introduces Nursery students to saving,
              budgeting, and informed decision-making, laying a foundation for confident money
              management. Through interactive activities and real-life simulations, students develop
              patience, goal-setting, critical thinking, and risk assessment.
            </p>

            <p className='text-gray-800'>
              Blending modern learning with ancient Indian values, we foster innovation, global
              citizenship, and compassionate caregiving. Our holistic approach nurtures adaptable
              thinkers with strong ethical grounding, cultural awareness, and the skills needed to
              excel in a globally connected world.
            </p>
          </motion.div>

          <div className='flex justify-center'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-[400px]'
            >
              <Image
                src='/enrichment-programmes/financial-literacy.jpg'
                alt='Patrika Group Logo'
                width={400}
                height={600}
                className='h-[500px] w-full rounded-2xl object-cover'
              />
            </motion.div>
          </div>
        </div>
      </BgPattern>

      {/* Entrepreneurship Literacy */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 0.58, position: 0.27, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.88, variant: 'dashed' },
          { orientation: 'vertical', start: 0.1, end: 0.88, position: 0.1 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.58 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.56, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.92, variant: 'dashed' },
        ]}
      >
        <div className='grid grid-cols-1 gap-8 p-4 md:p-24 lg:grid-cols-[3fr_2fr]'>
          <div className='flex justify-center'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-[600px]'
            >
              <Image
                src='/enrichment-programmes/entrepreneurship.jpg'
                alt='Patrika Group Logo'
                width={600}
                height={600}
                className='h-[500px] w-full rounded-2xl object-cover'
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-start space-y-6'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Entrepreneurship
            </h2>

            <div className='flex flex-col space-y-2'>
              <p className='text-gray-800'>
                The Entrepreneurship program fosters creativity and an entrepreneurial mindset,
                preparing students to be future leaders. Through hands-on projects and teamwork,
                they learn the entrepreneurial process from idea to execution.
              </p>

              <p className='text-gray-800'>
                Blending modern learning with ancient Indian values, we foster innovation, global
                citizenship, and compassionate caregiving. Our holistic approach nurtures adaptable
                thinkers with strong ethical grounding, cultural awareness, and the skills needed to
                excel in a globally connected world.
              </p>

              <p className='text-gray-800'>
                Key elements include market research, product development, marketing strategies, and
                financial planning. Students develop skills in generating ideas, conducting market
                research, testing products, and implementing marketing strategies. They also learn
                budgeting and forecasting.
              </p>

              <p className='text-gray-800'>
                The program enhances innovation, problem-solving, leadership, and critical thinking.
                Students gain confidence in managing finances and making informed decisions,
                building a solid foundation for their future.
              </p>

              <p className='text-gray-800'>
                In short, the Entrepreneurship program equips students with essential skills,
                preparing them to be innovative leaders and problem-solvers.
              </p>
            </div>
          </motion.div>
        </div>
      </BgPattern>

      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.43, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.41 },
          { orientation: 'horizontal', start: 0, end: 0.41, position: 0.5, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.41, end: 1, position: 0.5, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.41, end: 1, position: 0.67 },
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
                STEM
                <br /> (Science, Technology,
                <br /> Engineering,
                <br /> and Mathematics)
              </h2>
            </motion.div>
            <div></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6'
          >
            <p className='text-gray-800'>
              Welcome to the STEM Lab at The Kulish School, where we inspire and empower our
              students to explore the exciting world of Science, Technology, Engineering, and
              Mathematics (STEM). Our lab is a dynamic space designed to foster creativity, critical
              thinking, and hands-on learning.
            </p>

            <p className='text-gray-800'>
              Through engaging activities, students gain practical experience and deepen their
              understanding of STEM concepts that are applicable to real-world challenges. In the
              STEM Lab, students participate in projects that include robotics and engineering,
              scientific experiments, and problem-solving.
            </p>

            <p className='text-gray-800'>
              These activities allow them to develop skills that are not only essential for their
              academic growth but also highly valuable for their future careers. Students are
              encouraged to work collaboratively on projects, where they can apply their knowledge
              to solve problems, create solutions and effectively communicate their ideas.
            </p>

            <p className='text-gray-800'>
              Our state-of-the-art equipment and resources provide students with the tools they need
              to innovate and create. At The Kulish School, we bridge the gap between classroom
              learning and real-world applications, preparing our students for the exciting
              opportunities.
            </p>
          </motion.div>
        </div>
      </BgPattern>

      {/* Bento Grid */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.42, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.4 },
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
              src='/enrichment-programmes/bento/1.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[400px] w-[600px] rounded-2xl object-cover'
            />
            <div className='flex items-start'>
              <div className='mt-12 h-24 w-24 rounded-full border-2 border-dashed border-gray-400'></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mx-auto flex max-w-2xl flex-col justify-center space-y-6'
          >
            <Image
              src='/enrichment-programmes/bento/2.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
            <Image
              src='/enrichment-programmes/bento/3.jpg'
              alt='New Age Education Concept'
              width={500}
              height={500}
              className='h-[250px] w-[500px] rounded-2xl object-cover'
            />
          </motion.div>
        </div>
      </BgPattern>

      {/* Tinkering */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.025 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.189 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.76 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.928 },
          { orientation: 'vertical', start: 0.025, end: 0.928, position: 0.494 },
          { orientation: 'vertical', start: 0.025, end: 0.928, position: 0.699 },
          { orientation: 'vertical', start: 0.025, end: 0.928, position: 0.709 },
          { orientation: 'vertical', start: 0.025, end: 0.928, position: 0.914 },
        ]}
      >
        <div className='grid grid-cols-1 gap-8 p-4 md:px-20 lg:grid-cols-[4fr_5fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Tinkering
            </h2>

            <p className='text-gray-800'>
              The Tinkering program promotes creativity and problem-solving by encouraging students
              to explore, experiment, and invent in a hands-on environment. Students use tools and
              materials to build projects, such as taking apart electronics or creating prototypes
              with 3D printers and robotics kits.
            </p>

            <p className='text-gray-800'>
              The program emphasizes key skills like creativity, resilience, and a growth mindset,
              teaching students that persistence and experimentation lead to innovation. By engaging
              in practical activities, students develop engineering principles, design thinking, and
              confidence in problem-solving. Overall, the Tinkering program equips students with
              valuable skills and a mindset for success in a technology-driven world, fostering
              innovative thinkers ready to tackle future challenges.
            </p>
          </motion.div>
          <div className='flex justify-center gap-4'>
            {/* First Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col gap-4'
            >
              <div className='h-[15%] w-[300px]' />
              <Image
                src='/enrichment-programmes/tinkering/1.jpg'
                alt='Tinkering Activity 1'
                width={300}
                height={400}
                className='h-[60%] w-[300px] object-cover'
              />
              <Image
                src='/enrichment-programmes/tinkering/3.jpg'
                alt='Tinkering Activity 3'
                width={300}
                height={400}
                className='h-[15%] w-[300px] object-cover object-bottom'
              />
            </motion.div>

            {/* Second Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col gap-4'
            >
              <Image
                src='/enrichment-programmes/tinkering/3.jpg'
                alt='Tinkering Activity 3'
                width={300}
                height={400}
                className='h-[15%] w-[300px] object-cover object-top'
              />
              <Image
                src='/enrichment-programmes/tinkering/2.jpg'
                alt='Tinkering Activity 4'
                width={300}
                height={400}
                className='h-[60%] w-[300px] object-cover'
              />
              <div className='h-[20%] w-[300px]' />
            </motion.div>
          </div>
        </div>
      </BgPattern>

      {/* Geobiology */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 0.58, position: 0.19, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.88, variant: 'dashed' },
          { orientation: 'vertical', start: 0.1, end: 0.88, position: 0.1 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.58 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.56, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.92, variant: 'dashed' },
        ]}
      >
        <div className='grid grid-cols-1 gap-8 p-4 md:p-24 lg:grid-cols-[4fr_3fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-start space-y-6 lg:px-20'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Geobiology
            </h2>
            <p className='text-gray-800'>
              Geobiology is a multidisciplinary field that investigates the complex interactions
              between Earth's physical systems and the biosphere, shaping life on a global scale. At
              KULISH, students explore this dynamic field at the intersection of ecology,
              evolutionary biology, microbiology, paleontology, soil science, biogeochemistry, and
              advanced technology, gaining insights into processes that connect the Earth's past,
              present, and future.
            </p>

            <p className='text-gray-800'>
              Through experiential learning, students engage in activities like analyzing soil
              layers and studying plant growth while integrating mathematical sciences to measure
              parameters such as plant height, soil quality, and nutrient cycles. Advanced
              techniques, such as phytochemical testing, help compare the nutritional properties of
              foods, providing real-world applications. Artistic explorations, like fossil imprint
              creation, bring an imaginative dimension to understanding Earth's history.
            </p>

            <p className='text-gray-800'>
              With a focus on global sustainability, KULISH emphasizes the role of geobiology in
              addressing critical challenges, from climate change to food security. By combining
              scientific rigor, technology, and creative expression, students develop a
              comprehensive understanding of Earth's interconnected systems, equipping them to
              address pressing global issues and contribute to advancements in this vital field.
            </p>
          </motion.div>

          <div className='flex justify-center'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-[400px]'
            >
              <Image
                src='/enrichment-programmes/geobiology.jpg'
                alt='Patrika Group Logo'
                width={400}
                height={600}
                className='h-[500px] w-full rounded-2xl object-cover'
              />
            </motion.div>
          </div>
        </div>
      </BgPattern>
    </main>
  );
}
