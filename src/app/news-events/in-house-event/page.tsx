'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function InHouseEvent() {
const globalVillagesGrid = [
  { key:1, src:"/news-events/IN HOUSE EVENTS/Global village/1.png" },
  { key:2, src:"/news-events/IN HOUSE EVENTS/Global village/2.png" },
  { key:3, src:"/news-events/IN HOUSE EVENTS/Global village/3.png" },
  { key:4, src:"/news-events/IN HOUSE EVENTS/Global village/4.png" },
  { key:5, src:"/news-events/IN HOUSE EVENTS/Global village/5.png" },
  { key:6, src:"/news-events/IN HOUSE EVENTS/Global village/6.png" },

];

const honeyCombGrid = [
  { key:1, src:"/news-events/IN HOUSE EVENTS/Honey Comb/1.png" },
  { key:2, src:"/news-events/IN HOUSE EVENTS/Honey Comb/2.png" },
  { key:3, src:"/news-events/IN HOUSE EVENTS/Honey Comb/3.png" },
  { key:4, src:"/news-events/IN HOUSE EVENTS/Honey Comb/4.png" },
  { key:5, src:"/news-events/IN HOUSE EVENTS/Honey Comb/5.png" },
  { key:6, src:"/news-events/IN HOUSE EVENTS/Honey Comb/6.png" },
]

const mentalistGrid = [
  { key:1, src:"/news-events/IN HOUSE EVENTS/Mentalist/1.jpg" },
  { key:2, src:"/news-events/IN HOUSE EVENTS/Mentalist/2.jpg" },
  { key:3, src:"/news-events/IN HOUSE EVENTS/Mentalist/3.jpg" },
  { key:4, src:"/news-events/IN HOUSE EVENTS/Mentalist/4.jpg" },
  { key:5, src:"/news-events/IN HOUSE EVENTS/Mentalist/5.jpg" },
  { key:6, src:"/news-events/IN HOUSE EVENTS/Mentalist/6.jpg" },
]

const petDayGrid = [
  { key:1, src:"/news-events/IN HOUSE EVENTS/Pet day/1.jpg" },
  { key:2, src:"/news-events/IN HOUSE EVENTS/Pet day/2.jpg" },
  { key:3, src:"/news-events/IN HOUSE EVENTS/Pet day/3.jpg" },
  { key:4, src:"/news-events/IN HOUSE EVENTS/Pet day/4.jpg" },
  { key:5, src:"/news-events/IN HOUSE EVENTS/Pet day/5.jpg" },
  { key:6, src:"/news-events/IN HOUSE EVENTS/Pet day/6.jpg" },
]

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[70vh] w-full overflow-hidden'>
        <Image
          src='/news-events/IN HOUSE EVENTS/The Kulish School NEWS AND EVENT INHOUSE TAB TOP PIC.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-4xl font-light text-[#333]'>IN HOUSE EVENTS</h2>
        </div>
      </section>

      {/* Cards Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          // { orientation: 'horizontal', start: 0, end: 1, position: 0.98, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1, variant: 'dashed' },
          // { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* GLOBAL VILLAGE */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
              GLOBAL VILLAGE
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {globalVillagesGrid.map((imgMap, index) =>(
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
      </BgPattern>

      {/* Honey Comb */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            Honey Comb
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {honeyCombGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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
      </BgPattern>

      {/* MENTALIST */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            MENTALIST
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {mentalistGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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
      </BgPattern>

{/* PET DAY */}
<BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            PET DAY
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {petDayGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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
      </BgPattern>
    </main>
  );
}
