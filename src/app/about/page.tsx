'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import { BgPattern } from '@/components/bg-pattern';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AboutPage() {

  const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPerson, setSelectedPerson] = useState<
      (typeof leadershipTeam)[0] | (typeof experts)[0] | null
    >(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        'Mr. Arvind Kalia, a renowned academician, is the Director of the board of Kulish School.',
        'Dr. Kalia is a management expert who completed his Advanced Management Program at one of America\'s premier institutions, The Kellogg School of Business, Chicago. Dr. Kalia was recently invited to be a member of the Advisory Council for the prestigious journal \'Harvard Business Review,\' published by Harvard University. Dr. Kalia has also completed an Advanced Analytics MDP from IIM Ahmedabad. With this knowledge, he has developed a \'Special Assessment Suite\' for school education, which will enable 360-degree evaluation of students.',
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative min-h-[800px] w-full'
      >
        <Image src='/about/hero.jpeg' alt='Hero image' fill className='object-cover' priority />
      </motion.div>

      {/* Vision Section */}
            <BgPattern
              lines={[
                { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
                { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
                { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
                { orientation: 'vertical', start: 0, end: 1, position: 0.33, variant: 'dashed' },
                { orientation: 'vertical', start: 0, end: 1, position: 0.3 },
                { orientation: 'horizontal', start: 0, end: 0.3, position: 0.5, variant: 'dashed' },
                { orientation: 'horizontal', start: 0.3, end: 0.5, position: 0.52 },
                { orientation: 'horizontal', start: 0.3, end: 1, position: 0.3, variant: 'dashed' },
                { orientation: 'horizontal', start: 0.3, end: 1, position: 0.7 },
              ]}
            >
              <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
                <div className='grid h-full gap-8 lg:grid-rows-2'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='flex items-center justify-center'
                  >
                    <Image
                      src='/logo.png'
                      alt='The Kulish School Logo'
                      width={300}
                      height={300}
                      className='w-full max-w-[300px]'
                    />
                  </motion.div>
                  <div></div>
                </div>
      
              <div id='vision' className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='flex h-full flex-col justify-center lg:p-8'
                >
                  <h2 className='font-serif text-4xl font-light text-gray-700 decoration-gray-300 decoration-1 underline-offset-8'>
                    Vision
                  </h2>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='flex h-full flex-col justify-center space-y-6 lg:p-8'
                >
                  <p className='text-gray-800'>
                  The Kulish School will empower future leaders with a focus on innovation, global
                      citizenship, and compassionate caregiving-- blending the skills of futuristic
                      learning and traditional Indian values. Our vision is to nurture adaptable, creative
                      thinkers ready to excel in a dynamic, interconnected world.
                  </p>
                </motion.div>
              </div>
              </div>
            </BgPattern>

      {/* Mission Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.17, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div id='mission' className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex h-full flex-col lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 decoration-gray-300 decoration-1 underline-offset-8'>
              Mission
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full mt-12 flex-col space-y-6 lg:p-8'
          >
            <p className='text-gray-800'>
                  The Kulish School is committed to shaping the future by preparing students to
                  excel in a globally connected India. Our mission is defined by the acronym
                  L.E.A.D.E.R.S:
                </p>

                <ul className='space-y-4 text-gray-800'>
                  <li>
                    <span className='font-bold'>Leadership Skills:</span> Cultivating effective,
                    compassionate leadership abilities in our students.
                  </li>
                  <li>
                    <span className='font-bold'>Excellence in Academics:</span> Ensuring academic
                    rigour and excellence in education.
                  </li>
                  <li>
                    <span className='font-bold'>Awareness:</span> Promoting cultural awareness and
                    sensitivity.
                  </li>
                  <li>
                    <span className='font-bold'>Diversity:</span> Embracing diverse backgrounds to
                    enrich the learning experience.
                  </li>
                  <li>
                    <span className='font-bold'>Ethical Citizenship:</span> Instilling principles
                    of ethical behaviour and responsible citizenship.
                  </li>
                  <li>
                    <span className='font-bold'>Rich Cultural Heritage:</span> Integrating India's
                    rich cultural heritage into our educational approach.
                  </li>
                  <li>
                    <span className='font-bold'>Social Contribution:</span> Preparing students to
                    actively contribute to society, both locally and globally.
                  </li>
                </ul>
          </motion.div>
        </div>
      </BgPattern>

      {/* The Patrika Group Section */}
            <BgPattern
              lines={[
                { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
                { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
                { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
                { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.67, variant: 'dashed' },
              ]}
            >
              <div id='legacy' className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[2fr_1fr]'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='flex h-full flex-col justify-center space-y-6 lg:p-8'
                >
                  <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                    Our Legacy - <br/>
                    The Patrika Group
                  </h2>
      
                  <p className='text-gray-800'>
                    The Kulish School is associated with the Patrika Group, one of the most widely
                    recognized and accomplished media houses in the world. The Patrika Group is dedicated
                    to democracy and promotes cherished values enshrined in the Indian Constitution.
                    Forbes describes it as "Keeping readers above advertisers," The New York Times calls
                    it "Civic-minded hyper-local with large circulation," and a Wharton University article
                    describes it as a "Publishing House with pan-India presence." It is among the three
                    most trusted newspapers according to a BBC-Reuters survey and among Asia's five top
                    community newspapers per AMIC UNESCO.
                  </p>
      
                  <p className='text-gray-800'>
                    The Patrika Group was founded by the late Karpoor Chandra 'Kulish', a renowned Vedic
                    scholar and entrepreneur who revived the scientific aspects of ancient Indian
                    scriptures. He believed education was the "mightiest divine weapon" to destroy
                    ignorance and that true knowledge invites enlightenment about oneself and the world
                    around us.
                  </p>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='flex items-center justify-center'
                  style={{
                    backgroundImage: 'url(/about/bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Image
                    src='/about/patrika-group.png'
                    alt='Patrika Group Logo'
                    width={400}
                    height={400}
                    className='w-full max-w-[400px]'
                  />
                </motion.div>
              </div>
            </BgPattern>

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
                <div id='leadership-team' className='mx-4 px-4 pb-24 pt-36 md:mx-12'>
                  <div className='grid grid-cols-1 gap-16 lg:grid-cols-[2fr_5fr]'>
                    {/* Left Section - Positioned higher */}
                    <div className='-mt-20'>
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
                          onClick={() => {
                            setSelectedPerson(member);
                            setIsDialogOpen(true);
                          }}
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
