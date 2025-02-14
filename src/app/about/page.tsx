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
        "Vrinda Kothari heads the education wing of Rajasthan Patrika, one of India’s leading Hindi dailies. A visionary entrepreneur, she was honored with the YFLO Entrepreneur of the Year Award in 2018.",
        'With a deep passion for education, art, design, and architecture, Vrinda brings a multidisciplinary approach to her work. A trained jewelry designer, she also holds a diploma in Interior Design from Parsons – The New School, New York, reflecting her keen eye for aesthetics and innovation.',
        'Her love for children and commitment to education led her to lead The Kulish School, where she plays an active role in both academics and administration. She envisions the school as a thriving learning community that fosters holistic growth for all—students, parents, and educators alike. Through her leadership, Vrinda strives to create an environment where education is not just about knowledge but about empowerment, creativity, and meaningful engagement.',
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
      image: '/leadership-team/team/MR. ARVIND KALIA ON ABOUT US LEADERSHIP TEAM.png',
      color: 'bg-cyan-600',
    },
    {
      name: 'Debasish Chakrabarty',
      title: 'Principal',
      description: [
        'Debasish Chakrabarty, an alumnus of Jawaharlal Nehru University with a background in English and Semiotics, has nearly three decades of experience in teaching and mentoring at institutions such as the National Institute of Design, Ahmedabad, The Doon School, Dehradun and GEMS Education, Dubai.',
        'Passionate about designing enriching experiences and nurturing young minds, he is well-versed in world literature and mythology, particularly the role of women in shaping mythologies and the history of ideas. His love for teaching extends to poetry, literature, semiotics, and ways of seeing. With a keen interest and expertise in instructional design, change leadership, and sustainable education systems, he has developed impactful assessment programs and academic appraisal systems.',
        'Chakrabarty serves and champions in many roles at the IB Education Network. He holds a Certificate in School Management and Leadership from Harvard and an IPGCE from University College London. He is passionate about educational leadership and systems thinking and currently leads The Kulish School, an educational extension of the Rajasthan Patrika Group.',
      ],
      image: '/leadership-team/team/debasish.jpg',
      color: 'bg-teal-600',
    },
  ];
  const experts = [
    {
      name: 'Abha Seth',
      title: "Middle Years’ Coordinator",
      description: [
        'Abha Seth, the Middle Years Coordinator at The Kulish School, Jaipur, brings over 17 years of diverse experience in education across India, UAE, and Indonesia. She holds a Bachelor’s in Management and Education, along with double Master’s degrees in English and Management. Certified through IB CAT 1 & 2 workshops, she is also CTET-qualified with a 7.5 IELTS score. ',
        'Abha is passionate about inquiry-based learning and curriculum design, integrating Sustainable Development Goals into the Middle Years program. She has led workshops for IB educators globally, including SAIBSA and the International Community of Teachers.',
        'As a parent at TKS and an advocate for parent agency, Abha strives to build a collaborative learning community where learners take ownership of their education.',
      ],
      image: '/leadership-team/team/abha.jpg',
    },
    {
      name: 'Antara Naik',
      title: "Primary Years' Programme Coordinator",
      description: [
        'Antara is a dedicated educator, mentor, and facilitator with a strong foundation in the International Baccalaureate Primary Years Programme (IB PYP). Since beginning her IB career in 2010, she has been instrumental in founding several IB schools across NCR. Her early experiences sparked a deep fascination with how students construct understanding, leading to her passion for inquiry-based and integrative teaching methods. She strongly believes in the uniqueness of every child, advocating for individualized care and attention to nurture their growth.',
        'Her commitment extends beyond the classroom, working collaboratively with teachers and school leaders to enhance student engagement, improve academic achievement, and support educators through professional development. A trailblazer in the field of education, Antara is currently associated with The Kulish School of the Patrika Group, where she is actively developing a curriculum that fosters well-being and emphasizes skill-based learning.In addition to her contributions to education, Antara is a dedicated animal activist.',
        'She has worked closely with numerous rescue shelters, playing a vital role in rehabilitating abandoned animals. Her compassion extends into her personal life, where three of these rescued animals have found a special place in her home and heart.',
      ],
      image: '/leadership-team/team/VICE PRINCIPAL PHOTO.png',
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
      
              <div id='vision' className='grid md:min-h-[700px] grid-cols-1 md:gap-8 md:p-12 lg:grid-cols-[1fr_2fr]'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='flex h-full flex-col justify-center lg:p-8'
                >
                  <h2 className='font-serif text-4xl font-light text-gray-700 decoration-gray-300 decoration-1'>
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
        <div id='mission' className='grid min-h-[700px] grid-cols-1 md:gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
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
            className='flex h-full lg:mt-12 flex-col space-y-6 lg:p-8'
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
                          <div className='mt-4 text-center space-y-1'>
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
                      <DialogContent className='max-w-5xl overflow-auto max-h-full p-0'>
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
                            <div className='flex flex-col items-center justify-center gap-16 sm:flex-row'>
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
