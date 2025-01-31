'use client';

import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';

export default function AcademicsPage() {
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
          <h2 className='mb-4 font-serif text-4xl font-light text-[#333]'>ENHANCERS</h2>
          <h3 className='mb-5 text-xl font-normal text-[#555]'>Kulish Community Service Program</h3>
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
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 md:py-12'>
          {/* Title */}
          <div className='mb-12'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Innovation, Initiative
              <br />& Impact at The Kulish
              <br />
              School
            </h2>
          </div>

          {/* Content Container */}
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]'>
            {/* Left Column - Text */}
            <div className='flex h-full flex-col justify-start space-y-6'>
              <p className='text-gray-800'>
                At The Kulish School, we believe in nurturing the holistic development of our
                students through a well-rounded curriculum that includes the 3Is—Innovation,
                Initiative & Impact. Our 3I program is designed to instill a sense of
                responsibility, teamwork, and empathy in our young learners. Through a variety of
                engaging and meaningful activities, we encourage students to become active,
                compassionate, and lifelong learners who understand the importance of contributing
                to their communities.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {/* Innovation Card */}
              <div className='relative overflow-hidden'>
                <Image
                  src='/key-information/innovation.jpg'
                  alt='Innovation'
                  width={400}
                  height={400}
                  className='h-[300px] w-full object-cover'
                />
                <div className='bg-blue-600 p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>INNOVATION</h5>
                </div>
              </div>

              {/* Initiative Card */}
              <div className='relative overflow-hidden'>
                <Image
                  src='/key-information/initiative.jpg'
                  alt='Initiative'
                  width={400}
                  height={400}
                  className='h-[300px] w-full object-cover'
                />
                <div className='bg-[#3aa4b4] p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>INITIATIVE</h5>
                </div>
              </div>

              {/* Impact Card */}
              <div className='relative overflow-hidden'>
                <Image
                  src='/key-information/impact.jpg'
                  alt='Impact'
                  width={400}
                  height={400}
                  className='h-[300px] w-full object-cover'
                />
                <div className='bg-[#5cbccb] p-4 text-center text-white'>
                  <h5 className='font-serif font-normal'>IMPACT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Innovation Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 md:py-12'>
          {/* Title */}
          <div className='mb-12'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Innovation
            </h2>
          </div>

          {/* Container */}
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]'>
            {/* Content Columns */}
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {/* First Column */}
              <div className='flex h-full flex-col justify-start space-y-4'>
                <p className='text-xs text-gray-800'>
                  Our community-focused innovation initiatives aim to connect students with the
                  world around them, fostering a sense of belonging and purpose. Students
                  participate in innovation-led projects that promote environmental stewardship,
                  cultural awareness, and social responsibility. By engaging in innovation
                  activities, students learn the value of collaboration and the impact they can make
                  in their local and global communities.
                </p>

                <div className='space-y-3'>
                  <div>
                    <h3 className='text-xs font-medium text-gray-800'>
                      Local Environmental Projects:
                    </h3>
                    <p className='text-xs text-gray-700'>
                      Students take part in activities such as Xeriscaping, reconstructive recycling
                      drives, and sustainability rights & awareness campaigns.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-xs font-medium text-gray-800'>Cultural Celebrations:</h3>
                    <p className='text-xs text-gray-700'>
                      Through celebrating diverse cultural events and festivals in the most
                      innovative manner possible, students gain an appreciation for different
                      traditions and perspectives through real-time engagement with cultural forms
                      and expressions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className='flex h-full flex-col justify-start space-y-4'>
                <p className='text-xs text-gray-800'>
                  The Kulish School are cutting-edge spaces designed to inspire curiosity and
                  creativity in students through hands-on exploration. Built around the themes of
                  Geobiology, STEM, and Organic Chemistry, these labs offer unique opportunities for
                  students to engage with real-world scientific concepts. From studying the
                  interaction between living organisms and the Earth in Geobiology, to experimenting
                  with STEM projects, and delving into the fascinating world of Organic
                  Chemistry—where students learn to create natural fragrances or complex products
                  using common lab chemicals—our labs foster a deep understanding of science and
                  innovation. These interdisciplinary experiences empower students to think
                  critically, collaborate, and develop practical solutions to complex problems.
                </p>
              </div>

              {/* Third Column */}
              <div className='flex h-full flex-col justify-start space-y-4'>
                <div className='space-y-3'>
                  <div>
                    <h3 className='text-xs font-medium text-gray-800'>Cultural Celebrations:</h3>
                    <p className='text-xs text-gray-700'>
                      Through celebrating diverse cultural events and festivals in the most
                      innovative manner possible, students gain an appreciation for different
                      traditions and perspectives through real-time engagement with cultural forms
                      and expressions.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-xs font-medium text-gray-800'>Innovation Labs:</h3>
                    <p className='text-xs text-gray-700'>
                      The Innovation Labs at The Kulish School are cutting-edge spaces designed to
                      inspire curiosity and creativity in students through hands-on exploration.
                      Built around the themes of Geobiology, STEM, and Organic Chemistry, these labs
                      offer unique opportunities for students to engage with real-world scientific
                      concepts. From studying the interaction between living organisms and the Earth
                      in Geobiology, to experimenting with STEM projects, and delving into the
                      fascinating world of Organic Chemistry—where students learn to create natural
                      fragrances or complex products using common lab chemicals—our labs foster a
                      deep understanding of science and innovation. These interdisciplinary
                      experiences empower students to think critically, collaborate, and develop
                      practical solutions to complex problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src='/key-information/innovation/1.jpg'
                alt='Innovation Activity 1'
                width={400}
                height={300}
                className='h-[200px] w-full object-cover'
              />
              <Image
                src='/key-information/innovation/2.jpg'
                alt='Innovation Activity 2'
                width={400}
                height={300}
                className='h-[200px] w-full object-cover'
              />
              <Image
                src='/key-information/innovation/3.jpg'
                alt='Innovation Activity 3'
                width={400}
                height={300}
                className='h-[200px] w-full object-cover'
              />
              <Image
                src='/key-information/innovation/4.jpg'
                alt='Innovation Activity 4'
                width={400}
                height={300}
                className='h-[200px] w-full object-cover'
              />
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Initiative Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 md:py-12'>
          {/* Title */}
          <div className='mb-12'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Initiative
            </h2>
          </div>

          {/* Container */}
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[3fr_4fr]'>
            {/* Content Columns */}
            <div className='flex flex-col justify-start space-y-4'>
              <Image
                src='/key-information/initiative/1.jpg'
                alt='Initiative Activity 1'
                width={400}
                height={300}
                className='h-[250px] w-full object-cover'
              />
              <div className='space-y-3'>
                <p className='text-sm text-gray-800'>
                  Physical activity is an essential component of our 3l program, promoting a healthy
                  lifestyle and the development of motor skills. We offer a wide range of sports and
                  physical activities that not only enhance physical fitness but also teach
                  important life skills such as teamwork, perseverance, and leadership.
                </p>
                <p className='text-md font-bold text-gray-800'>Sports Teams and Clubs</p>
                <p className='text-sm text-gray-700'>
                  Students can join teams or clubs for sports like soccer, basketball, Volleyball,
                  Skating where they learn the importance of cooperation and sportsmanship.
                </p>
              </div>
            </div>
            {/* Image Grid */}
            <div className='flex flex-col justify-start space-y-4'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <Image
                  src='/key-information/initiative/2.png'
                  alt='Initiative Activity 2'
                  width={400}
                  height={300}
                  className='h-[250px] w-full object-cover'
                />
                <Image
                  src='/key-information/initiative/3.jpg'
                  alt='Initiative Activity 2'
                  width={400}
                  height={300}
                  className='h-[250px] w-full object-cover'
                />
                <Image
                  src='/key-information/initiative/4.jpg'
                  alt='Initiative Activity 3'
                  width={400}
                  height={300}
                  className='h-[250px] w-full object-cover'
                />
              </div>
              <div className='space-y-3'>
                <p className='text-md font-bold text-gray-800'>Movement and Dance</p>
                <p className='text-sm text-gray-800'>
                  Dance and movement classes help students express themselves creatively while
                  improving their coordination and physical fitness.
                </p>
                <p className='text-md font-bold text-gray-800'>Outdoor Adventures</p>
                <p className='text-sm text-gray-700'>
                  Nature walks, hiking trips, and other outdoor activities provide opportunities for
                  students to explore and appreciate the natural world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Impact Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 md:py-12'>
          {/* Title */}
          <div className='mb-12'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Impact
            </h2>
          </div>

          {/* Container */}
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[3fr_4fr]'>
            {/* Content Columns */}
            <div>
              <Image
                src='/key-information/impact-lines.jpg'
                alt='Impact Activity 1'
                width={400}
                height={300}
                className='h-[400px] w-full object-cover'
              />
            </div>

            {/* Image Grid */}
            <div className='flex flex-col justify-start space-y-4'>
              <p className='text-sm text-gray-800'>
                An assessment of real impact is what drives our service activities. Impact
                activities are integral to our 3l program, as they encourage students to act on
                their empathy and compassion. By participating in impactful service projects,
                students develop a sense of commitment to helping others and learn the importance of
                giving back to their community.
              </p>
              <p className='text-sm text-gray-800'>
                <strong>Charity Drives </strong>
                Organizing food, clothing, and book drives helps students understand the needs of
                those less fortunate and encourages a spirit of generosity.
              </p>
              <p className='text-sm text-gray-800'>
                <strong>Peer Tutoring </strong>
                Older students have the opportunity to mentor and tutor younger peers, fostering a
                supportive and collaborative school environment.
              </p>
              <p className='text-sm text-gray-800'>
                <strong>Service-Learning Project </strong>
                Integrated into the curriculum, these projects allow students to apply their
                learning to real-world challenges, such as creating awareness campaigns for local
                issues or developing solutions to environmental problems.
              </p>
              <p className='text-sm text-gray-800'>
                At The Kulish School, our 3l programme is more than just a set of activities; it is
                a philosophy that shapes the character and values of our students. By engaging in
                innovation, initiative and impact, our students grow into well-rounded individuals
                who are prepared to make positive contributions to the world. We are proud to
                support our students in their journey to become thoughtful, active, and responsible
                global citizens.
              </p>
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Education for sustainability Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='container mx-auto p-4 md:py-12'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-[4fr_3fr]'>
            {/* Content Columns */}
            <div className='flex h-full flex-col justify-center'>
              <div className='mb-12 max-w-[60%]'>
                <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                  Education for
                  <br />
                  sustainable development
                  <br />
                  at The Kulish School
                </h2>
              </div>
              <div className='space-y-3'>
                <p>
                  At our school, we are committed to integrating the principles of{' '}
                  <span className='underline'>Education for Sustainable Development </span>
                  (ESD) into our everyday teaching and learning. By embedding the Sustainable
                  Development Goals (SDGs) into our curriculum, we empower our students to become
                  informed, responsible, and proactive global citizens who understand and act on the
                  world's most pressing challenges.
                </p>

                <p>
                  Our approach to ESD is holistic and transdisciplinary, ensuring that
                  sustainability is not confined to a single subject but is a core part of all
                  learning experiences. From exploring climate action in science classes to
                  discussing social justice in humanities, our students engage with the SDGs in
                  meaningful and practical ways
                </p>
              </div>
            </div>
            {/* Image Grid */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-4'>
                <div className='h-[10%]' />
                <div className='relative aspect-square h-[70%] overflow-hidden'>
                  <Image
                    src='/key-information/sustainability/1.jpg'
                    alt='Water ripples creating concentric circles'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative aspect-square h-[20%] overflow-hidden'>
                  <Image
                    src='/key-information/sustainability/2.jpg'
                    alt='Students engaged in hands-on learning activities'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='relative aspect-square h-[70%] overflow-hidden'>
                  <Image
                    src='/key-information/sustainability/3.jpg'
                    alt='Hands holding soil and a young plant'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative aspect-square h-[20%] overflow-hidden'>
                  <Image
                    src='/key-information/sustainability/4.jpg'
                    alt='Green leaf growing from tree trunk'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='h-[10%]' />
              </div>
            </div>
          </div>
        </div>
      </BgPattern>
    </main>
  );
}
