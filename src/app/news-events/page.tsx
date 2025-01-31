'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function AcademicsPage() {
  const academicPrograms = [
    {
      title: "Hon'ble Vice-President, Shri Jagdeep Dhankhar at The Kulish School",
      description:
        "Hon'ble Vice-President, Shri Jagdeep Dhankhar and Dr.Sudesh Dhankhar visited various facilities of The Kulish School and interacted with students in Jaipur, Rajasthan",
      image: '/news-events/highlights/1.jpg',
    },
    {
      title: 'The Kulish School Inauguration',
      description:
        'Vice President Jagdeep Dhankhar inaugurated The Kulish School located in Jagatpura in the capital Jaipur.',
      image: '/news-events/highlights/2.jpg',
    },
    {
      title: 'Experience the thrill of adventure!...',
      description:
        'Experience the thrill of adventure! Our primary students embarked on an exhilarating trekking expedition, conquering towering rock walls and zipping...',
      image: '/news-events/highlights/3.jpg',
    },
    {
      title: "Hon'ble Vice-President, Shri Jagdeep Dhankhar at The Kulish School",
      description:
        "Hon'ble Vice-President, Shri Jagdeep Dhankhar and Dr. Sudesh Dhankhar visited various facilities of The Kulish School and interacted with students in Jaipur, Rajasthan",
      image: '/news-events/highlights/4.jpg',
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
            src='/news-events/hero.jpg'
            alt='Curriculum Video Thumbnail'
            fill
            className='object-cover'
            priority
          />
        </section>

        {/* Curriculum Overview */}
        <div className='bg-sky-600 py-12 text-center text-white'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 font-serif text-2xl uppercase'>NEWS & EVENTS</h3>
            <p>
              Stay updated with the latest happenings in our school! Discover exciting events,
              important announcements, and <br />
              vibrant activities, all in one place. Stay connected and informed about everything
              going on here!
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <section className='py-12'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-2 items-center'>
            <div>
              <h2 className='font-serif text-4xl font-light text-gray-700'>EXPLORE</h2>
            </div>
            <div className='flex justify-start gap-2'>
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

      {/* Academic Programs */}
      <div className='relative flex flex-col items-start justify-center p-4 md:p-12'>
        <Image
          src='/news-events/grid.png'
          alt='Grid Background'
          fill
          className='object-cover opacity-90'
        />
        <div className='relative mx-auto flex w-full max-w-5xl items-center py-8'>
          <h2 className='font-serif text-4xl font-light text-gray-700'>Highlights</h2>
        </div>
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

      {/* Newsletter Section */}
      <section className='bg-gray-50 py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
            {/* Left Column */}
            <div className='flex-1'>
              <Image
                src='/news-events/highlights/4.jpg'
                alt='Event Image'
                width={800}
                height={600}
                className='aspect-[2/1] w-full object-cover'
              />
              <h3 className='mt-4 text-center text-xl font-medium'>
                Empowering Parents in Innovative Education
              </h3>
              <p className='mt-2 w-full text-center text-gray-600'>
                Along with innovation in education, parents will have to recognize the potential of
                their children. Life Craft Workshop was organized on Sunday at The Kulish School,
                Jagatpura.
              </p>
              {/* <Button className='relative mt-4 overflow-hidden rounded-none bg-sky-600 hover:bg-sky-700'>
                <div className='absolute left-0 top-0 h-full w-2 bg-teal-500'></div>
                <span className='relative z-10'>Read More</span>
              </Button> */}
            </div>

            {/* Middle Column */}
            {/* <div className='flex-1'>
              <div className='relative'>
                <h3 className='mb-8 text-lg font-medium'>Upcoming Events</h3>
                <div className='absolute right-0 top-3 h-[1px] w-2/5 bg-gray-300'></div>
              </div>
              <div className='space-y-8'>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className='flex gap-6'>
                    <div className='text-center'>
                      <h4 className='relative text-3xl font-medium text-blue-700 after:absolute after:-bottom-4 after:left-1/2 after:h-[2px] after:w-[140%] after:-translate-x-1/2 after:bg-sky-300'>
                        {event.date.day}
                      </h4>
                      <span className='mt-6 block text-sm'>{event.date.month}</span>
                    </div>
                    <div>
                      <h4 className='text-lg font-medium'>{event.title}</h4>
                      <p className='mt-4 flex items-center gap-2 text-gray-600'>
                        {event.time}
                        <MapPin className='ml-4 h-4 w-4' />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a href='#' className='mt-6 block text-sky-600 hover:underline'>
                View All Events
              </a>
            </div> */}

            {/* Right Column */}
            {/* <div className='lg:w-80'>
              <div className='relative h-[450px] w-full overflow-hidden bg-[url("/news-events/newsletter-bg.png")] bg-cover bg-center p-6 text-center text-white'>
                <Image
                  src='/news-events/envelope.png'
                  alt='Newsletter'
                  width={100}
                  height={100}
                  className='mx-auto mt-32'
                />
                <h3 className='mt-4 text-xl font-medium'>Subscribe To Newsletter</h3>
                <p className='mt-2'>Get updates to news & events</p>
                <form className='mt-4 space-y-4'>
                  <input
                    type='email'
                    placeholder='Your Email Address'
                    required
                    className='w-full rounded bg-black/80 p-2 text-white placeholder:text-white'
                  />
                  <Button className='w-full bg-sky-400 hover:bg-sky-500'>Subscribe</Button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
