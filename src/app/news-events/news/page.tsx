'use client';

import { useState } from "react";
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function NewsPage() {
  const images = Array.from({ length: 30 }, (_, i) => `/news-events/NEWS/new-png/Kulish News-${i + 1}.jpg`);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className='bg-[#f7f7f7] min-h-screen'>
      <div className='relative h-[20vh] md:h-[70vh] w-full overflow-hidden'>
        <Image
          src='/news-events/NEWS/TOP.jpg'
          alt='Academics Hero'
          fill
          className='object-none md:object-cover transition-transform duration-500 hover:scale-110'
          priority
        />
      </div>

      <section className='bg-[#f7f7f7] px-5 py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='font-serif text-2xl md:text-4xl font-light text-[#333]'>NEWS COVERAGE</h2>
        </div>
      </section>

      <div className='container bg-[#f7f7f7] items-center mx-auto p-4 w-10/12 md:py-8'>
        <div className='bg-[#f7f7f7] grid grid-cols-1 gap-8'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {images.map((src, i) => (
              <div
                key={i}
                className='relative grid-cols-3 gap-4 overflow-hidden'
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={src}
                  alt={`News ${i + 1}`}
                  width={400}
                  height={400}
                  priority
                  className='h-[200px] w-[200px] md:h-[400px] md:w-[400px] object-cover cursor-pointer'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </main>
  );
}
