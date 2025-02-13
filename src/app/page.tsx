'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export default function HomePage() {
  const heroImages = [
    {
      src: '/landing/slider/SLIDER 1.jpg',
      title: 'WELCOME TO',
      heading: 'The Kulish School',
      description:
        'The Kulish School emerges as a future-ready institution, guided by a visionary approach to education. It is a school at the forefront of cutting-edge and evolved learning.',
    },
    {
      src: '/landing/slider/SLIDER 2.jpg',
      title: 'OUR MISSION',
      heading: 'Inspiring Excellence',
      description:
        'We strive to create an environment where every student can discover their potential and develop into confident, compassionate global citizens.',
    },
    {
      src: '/landing/slider/SLIDER 3.jpg',
      title: 'OUR VISION',
      heading: 'Future Ready',
      description:
        "Preparing students for tomorrow's world through innovative teaching methods, cutting-edge technology, and a values-based approach to education.",
    },
    {
      src: '/landing/slider/SLIDER 4.jpg',
      title: 'OUR VALUES',
      heading: 'Character Building',
      description:
        'We believe in nurturing not just academic excellence, but also strong moral values, leadership skills, and social responsibility.',
    },
    {
      src: '/landing/slider/SLIDER 5.jpg',
      title: 'JOIN US',
      heading: 'Begin Your Journey',
      description:
        'Take the first step towards providing your child with an education that will shape their future and open doors to endless possibilities.',
    },
    {
      src: '/landing/slider/SLIDER 6.jpg',
      title: 'WELCOME TO',
      heading: 'Global Curriculum',
      description:
        'Offering both National and International Boards Including CBSE and IB, to provide a comprehensive education.',
    },
    {
      src: '/landing/slider/SLIDER 7.jpg',
      title: '',
      heading: 'Holistic Development ',
      description:
        'Balancing academic excellence with personal growth through extracurricular activities and character education.',
    },
    {
      src: '/landing/slider/SLIDER 8.jpg',
      title: '',
      heading: 'Innovative Learning',
      description:
        'Utilizing cutting-edge technology and teaching methods to foster critical thinking and problem-solving skills.',
    },
    {
      src: '/landing/slider/SLIDER 9.jpg',
      title: '',
      heading: 'Rich Cultural Heritage',
      description:
        'Integrating India\'s rich cultural heritage into our educational approach to create a well-rounded learning experience.',
    },
    {
      src: '/landing/slider/SLIDER 10.jpg',
      title: '',
      heading: 'Begin Your Journey',
      description:
        'Take the first step towards providing your child with an education that will shape their future and open doors to endless possibilities.',
    },
  ];
  const overview = [
    {
      title: 'Global Curriculum',
      description:
        'Offering both National and International Boards, to provide a comprehensive education',
      image: '/landing/overview/global-curriculum.png',
    },
    {
      title: 'Holistic Development',
      description:
        'Balancing academic excellence with personal growth through extracurricular activities and character education.',
      image: '/landing/overview/holistic-development.png',
    },
    {
      title: 'Innovative Learning',
      description:
        'Utilizing cutting-edge technology and teaching methods to foster critical thinking and problem-solving skills',
      image: '/landing/overview/innovative-learning.png',
    },
    {
      title: 'Rich Cultural Heritage',
      description:
        "Integrating India's rich cultural heritage into our educational approach to create a well-rounded learning experience",
      image: '/landing/overview/rich-cultural-heritage.png',
    },
  ];
  const exploreItems = [
    {
      title: 'Tinkering: The Gateway to Imagination!',
      description:
        "In our Tinkering Lab, students are discovering the joy of creating and exploring. Through hands-on experiments, they're learning to turn ideas into reality, sparking innovation and imagination along the way. This is where the magic of learning begins!",
      image: '/news-events/explore/1.jpg',
    },
    {
      title: 'Earth Day in Action: Learning Through Planting!',
      description:
        "Celebrating Earth Day with action and education! Our students planted saplings and engaged in interactive lessons about environmental conservation, the water cycle, and the benefits of greenery. Through this activity, they've learned that small steps can lead to big changes for a healthier planet.",
      image: '/news-events/explore/2.jpg',
    },
    {
      title: 'Starting the Day with Energy and Balance!',
      description:
        "Active mornings, active minds! In our school, physical activities like yoga and sports during the morning assembly are not just exercises; they're life lessons. Students learn the value of fitness, mindfulness, and teamwork, building habits that support their academic and personal growth.",
      image: '/news-events/explore/3.jpg',
    },
    {
      title: 'Art in Action: Unleashing Imagination!',
      description:
        'At our school, every child is an artist! Through colors and creativity, students bring their imaginations to life, exploring new perspectives and expressing their unique ideas in a supportive and inspiring environment.',
      image: '/news-events/explore/4.jpg',
    },
    {
      title: 'Innovation in Action: Learning Robotics!',
      description:
        "In our robotics lab, students are diving into the world of technology, coding, and engineering. Through hands-on learning, they are building robots that not only ignite their creativity but also develop critical thinking, problem-solving, and teamwork skills. It's more than just robots—it's about preparing for the future!",
      image: '/news-events/explore/5.jpg',
    },
    {
      title: 'Enrichment Programmes',
      description:
        "In our robotics lab, students are diving into the world of technology, coding, and engineering. Through hands-on learning, they are building robots that not only ignite their creativity but also develop critical thinking, problem-solving, and teamwork skills. It's more than just robots—it's about preparing for the future!",
      image: '/news-events/explore/6.jpg',
    },
  ];

  const earlyYearsSlides = [
    {
      title: 'EARLY YEARS',
      description:
        'A Nurturing Start: The Early Years Curriculum At our school, the Early Years curriculum provides a warm, stimulating environment where young learers thrive. By fostering natural curiosity and a love for',
      image: '/landing/carousel/1.jpg',
      href: '/stages/early-years',
    },
    {
      title: 'PRIMARY SCHOOL',
      description:
        'Physical activity is an essential component of our 3l program, promoting a healthy lifestyle and the development of motor skills. We offer a wide range of sports and physical activities that not only enhance',
      image: '/landing/carousel/2.jpg',
      href: '/stages/primary-school',
    },
    {
      title: 'MIDDLE SCHOOL',
      description:
        'Our community-focused innovation initiatives aim to connect students with the world around them, fostering a sense of belonging and purpose. Students participate in innovation led projects that',
      image: '/landing/carousel/3.jpg',
      href: '/stages/middle-school',
    },
  ];


  const innovationSlides = [
    {
      title: 'Innovation',
      description:
        'Our community-focused innovation initiatives aim to connect students with the world around them, fostering a sense of belonging and purpose. Students participate in innovation led projects that',
        image: '/landing/cards/innovation.jpg',
        logoImage: '/landing/cards/logo-innovation.png',
      href: '/key-information/Innovation',
    },
    {
      title: 'Initiative',
      description:
        'Physical activity is an essential component of our 3l program, promoting a healthy lifestyle and the development of motor skills. We offer a wide range of sports and physical activities that not only enhance',
        logoImage: '/landing/cards/logo-initiative.png',
        image: '/landing/cards/initiative.jpg',
      href: '/key-information/Initiative',
    },
    {
      title: 'Impact',
      description:
        'Our community-focused innovation initiatives aim to connect students with the world around them, fostering a sense of belonging and purpose. Students participate in innovation led projects that',
      image: '/key-information/impact.jpg',
      logoImage: '/landing/cards/Global Curriculum.svg',
      href: '/key-information/Impact',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInnovationIndex, setInnovationCurrentIndex] = useState(0);
  const [order, setOrder] = useState([2, 0, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
      handleInnovationNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Add auto-advance for early years carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleEarlyYearsNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [order]);


  const handleInnovationPrevious = () => {
    setInnovationCurrentIndex((prev) => (prev === 0 ? innovationSlides.length - 1 : prev - 1));
  };

  const handleInnovationNext = () => {
    setInnovationCurrentIndex((prev) => (prev + 1) % innovationSlides.length);
  };

  const visibleCount = 2;
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentInnovationIndex + i) % innovationSlides.length);
    }
    return indices;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handleEarlyYearsPrevious = () => {
    setOrder((prev) => [prev[2], prev[0], prev[1]]);
  };

  const handleEarlyYearsNext = () => {
    setOrder((prev) => [prev[1], prev[2], prev[0]]);
  };

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex flex-col'>
        <section className='relative h-[70vh] w-full md:h-[850px]'>
          <Image
            src={heroImages[currentIndex].src}
            alt='Curriculum Video Thumbnail'
            priority
            fill
            className='object-cover'
          />

          {/* Dark overlay for better text visibility on mobile */}
          <div className='absolute inset-0 bg-black/40 md:bg-transparent'></div>

          {/* Overlay Text */}
          <div className='absolute left-4 top-[60%] max-w-[90%] -translate-y-1/2 px-4 text-sm text-white md:left-8 md:max-w-[300px] md:px-0 md:text-gray-700'>
            <h3 className='mb-2 text-base text-white md:mb-4 md:text-lg md:text-muted-foreground'>
              {heroImages[currentIndex].title}
            </h3>
            <h1 className='mb-3 font-serif text-2xl font-light underline decoration-gray-300 decoration-1 underline-offset-8 md:mb-4 md:text-4xl lg:text-5xl'>
              {heroImages[currentIndex].heading}
            </h1>
            <p className='mb-4 max-w-sm text-sm md:mb-8 md:pt-8 md:text-base'>
              {heroImages[currentIndex].description}
            </p>
            {/* <Button className='rounded-full bg-sky-500 text-white' size='lg'>
              Call To Action
            </Button> */}
          </div>

          <div className='absolute right-4 top-4 text-sm text-white md:right-16 md:top-1/2 md:-translate-y-1/2'>
            <h1 className='font-serif text-2xl font-light md:text-4xl lg:text-6xl'>
              {currentIndex + 1} / {heroImages.length}
            </h1>
          </div>

          {/* Buttons */}
          {/* <div className='absolute bottom-4 right-4 flex gap-2 md:bottom-8 md:right-8 md:gap-4'>
            <Button className='rounded-full text-sm md:text-base' size='sm'>
              Translate
            </Button>
            <Button className='rounded-full text-sm md:text-base' size='sm'>
              Search
              <SearchIcon className='ml-2 h-3 w-3 md:ml-4 md:h-4 md:w-4' />
            </Button>
          </div> */}

          {/* Image Navigation */}
          <div className='absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1 rounded-md bg-black/50 p-2 md:right-4 md:gap-2 md:p-4'>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </section>

        {/*  Overview */}

        <div className='grid grid-cols-1 w-full place-items-center gap-6 px-4 py-12 items-center justify-center text-center sm:grid-cols-1'>
          {/* {overview.map((item, index) => (
            <div key={index} className='flex flex-col items-start gap-4 text-left'>
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className='object-contain'
              />
              <div className='flex flex-col text-left'>
                <h3 className='mb-2 font-semibold text-sky-500'>{item.title}</h3>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          ))} */}

