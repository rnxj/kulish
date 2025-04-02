'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function Innovation() {
const techLabGrid = [
  { key:1, src:"/key-information/innovation/TECH LAB 1.JPG" },
  { key:2, src:"/key-information/innovation/TECH LAB 2.jpg" },
  { key:3, src:"/key-information/innovation/TECH LAB 3.jpg" },
  { key:4, src:"/key-information/innovation/TECH LAB 4.jpg" },
  { key:5, src:"/key-information/innovation/TECH LAB 5.jpg" },
  { key:6, src:"/key-information/innovation/TECH LAB 6.jpg" },
];

const geobiologySrc = [
  { key:1, src:"/key-information/innovation/Geobiology 1.png" },
  { key:2, src:"/key-information/innovation/Geobiology 2.png" },
  { key:3, src:"/key-information/innovation/Geobiology 3.png" },
  { key:4, src:"/key-information/innovation/Geobiology 4.png" },
  { key:5, src:"/key-information/innovation/Geobiology 5.png" },
  { key:6, src:"/key-information/innovation/Geobiology 6.png" },
]
const artLabSrc = [
  { key:1, src:"/key-information/innovation/ART LAB 9.jpg" }, //
  { key:2, src:"/key-information/innovation/ART LAB 10.jpg" }, //
  { key:3, src:"/key-information/innovation/ART LAB 3.png" },
  { key:4, src:"/key-information/innovation/ART LAB 4.jpg" },
  { key:5, src:"/key-information/innovation/ART LAB 11.jpg" }, //
  { key:6, src:"/key-information/innovation/ART LAB 12.jpg" }, //
]

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src='/key-information/hero.jpg'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-2xl md:text-4xl font-light text-[#333]'>INNOVATION</h2>
          <p className='mx-auto w-[75%] text-sm leading-relaxed text-[#666]'>
          The Kulish School features cutting-edge spaces designed to inspire curiosity and creativity in students through hands-on exploration. Built around the themes of geobiology, STEM, and visual arts, these labs offer unique opportunities for students to engage with real-world scientific concepts, creativity, self-expression, observation, design, and critical thinking.
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
          {/* TECH LAB */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-2xl md:text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
              TECH LAB
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {techLabGrid.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' >
                <Image
                  src={imgMap.src}
                  alt='Tech Lab Grid'
                  key={index}
                  width={400}
                  height={400}
                  className={`h-[500px] w-full object-cover ${index==0 || index==1 ? 'object-right-top' : '' }`}
                />
              </div>
              )
            )}
            </div>
          </div>
        </div>
      </BgPattern>

      {/* GEOBIOLOGY */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.08, variant: 'dashed' },
        ]}
      >
        <div className='container items-center mx-auto p-4 w-10/12 md:py-12'>
          {/* Title */}
          <div className='mb-12 items-center mx-auto'>
            <h2 className='font-serif text-center text-2xl md:text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            GEOBIOLOGY
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {geobiologySrc.map((imgMap, index) =>(
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

      {/* ART LAB */}
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
            <h2 className='font-serif text-center text-2xl md:text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
            ART LAB
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 '>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {artLabSrc.map((imgMap, index) =>(
            <div className='relative grid-cols-3 gap-4 overflow-hidden' key={index} >
                <Image
                  src={imgMap.src}
                  alt='ART LAB'
                  width={400}
                  height={400}
                  className='h-[500px] w-full object-cover object-top'
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
