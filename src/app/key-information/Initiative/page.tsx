'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function Innovation() {
const bakeryGrid = [
  { key:1, src:"/key-information/initiative/BAKERY VISIT/1.JPG" },
  { key:2, src:"/key-information/initiative/BAKERY VISIT/2.JPG" },
  { key:3, src:"/key-information/initiative/BAKERY VISIT/3.JPG" },
  { key:4, src:"/key-information/initiative/BAKERY VISIT/4.JPG" },
  { key:5, src:"/key-information/initiative/BAKERY VISIT/5.JPG" },
  { key:6, src:"/key-information/initiative/BAKERY VISIT/6.JPG" },

];

const plantationGrid = [
  { key:1, src:"/key-information/initiative/PLANTATION/1.jpg" },
  { key:2, src:"/key-information/initiative/PLANTATION/2.jpg" },
  { key:3, src:"/key-information/initiative/PLANTATION/3.jpg" },
  { key:4, src:"/key-information/initiative/PLANTATION/4.jpg" },
  { key:5, src:"/key-information/initiative/PLANTATION/5.jpg" },
  { key:6, src:"/key-information/initiative/PLANTATION/6.jpg" },
]

const mountainGrid = [
  // { key:1, src:"/key-information/initiative/MOUNTENIERING/1.png" },
  { key:2, src:"/key-information/initiative/MOUNTENIERING/2.png" },
  { key:3, src:"/key-information/initiative/MOUNTENIERING/3.png" },
  { key:4, src:"/key-information/initiative/MOUNTENIERING/4.png" },
]

const artGrid = [
  // { key:1, src:"/key-information/initiative/ART MURAL/1.png" },
  { key:2, src:"/key-information/initiative/ART MURAL/2.png" },
  { key:3, src:"/key-information/initiative/ART MURAL/3.png" },
  { key:4, src:"/key-information/initiative/ART MURAL/4.png" },
]

const jaipurGrid = [
  { key:1, src:"/key-information/initiative/JAIPUR RUGS/1.jpg" },
  { key:2, src:"/key-information/initiative/JAIPUR RUGS/2.jpg" },
  { key:3, src:"/key-information/initiative/JAIPUR RUGS/3.jpg" },
  { key:4, src:"/key-information/initiative/JAIPUR RUGS/4.jpg" },
  { key:5, src:"/key-information/initiative/JAIPUR RUGS/5.jpg" },
  { key:6, src:"/key-information/initiative/JAIPUR RUGS/6.jpg" },
]

const radioGrid = [
  // { key:1, src:"/key-information/initiative/RADIO VISIT/1.jpg" },
  { key:2, src:"/key-information/initiative/RADIO VISIT/2.jpg" },
  { key:3, src:"/key-information/initiative/RADIO VISIT/3.jpg" },
  { key:4, src:"/key-information/initiative/RADIO VISIT/4.jpg" },
]
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full overflow-hidden'>
        <Image
          src='/key-information/initiative/The Kulish School key information INITIATIVE TOP.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-4xl font-light text-[#333]'>INITIATIVE</h2>
          <p className='mx-auto w-[85%] text-sm leading-relaxed text-[#666]'>
            At The Kulish School, we believe in nurturing the holistic development of our students
            through a well-rounded curriculum that includes Community, Activity, and Service (CAS).
            Aligned with the principles of the Primary Years Programme (PYP), our CAS program is
            designed to instill a sense of responsibility, teamwork, and empathy in our young
            learners. Through a variety of engaging and meaningful activities, we encourage students
            to become active, compassionate, and lifelong learners who understand the importance of
            contributing to their communities.
          </p>
        </div>
      </section>

      {/* BAKERY VISIT */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          // { orientation: 'horizontal', start: 0, end: 1, position: 0.98, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
          // { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* BLIND SCHOOL */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
              BAKERY VISIT
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {bakeryGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='BAKERY VISIT'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>

      {/* PLANTATION */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            PLANTATION
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {plantationGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='PLANTATION Grid'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>

      {/* MOUNTAINEERING */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            MOUNTAINEERING
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>
          <div className='relative grid-cols-1 gap-4 overflow-hidden' >
                <Image
                  src="/key-information/initiative/MOUNTENIERING/1.png"
                  alt='MOUNTAINEERING'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {mountainGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='MOUNTAINEERING'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>

{/* ART MURAL */}
<BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            ART MURAL
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>
          
          <div className='relative grid-cols-1 gap-4 overflow-hidden' >
                <Image
                  src="/key-information/initiative/ART MURAL/1.png"
                  alt='ART MURAL Grid'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {artGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='ART MURAL Grid'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>

      {/* JAIPUR RUGS */}
<BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            JAIPUR RUGS
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {jaipurGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='JAIPUR RUGS'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 1, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            RADIO STATION
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>
          <div className='relative grid-cols-1 gap-4 overflow-hidden' >
                <Image
                  src="/key-information/initiative/RADIO VISIT/1.jpg"
                  alt='RADIO STATION'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {radioGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='RADIO STATION'
                  key={index}
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
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
