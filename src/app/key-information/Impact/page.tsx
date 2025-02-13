'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function Innovation() {
const blindGrid = [
  { key:1, src:"/key-information/Impact/Blind/1.jpeg" },
  { key:2, src:"/key-information/Impact/Blind/2.jpeg" },
  { key:3, src:"/key-information/Impact/Blind/3.jpeg" },
  { key:4, src:"/key-information/Impact/Blind/4.jpeg" },
  { key:5, src:"/key-information/Impact/Blind/5.jpeg" },
  { key:6, src:"/key-information/Impact/Blind/5.jpeg" },

];

const globalGrid = [
  { key:1, src:"/key-information/Impact/Global/1.jpg" },
  { key:2, src:"/key-information/Impact/Global/2.jpg" },
  { key:3, src:"/key-information/Impact/Global/3.jpg" },
  { key:4, src:"/key-information/Impact/Global/4.jpg" },
  { key:5, src:"/key-information/Impact/Global/5.jpg" },
  { key:6, src:"/key-information/Impact/Global/6.jpg" },
]

const roadGrid = [
  { key:1, src:"/key-information/Impact/Road/1.JPG" },
  { key:2, src:"/key-information/Impact/Road/2.JPG" },
  { key:3, src:"/key-information/Impact/Road/3.JPG" },
  { key:4, src:"/key-information/Impact/Road/4.JPG" },
  { key:5, src:"/key-information/Impact/Road/5.JPG" },
  { key:6, src:"/key-information/Impact/Road/6.JPG" },
]

const sambherGrid = [
  { key:1, src:"/key-information/Impact/sambher/1.JPG" },
  { key:2, src:"/key-information/Impact/sambher/2.JPG" },
  { key:3, src:"/key-information/Impact/sambher/3.JPG" },
  { key:4, src:"/key-information/Impact/sambher/4.JPG" },
  { key:5, src:"/key-information/Impact/sambher/5.JPG" },
  { key:6, src:"/key-information/Impact/sambher/6.JPG" },
]
const saveGrid = [
  { key:1, src:"/key-information/Impact/Save/1.png" },
  { key:3, src:"/key-information/Impact/Save/3.png" },
  { key:4, src:"/key-information/Impact/Save/4.png" },
]
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full overflow-hidden'>
        <Image
          src='/key-information/Impact/The Kulish School key information impact top.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-4xl font-light text-[#333]'>IMPACT</h2>
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

      {/* Cards Section */}
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
              BLIND SCHOOL
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {blindGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Tech Lab Grid'
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

      {/* GLOBAL VILLAGE */}
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
            GLOBAL VILLAGE
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {globalGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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

      {/* ROAD SAFETY */}
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
            ROAD SAFETY
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {roadGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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

{/* SAMBHER */}
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
            SAMBHER
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {sambherGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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

      {/* SAVE WATER */}
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
            SAVE WATER
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>
          <div className='relative grid-cols-1 gap-4 overflow-hidden' >
                <Image
                  src="/key-information/Impact/Save/2.png"
                  alt='Geobiology Grid'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover'
                />
              </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
            {saveGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Geobiology Grid'
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
