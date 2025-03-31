import { notFound } from 'next/navigation';

import { BgPattern } from '@/components/bg-pattern';

const stagesData = {
  'early-years': {
    title: 'EARLY YEARS',
    number: '01',
    content: [
      {
        title: '',
        description:
          'At our school, the Early Years curriculum provides a nurturing and stimulating environment for young learners, fostering their natural curiosity and love for learning. We emphasize play-based learning, where children explore and discover through hands-on activities that engage their senses and imaginations. Our experiential learning approach is enhanced by our extensive outdoor learning spaces, where children can connect with nature and learn through real-world experiences.',
      },
      {
        title: '',
        description:
          'We offer robust programs in sports, promoting physical development and teamwork. Our specially curated literacy sessions and math lab provide targeted support to strengthen foundational skills. These sessions are designed to build critical skills, including thinking, communication, social, self-management, and research skills.',
      },
      {
        title: '',
        description:
          'Our Early Years curriculum lays a solid foundation for lifelong learning through a rich tapestry of play, creativity, and experiential education',
      },
      // {
      //   title: 'Building Strong Foundations: Literacy, Math, and Sports',
      //   description:
      //     'We offer robust programs that build critical literacy and math foundations through curated lessons and hands-on learning in our math lab. Alongside academic development, our sports program promotes physical fitness and teamwork, helping children be active while building important social skills. These experiences also focus on developing key Approaches to Learning (ATL) skills, including thinking, communication, social, self-management, and research abilities.',
      // },
      // {
      //   title: 'Cultivating the Learner Profile',
      //   description:
      //     'Our curriculum seamlessly integrates the Learner Profile attributes—such as being inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, and reflective—into everyday activities. By nurturing these traits, we empower students to grow into well-rounded individuals ready to engage with a changing world, demonstrating local and global mindedness.',
      // },
      // {
      //   title: 'Laying the Foundation for Lifelong Learning',
      //   description:
      //     'Our Early Years curriculum is a rich tapestry of play, creativity, and experiential exploration, fostering a deep sense of wonder and curiosity about the world. With a strong emphasis on holistic development, we help shape confident, curious, and resilient individuals ready to navigate the world with enthusiasm.',
      // },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.33, position: 0.3, variant: 'dashed' },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.08 },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.95, variant: 'dashed' },
    ] as const,
  },
  'primary-school': {
    title: 'PRIMARY YEARS PROGRAMME',
    number: '02',
    content: [
      {
        title: "Early Years (Nursery, KG1 & KG2)",
        description:
          'At our school, the Early Years curriculum provides a nurturing and stimulating environment for young learners, fostering their natural curiosity and love for learning. We emphasize play-based learning, where children explore and discover through hands-on activities that engage their senses and imaginations. Our experiential learning approach is enhanced by our extensive outdoor learning spaces, where children can connect with nature and learn through real-world experiences. We offer robust programs in sports, promoting physical development and teamwork. Our specially curated literacy sessions and math lab provide targeted support to strengthen foundational skills. These sessions are designed to build critical skills, including thinking, communication, social, self-management, and research skills. Our Early Years curriculum lays a solid foundation for lifelong learning through a rich tapestry of play, creativity, and experiential education.',
      },
      {
        title: "",
        description:
          'Our Early Years curriculum lays a solid foundation for lifelong learning through a rich tapestry of play, creativity, and experiential education.',
      },
      {
        title: "Grades 1 to 5",
        description:
          'The Primary School, offering international curriculum caters to students from Grade 1 to Grade 5. Our curriculum covers languages, social studies, mathematics, science, arts, and physical education, providing a broad academic experience that emphasizes the connections between subjects and fosters an international perspective.',
      },
      {
        title: '',
        description:
          "Teaching practices encourage curiosity, inquiry, and critical thinking through an inquiry-based approach, allowing students to learn individually or collaboratively. Lessons build on students' understanding and interests, engaging them in real-life, purposeful learning. Technology is integrated into all subjects, enhancing the learning experience.",
      },
      {
        title: '',
        description:
          'We aim to nurture attitudes like creativity, empathy, independence, and respect, and encourage students to take meaningful action within and beyond the school community. Assessment strategies are varied, offering insight into student progress, with opportunities for students to share their learning through student-led conferences.',
        // bulletPoints: [
        //   'Science: Understanding habitats',
        //   'Language: Reading and writing about animals',
        //   'Art: Creating representations of flora and fauna',
        //   'Music: Exploring natural sounds',
        // ],
      },
      // {
      //   title: 'Collaborative Learning and Social Skills Development',
      //   description:
      //     'The experiential units in the PYP foster collaborative learning, where children work together to investigate, ask questions, and share ideas. This collaborative environment helps develop essential social skills such as communication, teamwork, and empathy, which are critical for their future interactions both inside and outside the classroom.',
      // },
      // {
      //   title: 'Building Critical Thinkers and Lifelong Learners',
      //   description:
      //     'Through inquiry-based learning, children at The Kulish School develop critical thinking skills and gain a sense of ownership over their learning process. By asking questions, seeking answers, and reflecting on their experiences, they become empowered to take control of their education. The PYP aims to inspire lifelong learners who are not only knowledgeable but also adaptable and innovative in their approach to problem-solving.',
      // },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.35, position: 0.3, variant: 'dashed' },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.08 },
      { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
    ] as const,
  },
  'middle-school': {
    title: 'MIDDLE YEARS',
    number: '03',
    content: [
      {
        title: '',
        description:
          'The Middle Years curriculum (national and international) is designed to provide learners with a robust and rigorous academic experience. Students will be exposed to various disciplines and their connections to future careers and vocations.',
      },
      {
        title: '',
        description:
          "The pedagogy in the Middle Years focuses on investigation and exploration, along with hands-on experiences. The academic curriculum is supplemented and complemented by strong arts and sports programs.",
      },
      // {
      //   title: 'Real-World Connections',
      //   description:
      //     'Our interdisciplinary approach ensures that learning is interconnected across subjects, encouraging students to make meaningful connections. For instance, a project on climate change may involve scientific research, technological innovation, and effective communication, equipping students with the tools to address complex global issues.',
      // },
      // {
      //   title: 'Collaboration and Leadership Development',
      //   description:
      //     'Collaboration is at the heart of the MYC, with students working closely with peers and teachers to develop leadership, teamwork, and communication skills. By fostering student agency and reflective practices, the MYC nurtures capable, independent learners prepared for future challenges.',
      // },
      // {
      //   title: 'Globally Minded and Resilient Learners',
      //   description:
      //     "The Kulish School's MYC cultivates globally minded, resilient individuals who are ready to thrive both academically and personally. Our holistic approach ensures students are equipped to succeed in an interconnected world.",
      // },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.33, position: 0.3, variant: 'dashed' },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.08 },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.98, variant: 'dashed' },
    ] as const,
  },
} as const;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  if (!['early-years', 'primary-school', 'middle-school'].includes(slug)) {
    notFound();
  }

  const data = stagesData[slug as keyof typeof stagesData];

  return (
    
    <BgPattern lines={[...data.lines]}>
      <div className='min-h-screen'>
        <div className='px-4 md:px-16'>
          <div className='grid md:grid-cols-[15fr_15fr_70fr] gap-8'>
            {/* First column - 15% - Number */}
            <div className='md:border-r border-gray-400 pt-8'>
              <div className='text-5xl font-light text-sky-500'>
                <div className='w-16 font-serif text-5xl md:text-6xl font-medium text-sky-500'>
                  {data.number}/
                </div>
              </div>
            </div>

            {/* Second column - 15% - Title */}
            <div className='md:border-r pr-4 border-gray-400 md:pt-20'>
              <h1 className='text-xl font-extrabold tracking-wide text-gray-700 md:text-4xl'>
                {data.title}
              </h1>
            </div>

            {/* Third column - 70% - Content */}
            <div className='space-y-6 md:py-20'>
              {data.content.map((section, index) => (
                <section key={index} className='space-y-3'>
                  <h2 className='font-extrabold text-black'>{section.title}</h2>
                  <p className='leading-relaxed'>{section.description}</p>
                  {/* {'bulletPoints' in section && section.bulletPoints && (
                    <ul className='list-disc space-y-2 pl-4'>
                      {section.bulletPoints.map((point, i) => (
                        <li key={i}>
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BgPattern>
  );
}
