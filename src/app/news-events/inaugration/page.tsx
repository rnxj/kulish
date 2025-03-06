'use client';

import Image from 'next/image';

export default function InaugrationPage() {
  const inaugrationGrid = [
    { key: 1, src: '/news-events/inaugration/1.JPG' },
    { key: 2, src: '/news-events/inaugration/2.JPG' },
    { key: 3, src: '/news-events/inaugration/3.JPG' },
    { key: 4, src: '/news-events/inaugration/4.JPG' },
    { key: 5, src: '/news-events/inaugration/5.JPG' },
    { key: 6, src: '/news-events/inaugration/6.jpg' },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[70vh] w-full overflow-hidden'>
        <Image
          src='/news-events/inaugration/TOP.JPG'
          alt='Academics Hero'
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      {/* Info Section */}
      <section className='bg-[#f7f7f7] px-5 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-4 font-serif text-2xl font-light text-[#333] md:text-3xl'>
            Vice President Jagdeep Dhankhar inaugurated
            <br /> The Kulish School located in Jagatpura in the capital Jaipur
          </h2>
          {/* <h3 className='mb-5 text-xl font-normal text-[#555]'>Kulish Community Service Program</h3> */}
          <p className='mx-auto w-[85%] text-sm leading-relaxed text-[#666]'>
            Hon'ble Vice President, Shri Jagdeep Dhankhar and Dr. Sudesh Dhankhar visited various
            facilities of The Kulish School and interacted with students in Jaipur, Rajasthan
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <div className='container mx-auto w-10/12 p-4 md:py-12'>
        <div className='grid grid-cols-1 gap-8'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {inaugrationGrid.map((imgMap, index) => (
              <div className='relative grid-cols-3 gap-4 overflow-hidden' key={index}>
                <img
                  src={imgMap.src}
                  alt='Inaugration Grid'
                  width={200}
                  height={200}
                  className='h-[200px] w-[200px] object-cover md:h-[400px] md:w-[400px]'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
