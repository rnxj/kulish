'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function NewsPage() {
const newsGrid = [
  { key:1, src:"/news-events/news/1.jpg" },
  { key:2, src:"/news-events/news/2.jpg" },
  { key:3, src:"/news-events/news/3.jpg" },
  { key:4, src:"/news-events/news/4.jpg" },
  { key:5, src:"/news-events/news/5.jpg" },
  { key:6, src:"/news-events/news/6.jpg" },

];

  return (
    <main className='bg-[#f7f7f7] min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[70vh] w-full overflow-hidden'>
        <Image
          src='/news-events/news/TOP.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='font-serif text-4xl font-light text-[#333]'>NEWS COVERAGE</h2>
        </div>
      </section>

      {/* Cards Section */}
      {/* <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          // { orientation: 'horizontal', start: 0, end: 1, position: 0.98, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1, variant: 'dashed' },
          // { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
        ]}
      > */}
        <div className='container bg-[#f7f7f7] items-center mx-auto p-4 w-10/12 md:py-8'>
          {/* GLOBAL VILLAGE */}
          {/* <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
              GLOBAL VILLAGE
            </h2>
          </div> */}
          <div className='bg-[#f7f7f7] grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {newsGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Tech Lab Grid'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[400px] w-[400px] object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      {/* </BgPattern> */}

      
    </main>
  );
}