{/* <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center text-white'> */}
          {/* <Dialog>
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
              <DialogTitle className='hidden '>Video Tour in The Kulish School </DialogTitle>
              <video controls autoPlay className='h-full w-full' src='/academics/video.mp4' />
            </DialogContent>
          </Dialog> */}
          <h3 className='mb-4 text-2xl  text-sky-500 font-bold'>Video Tour in The Kulish School </h3>
          <p className='max-w-3xl text-center px-4'>
            Experience The Kulish School through our tour video, showcasing every corner of our
            vibrant campus. Discover why we are the best choice for your child's education!
          </p>
        </div>

        </div>
      {/* </div> */}

      {/* Video Section */}
      <section className='relative h-[70vh] w-full'>
        <Image
          src='/landing/video-thumbnail.png'
          alt='Curriculum Video Thumbnail'
          fill
          className='object-cover grayscale-[100]'
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
              <DialogTitle className='hidden'>Video Tour in The Kulish School </DialogTitle>
              <video controls autoPlay className='h-full backdrop-grayscale-[100] w-full' src='/academics/video.mp4' />
            </DialogContent>
          </Dialog>
          {/* <h3 className='mb-4 text-2xl font-medium'>Video Tour in The Kulish School </h3>
          <p className='max-w-3xl px-4'>
            Experience The Kulish School through our tour video, showcasing every corner of our
            vibrant campus. Discover why we are the best choice for your child's education!
          </p> */}
        </div>
      </section>

      {/* Innovation Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'vertical', start: 0, end: 1, position: 0.4 },
          { orientation: 'vertical', start: 0, end: 0.9, position: 0.06, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.42, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto py-12 md:py-24'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[3fr_4fr]'>
            {/* Content */}
            <div className='mx-auto flex h-full max-w-sm flex-col items-center justify-center space-y-6'>
              <div className='mb-12'>
                <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                  Innovation, initiative
                  <br />& impact at The Kulish School
                </h2>
              </div>
              <p className='text-justify text-gray-800'>
                At The Kulish School, we believe in nurturing the holistic development of our
                students through a well-rounded curriculum that includes the 3Is—Innovation,
                Initiative & Impact. Our 3I program is designed to instill a sense of
                responsibility, teamwork, and empathy in our young learners. Through a variety of
                engaging and meaningful activities, we encourage students to become active,
                compassionate, and lifelong learners who understand the importance of contributing
                to their communities.
              </p>
            </div>

            {/* Cards */}

         <div className='flex w-full mx-auto pr-4 items-center justify-center'>      
            <Button 
              variant='outline'
              size='icon'
              className='z-10 rounded-full'
              onClick={handleInnovationPrevious}>
                  <ArrowLeft className='h-4 w-4 m-6' />
            </Button>

            <div className='grid gap-8 px-4 md:grid-cols-2 md:px-4'>
               {getVisibleIndices().map((index) => {
              const program = innovationSlides[index];
              return (
                <motion.div
                key={`${program.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden bg-white shadow-md'
              >

                <div className='overflow-hidden bg-white shadow-md'>
                <div className='relative h-96'>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex gap-4 p-4'>
                  <div className='flex-shrink-0'>
                    <Image
                      src={program.logoImage}
                      alt={program.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h5 className='mb-2 font-medium'>{program.title}</h5>
                    <p className='mb-2 text-xs text-gray-600'>
                    {program.description}
                    </p>
                    <Link href={program.href}>
                    <Button variant='link' className='p-0 text-sky-600'>
                      Read More
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
              </motion.div>
              );
            })}
            </div>
            <Button
              variant='outline'
              size='icon'
              className='z-10 rounded-full'
              onClick={handleInnovationNext}>
            <ArrowRight className='h-4 w-4 m-6' />
          </Button>
          </div>
          </div>
        </div>
      </BgPattern>

      {/* Explore Section */}
      <section className='py-12'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center'>
            <div>
              <h2 className='font-serif text-3xl font-light text-gray-700 md:text-4xl'>EXPLORE</h2>
            </div>
            <div className='flex flex-wrap justify-start gap-2'>
              <Button
                variant='outline'
                className='hover:border-1 rounded-full border-white hover:border-black'
              >
                First
              </Button>
              <Button
                variant='outline'
                className='hover:border-1 rounded-full border-white hover:border-black'
              >
                Second
              </Button>
              <Button
                variant='outline'
                className='hover:border-1 rounded-full border-white hover:border-black'
              >
                Third
              </Button>
            </div>
          </div>
          <div className='mt-2 h-0.5 w-full bg-gray-300'></div>
          <div className='mt-8 grid h-auto grid-cols-1 gap-4 sm:h-[600px] sm:grid-cols-2 lg:grid-cols-4'>
            {exploreItems.map((item, index) => (
              <Link
                key={index}
                href={`/explore/${index + 1}`}
                className={cn(
                  'group relative cursor-pointer overflow-hidden',
                  'h-[300px] sm:h-full',
                  index == 1 || index == 3 ? 'sm:col-span-1 lg:col-span-2' : 'col-span-1'
                )}
              >
                <Image src={item.image} alt={item.title} fill className='object-cover' />
                <div className='absolute inset-0 bg-black/0 transition-opacity duration-300 group-hover:bg-black/40' />
                <div className='absolute left-4 top-[70%] max-w-[80%] sm:left-6 sm:max-w-[60%]'>
                  <h3 className='text-sm font-medium text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] sm:text-base'>
                    {item.title}
                  </h3>
                </div>
                <Button
                  variant='outline'
                  size='icon'
                  className={cn(
                    'absolute left-2 top-2 h-6 w-6 rounded-full sm:left-4 sm:top-4 sm:h-8 sm:w-8',
                    'flex items-center justify-center'
                  )}
                >
                  <ChevronRight className='h-3 w-3 sm:h-4 sm:w-4' />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Education */}
      <BgPattern
        lines={[
          { orientation: 'vertical', start: 0, end: 1, position: 0.22 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.3, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.49, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.67, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.85, variant: 'dashed' },
        ]}
        className='my-8'
      >
        <div className='relative mx-auto overflow-hidden px-4 py-12 md:px-32 lg:px-60'>
          <div className='space-y-16'>
            <section className='flex gap-8'>
              <div className='absolute grid grid-cols-3 gap-1'>
                {[...Array(9)].map((_, i) => (
                  <div key={`tr-${i}`} className='h-2 w-2 bg-sky-500' />
                ))}
              </div>
              <p className='ml-24 text-xl text-gray-700'>
                The Kulish School is attempting to empower the children by addressing the main
                pillars of education, researching, and reinventing them to suit modern times. The
                four pillars of education are
              </p>
            </section>
            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>01/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>Cognitive Pedagogy</h2>
                <p className='text-gray-600'>
                  Accentuating the importance of cognitive processes and instructional
                  methodologies.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>02/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>New-Age Content</h2>
                <p className='text-gray-600'>
                  Underscoring the significance of contemporary and pertinent educational materials.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>03/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>
                  Perennial Feedback and Profiling
                </h2>
                <p className='text-gray-600'>
                  Prioritizing ongoing behavioral tracking and personalized learning trajectories.
                </p>
              </div>
            </section>

            <section className='flex gap-8'>
              <div className='w-16 font-serif text-2xl font-medium text-blue-500'>04/</div>
              <div>
                <h2 className='mb-4 font-serif text-3xl text-gray-700'>Global Perspective</h2>
                <p className='text-gray-600'>
                  Cultivating an appreciation for diverse cultures and fostering an awareness of
                  interconnectedness within the realm of education.
                </p>
              </div>
            </section>
          </div>

          <div className='absolute right-[-6rem] top-1/2 hidden -translate-y-1/2 transform md:block lg:right-[-8rem]'>
            <div className='origin-center -rotate-90 transform whitespace-nowrap text-xl font-medium uppercase tracking-wider text-gray-800 lg:text-2xl'>
              Pillars of Education
            </div>
          </div>

          <div className='hidden md:block'>
            <div className='absolute bottom-[4rem] right-[4rem] z-10 text-9xl font-bold text-gray-700'>
              4
            </div>
            <div className='absolute bottom-0 right-[4.8rem] h-32 w-[13px] bg-sky-500'></div>
            <div className='absolute bottom-[6.05rem] right-0 h-[13px] w-28 bg-sky-500'></div>
          </div>
        </div>
      </BgPattern>

      {/* Early Years Carousel */}
      <section className='relative my-20 overflow-hidden bg-white'>
        <div className='mx-4 flex items-center justify-center'>
          <Button
            variant='outline'
            size='icon'
            className='z-10 rounded-full'
            onClick={handleEarlyYearsPrevious}
          >
            <ArrowLeft className='h-4 w-4' />
          </Button>

          <div className='relative mx-auto flex w-full max-w-[90vw] items-center justify-center'>
            {order.map((index, i) => {
              const slide = earlyYearsSlides[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    'relative transition-all duration-500',
                    i === 1 ? 'z-20 h-[600px] w-[1000px]' : 'h-[400px] w-[300px]',
                    i === 0 ? 'mr-[-100px]' : '',
                    i === 2 ? 'ml-[-100px]' : ''
                  )}
                >
                  <Image src={slide.image} alt={slide.title} fill className='object-cover' />
                  <div
                    className={cn(
                      'absolute inset-x-0 bg-sky-600/90 text-center text-white',
                      i === 1 ? 'bottom-[20%] py-8' : 'bottom-[30%] py-16'
                    )}
                  >
                    {i === 1 && (
                      <div className='flex flex-col items-center justify-center'>
                        <h3 className='mb-4 text-3xl font-bold'>{slide.title}</h3>
                        <p className='mb-6 max-w-2xl px-8 text-lg'>{slide.description}</p>
                        <Button
                          className='rounded-full bg-white text-sky-600 hover:bg-gray-100'
                          asChild
                        >
                          <Link href={slide.href}>More Info</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Button
            variant='outline'
            size='icon'
            className='z-10 rounded-full'
            onClick={handleEarlyYearsNext}
          >
            <ArrowRight className='h-4 w-4' />
          </Button>
        </div>
      </section>

      {/* Vision, Mission, Approach and Outlook */}
      {/* <d      iv className='mx-auto max-w-7xl space-y-12 px-4 py-8 sm:space-y-24 sm:py-12'> */}
        {/* Vision Section */}
        {/* <section className='flex flex-col gap-4 sm:gap-8 md:grid md:grid-cols-[2fr_3fr]'>
          <div className='relative'>
            <h2 className='text-center text-3xl font-light tracking-wide text-gray-700 sm:text-right sm:text-4xl md:pr-4'>
              VISION
            </h2>
            <div className='absolute right-0 top-0 hidden h-full w-0.5 bg-red-500 md:block' />
          </div>
          <div className='space-y-4 sm:space-y-6'>
            <p className='text-base leading-relaxed text-gray-700 sm:text-lg'>
              The Kulish School will empower future leaders with a focus on innovation, global
              citizenship, and compassionate care giving- blending the skills of futuristic learning
              and traditional Indian values.
            </p>
            <p className='text-base leading-relaxed text-gray-700 sm:text-lg'>
              Our vision is to nurture adaptable, creative thinkers ready to excel in a dynamic,
              interconnected world.
            </p>
          </div>
        </section> */}

        {/* Mission Section */}
        {/* <section className='flex flex-col gap-4 sm:gap-8 md:grid md:grid-cols-[2fr_3fr]'>
          <h2 className='text-center text-3xl font-light tracking-wide text-gray-700 sm:text-right sm:text-4xl md:pr-4'>
            MISSION
          </h2>
          <div className='space-y-4 sm:space-y-6'>
            <p className='text-base leading-relaxed text-gray-700 sm:text-lg'>
              The Kulish School is committed to shaping the future by preparing students to excel in
              a globally connected India. Our mission is defined by the acronym L.E.A.D.E.R.S:
            </p>
            <div className='space-y-3 sm:space-y-4'>
              <div>
                <h3 className='font-medium text-gray-700'>Leadership Skills:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Cultivating effective, compassionate leadership abilities in our students.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Excellence in Academics:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Ensuring academic rigour and excellence in education.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Awareness:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Promoting cultural awareness and sensitivity.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Diversity:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Embracing diverse backgrounds to enrich the learning experience.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Ethical Citizenship:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Instilling principles of ethical behaviour and responsible citizenship.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Rich Cultural Heritage:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Integrating India's rich cultural heritage into our educational approach.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Social Contribution:</h3>
                <p className='text-sm text-gray-600 sm:text-base'>
                  Preparing students to actively contribute to society, both locally and globally.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Approach and Outlook Section */}
        {/* <section className='flex flex-col gap-4 sm:gap-8 md:grid md:grid-cols-[2fr_3fr]'>
          <h2 className='text-center text-3xl font-light tracking-wide text-gray-700 sm:text-right sm:text-4xl md:pr-4'>
            APPROACH
            <br />
            AND
            <br />
            OUTLOOK
          </h2>
          <div className='space-y-4 sm:space-y-6'>
            <p className='text-base leading-relaxed text-gray-700 sm:text-lg'>
              The Kulish School emerges as a future-ready institution, guided by a visionary
              approach to education. It is a school at the forefront of cutting-edge knowledge, and
              evolved learning.
            </p>
            <p className='text-base leading-relaxed text-gray-700 sm:text-lg'>
              At The Kulish School, we are dedicated to fostering the holistic development of our
              students, valuing both internal and external growth. Internally, we prioritize the
              cultivation of knowledge, expertise, and essential so skills. Externally, we recognize
              the significance of being well-informed in a world driven by information. Embracing
              the uniqueness of each individual, our school provides an environment conducive to
              expression and self-actualization. We understand the importance of preparing students
              for the challenges of the post-AI era and a world grappling with disruptions like
              climate change. Our commitment lies in creating a nurturing space that goes beyond
              conventional education. We aim to equip students not just with academic prowess but
              with the skills and mindset needed for an explorative future. The Kulish School stands
              as a beacon for those seeking an education that transcends boundaries, preparing young
              minds for a dynamic world.
            </p>
          </div>
        </section>
      </div> */}

      {/* Awards */}
      <div className='grid grid-cols-2 gap-8 bg-sky-600 px-6 py-16 text-center text-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5'>
        <div className='flex h-24 items-center justify-center'>
          <div className='text-lg font-bold sm:text-xl'>Oracle</div>
        </div>
        <div className='flex h-24 items-center justify-center'>
          <div className='text-lg font-bold sm:text-xl'>
            Lego <br /> Education
          </div>
        </div>
        <div className='flex h-24 items-center justify-center'>
          <Image
            src='/landing/awards/global-school-award.png'
            width={100}
            height={100}
            className='h-20 w-auto object-contain'
            alt='Global School Award'
          />
        </div>
        <div className='flex h-24 items-center justify-center'>
          <Image
            src='/landing/awards/global-school-alliance.svg'
            width={100}
            height={100}
            className='h-20 w-auto object-contain'
            alt='Global School Alliance'
          />
        </div>
        <div className='col-span-2 flex h-24 items-center justify-center sm:col-span-1'>
          <div className='text-lg font-bold sm:text-xl'>MINT</div>
        </div>
      </div>
    </main>
  );
}
