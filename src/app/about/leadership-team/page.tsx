'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BgPattern } from '@/components/bg-pattern';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function AboutPage() {
  const heroImages = ['/leadership-team/hero/1.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedPerson, setSelectedPerson] = useState<(typeof leadershipTeam)[0] | (typeof experts)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handleLeadershipClick = ()=>{
    console.log("clicked finally");
  }

  const leadershipTeam = [
    {
      name: 'Mrs. Vrinda Kothari',
      title: 'Director',
      description: [
        "Kulish Ji's unwavering commitment to the significance of value-based living remains a perpetual source of inspiration for us.",
        'Central to our educational approach is the assimilation of a robust value system. This entails the inculcation of principles such as integrity, empathy, responsibility, compassion, resilience, and respect within each student.',
        'At ‘The Kulsh School,’ our unwavering commitment extends to the creation of an environment conducive to the flourishing of our students. Our objective is to provide a space where they can explore and unveil their inherent genius, enabling them to contribute their utmost to all endeavors and positively impact society.',
      ],
      image: '/leadership-team/team/vrinda.jpg',
      color: 'bg-blue-600',
    },
    {
      name: 'Dr. Arvind Kalia',
      title: 'Director',
      description: [
        'Dr. Arvind Kalia is a visionary Director focused on fostering innovation and excellence in education.',
        'With years of experience in the education sector, Dr. Kalia has been instrumental in implementing policies that inspire students and teachers alike. His leadership has transformed the academic culture, emphasizing a collaborative and value-driven learning environment.',
      ],
      image: '/leadership-team/team/arvind.jpg',
      color: 'bg-cyan-600',
    },
    {
      name: 'Debasish Chakrabarty',
      title: 'Principal',
      description: [
        'Debasish Chakrabarty, the principal of The Kulish School, is an alumnus of Jawaharlal Nehru University with a Master’s and academic research experience in English and Semiotics.',
        'He has nearly three decades of experience in teaching, leading, and mentoring at institutions such as the National Institute of Design, Ahmedabad; The Doon School, Dehradun; and GEMS Modern Academy, Dubai.',
        'Passionate about designing enriching experiences and nurturing young minds, he loves engaging students in conversations about world literature, mythology, poetry, semiotics, and ways of seeing.',
      ],
      image: '/leadership-team/team/debasish.jpg',
      color: 'bg-teal-600',
    },
  ];
  const experts = [
    {
      name: 'Abha Seth',
      title: "Middle Years' Coordinator",
      description: [
        'Abha Seth, the Middle Years’ Coordinator at The Kulish School, is a dedicated educator with a passion for nurturing young minds.',
        'With a Master’s degree in English Literature and a background in teaching, Abha brings a wealth of experience to the table.',
        'Her role involves overseeing the Middle Years’ Programme, ensuring that students receive a comprehensive and engaging educational experience.',
      ],
      image: '/leadership-team/team/abha.jpg',
    },
    {
      name: 'Antara Naik',
      title: "Primary Years' Programme Coordinator",
      description: [
        'Antara Naik, the Primary Years’ Programme Coordinator at The Kulish School, is an experienced educator with a strong commitment to nurturing young learners.',
        'With a Master’s degree in English Literature and a background in teaching, Antara brings a wealth of experience to the table.',
        'Her role involves overseeing the Primary Years’ Programme, ensuring that students receive a comprehensive and engaging educational experience.',
      ],
      image: '/leadership-team/team/antara.jpg',
    },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex flex-col'>
        <section className='relative h-full w-full flex-1'>
          <Image
            src={heroImages[currentIndex]}
            alt='Curriculum Video Thumbnail'
            priority
            height={500}
            width={500}
            className='max-h-[calc(100vh-80px)] w-full object-cover'
          />
          <div className='absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 rounded-md bg-black/50 p-4'>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* Leadership Team Section */}
        <BgPattern
          lines={[
            { orientation: 'horizontal', start: 0, end: 0.3, position: 0.5 },
            { orientation: 'horizontal', start: 0, end: 1, position: 0.05 },
            { orientation: 'horizontal', start: 0.3, end: 1, position: 0.2, variant: 'dashed' },
            { orientation: 'horizontal', start: 0.3, end: 1, position: 0.9, variant: 'dashed' },
            { orientation: 'horizontal', start: 0, end: 1, position: 1 },
            { orientation: 'vertical', start: 0, end: 1, position: 0.3 },
            { orientation: 'vertical', start: 0, end: 1, position: 0.02, variant: 'dashed' },
            { orientation: 'vertical', start: 0, end: 1, position: 0.32, variant: 'dashed' },
          ]}
        >
          <div className='mx-4 px-4 pb-24 pt-36 md:mx-12'>
            <div className='grid grid-cols-1 gap-16 lg:grid-cols-[2fr_5fr]'>
              {/* Left Section - Positioned higher */}
              <div onClick={handleLeadershipClick} className='-mt-20'>
                <h2 className='mb-4 font-serif text-4xl font-light tracking-wide text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                  Leadership
                </h2>
                <h3 className='mb-8 font-serif text-4xl font-light tracking-wide text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                  Team
                </h3>
                <p className='text-lg leading-relaxed text-gray-600'>
                  Meet our dedicated team of educators and administrators who are committed to
                  providing the highest quality education. Our leadership team includes experienced
                  professionals with a passion for fostering student growth and development.
                </p>
              </div>

              {/* Right Section - Positioned lower */}
              <div className='mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
                {leadershipTeam.map((member) => (
                  <div
                    key={member.name}
                    className='flex cursor-pointer flex-col'
                    onClick={handleLeadershipClick
                    //   () => {
                    //   console.log("hello",member);
                    //   setSelectedPerson(member);
                    //   setIsDialogOpen(true);
                    //   console.log(member);
                    // }
                  }
                  >
                    <div className='relative aspect-[3/4] w-full overflow-hidden'>
                      <Image src={member.image} alt={member.name} fill className='object-cover' />
                      <div className={`absolute bottom-0 h-8 w-full ${member.color}`} />
                    </div>
                    <div className='mt-4 space-y-1'>
                      <h4 className='font-serif text-xl text-gray-700'>{member.name}</h4>
                      <p className='text-gray-600'>{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BgPattern>

        {/* Experts Section */}
        <BgPattern
          lines={[
            { orientation: 'horizontal', start: 0, end: 1, position: 0.17, variant: 'dashed' },
            { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
            { orientation: 'horizontal', start: 0, end: 1, position: 0.14 },
          ]}
        >
          <div className='container mx-auto px-4 py-16'>
            <div className='relative mb-16 text-center'>
              <h2 className='relative z-10 font-serif text-4xl font-light tracking-wide text-gray-700'>
                Meet Our Experts
              </h2>
            </div>

            <div className='mx-auto flex max-w-4xl divide-x divide-gray-200'>
              {experts.map((expert, index) => (
                <div
                  key={expert.name}
                  className={`relative flex-1 cursor-pointer ${index === 0 ? 'pr-12' : 'pl-12'}`}
                  onClick={() => {
                    setSelectedPerson(expert);
                    setIsDialogOpen(true);
                  }}
                >
                  <div className='relative aspect-square overflow-hidden'>
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='mt-6 text-center'>
                    <h3 className='font-serif text-2xl text-gray-700'>{expert.name}</h3>
                    {Array.isArray(expert.title) ? (
                      expert.title.map((line, index) => (
                        <p key={index} className='text-gray-600'>
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className='text-gray-600'>{expert.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BgPattern>
      </div>
            
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='max-w-5xl p-0'>
          <DialogHeader className='hidden' />
          <DialogTitle className='hidden'>{selectedPerson?.name}</DialogTitle>
          {selectedPerson && (
            <BgPattern
              lines={[
                { orientation: 'horizontal', start: 0, end: 1, position: 0.12 },
                { orientation: 'horizontal', start: 0, end: 1, position: 0.88 },
                {
                  orientation: 'horizontal',
                  start: 0.37,
                  end: 1,
                  position: 0.72,
                  variant: 'dashed',
                },
                { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
                { orientation: 'vertical', start: 0, end: 1, position: 0.37 },
                { orientation: 'vertical', start: 0, end: 1, position: 0.39, variant: 'dashed' },
              ]}
              className='p-4 md:px-12 md:py-24'
            >
              <div className='flex flex-col gap-16 sm:flex-row'>
                <div className='relative w-1/3 shrink-0'>
                  <div className='relative aspect-[3/4] w-full overflow-hidden'>
                    <Image
                      src={selectedPerson.image}
                      alt={selectedPerson.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div className='flex flex-col space-y-4'>
                    {selectedPerson.description.map((paragraph, index) => (
                      <p key={index} className='leading-relaxed text-gray-700'>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className='mt-4 space-y-1'>
                    <h4 className='font-serif text-xl text-gray-700'>{selectedPerson.name}</h4>
                    <p className='text-gray-600'>{selectedPerson.title}</p>
                  </div>
                </div>
              </div>
            </BgPattern>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
