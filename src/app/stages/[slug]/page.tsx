import { notFound } from 'next/navigation';

import { BgPattern } from '@/components/bg-pattern';

const stagesData = {
  'early-years': {
    title: 'EARLY YEARS',
    number: '01',
    content: [
      {
        title: 'A Nurturing Start: The Early Years Curriculum',
        description:
          'At our school, the Early Years curriculum provides a warm, stimulating environment where young learners thrive. By fostering natural curiosity and a love for learning, we create a space where children feel encouraged to explore and discover. Our approach emphasizes play-based learning, allowing students to engage in hands-on activities that stimulate their senses and spark their imaginations.',
      },
      {
        title: 'Experiential Learning in Nature',
        description:
          'Our curriculum is enhanced by extensive outdoor learning spaces, where children explore their environment and engage in real-world experiences. This approach not only enhances their understanding of the environment but also instills a sense of wonder and respect for the world around them. Through these outdoor activities, children learn by doing, building confidence as they navigate new challenges.',
      },
      {
        title: 'Creativity through the Arts',
        description:
          'A cornerstone of our Early Years program is a focus on storytelling, performing arts, and visual art. These creative outlets allow students to express themselves freely while developing essential skills in empathy and communication. By exploring different perspectives, children cultivate Learner Profile attributes, such as open-mindedness, communicative skills, and reflection, which are central to their personal growth.',
      },
      {
        title: 'Building Strong Foundations: Literacy, Math, and Sports',
        description:
          'We offer robust programs that build critical literacy and math foundations through curated lessons and hands-on learning in our math lab. Alongside academic development, our sports program promotes physical fitness and teamwork, helping children be active while building important social skills. These experiences also focus on developing key Approaches to Learning (ATL) skills, including thinking, communication, social, self-management, and research abilities.',
      },
      {
        title: 'Cultivating the Learner Profile',
        description:
          'Our curriculum seamlessly integrates the Learner Profile attributes—such as being inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, and reflective—into everyday activities. By nurturing these traits, we empower students to grow into well-rounded individuals ready to engage with a changing world, demonstrating local and global mindedness.',
      },
      {
        title: 'Laying the Foundation for Lifelong Learning',
        description:
          'Our Early Years curriculum is a rich tapestry of play, creativity, and experiential exploration, fostering a deep sense of wonder and curiosity about the world. With a strong emphasis on holistic development, we help shape confident, curious, and resilient individuals ready to navigate the world with enthusiasm.',
      },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.33, position: 0.2, variant: 'dashed' },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.95, variant: 'dashed' },
    ] as const,
  },
  'primary-school': {
    title: 'PRIMARY SCHOOL',
    number: '02',
    content: [
      {
        title: "The Kulish School's Primary Years Programme (PYP)",
        description:
          'As a candidate school for IB PYP authorization, the Primary Years Programme (PYP) at The Kulish School is designed to create a joyful and nurturing learning environment where children feel secure, confident, and connected to their identities. This foundational stage of education emphasizes emotional and social well-being, ensuring every child feels valued and included as they adjust to new surroundings.',
      },
      {
        title: 'Fostering Inquiry and Exploration',
        description:
          "At the heart of the PYP is a deep commitment to inquiry and exploration as fundamental pathways for learning. Children are naturally curious and eager to understand the world around them. To nurture this curiosity, we offer a wide range of hands-on experiences that engage children's senses and imagination. These activities are carefully organized around thematic units and expeditions, which connect various subjects, enabling children to explore complex ideas within meaningful contexts.",
      },
      {
        title: 'Integrated and Holistic Learning',
        description:
          'The PYP integrates subjects such as language, science, social studies, music, movement, physical education, and STEM, breaking down traditional boundaries between disciplines. This approach encourages children to see the connections between different areas of knowledge. For example, a unit on ecosystems might combine:',
        bulletPoints: [
          'Science: Understanding habitats',
          'Language: Reading and writing about animals',
          'Art: Creating representations of flora and fauna',
          'Music: Exploring natural sounds',
        ],
      },
      {
        title: 'Collaborative Learning and Social Skills Development',
        description:
          'The experiential units in the PYP foster collaborative learning, where children work together to investigate, ask questions, and share ideas. This collaborative environment helps develop essential social skills such as communication, teamwork, and empathy, which are critical for their future interactions both inside and outside the classroom.',
      },
      {
        title: 'Building Critical Thinkers and Lifelong Learners',
        description:
          'Through inquiry-based learning, children at The Kulish School develop critical thinking skills and gain a sense of ownership over their learning process. By asking questions, seeking answers, and reflecting on their experiences, they become empowered to take control of their education. The PYP aims to inspire lifelong learners who are not only knowledgeable but also adaptable and innovative in their approach to problem-solving.',
      },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.33, position: 0.15, variant: 'dashed' },
      { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
    ] as const,
  },
  'middle-school': {
    title: 'MIDDLE SCHOOL',
    number: '03',
    content: [
      {
        title: 'Middle Years Curriculum (MYC): A Holistic Approach',
        description:
          'The Middle Years Curriculum (MYC) at The Kulish School challenges students intellectually while supporting their personal, social, and emotional growth. Through Problem-Based Learning (PBL), Project-Based Learning, and Design Thinking, students engage in real-world challenges, honing critical thinking, creativity, and collaboration skills.',
      },
      {
        title: 'Interdisciplinary and Global Learning',
        description:
          "The MYC integrates subjects like science, mathematics, humanities, technology, and foreign languages, enhancing students' global perspectives and communication skills. Language acquisition is a key element, fostering appreciation for diverse cultures and promoting international-mindedness.",
      },
      {
        title: 'Real-World Connections',
        description:
          'Our interdisciplinary approach ensures that learning is interconnected across subjects, encouraging students to make meaningful connections. For instance, a project on climate change may involve scientific research, technological innovation, and effective communication, equipping students with the tools to address complex global issues.',
      },
      {
        title: 'Collaboration and Leadership Development',
        description:
          'Collaboration is at the heart of the MYC, with students working closely with peers and teachers to develop leadership, teamwork, and communication skills. By fostering student agency and reflective practices, the MYC nurtures capable, independent learners prepared for future challenges.',
      },
      {
        title: 'Globally Minded and Resilient Learners',
        description:
          "The Kulish School's MYC cultivates globally minded, resilient individuals who are ready to thrive both academically and personally. Our holistic approach ensures students are equipped to succeed in an interconnected world.",
      },
    ],
    lines: [
      { orientation: 'horizontal', start: 0, end: 0.33, position: 0.2, variant: 'dashed' },
      { orientation: 'horizontal', start: 0.33, end: 1, position: 0.95, variant: 'dashed' },
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
          <div className='grid grid-cols-[15fr_15fr_70fr] gap-8'>
            {/* First column - 15% - Number */}
            <div className='border-r border-gray-400 pt-8'>
              <div className='text-5xl font-light text-sky-500'>
                <div className='w-16 font-serif text-6xl font-medium text-sky-500'>
                  {data.number}/
                </div>
              </div>
            </div>

            {/* Second column - 15% - Title */}
            <div className='border-r border-gray-400 pt-20'>
              <h1 className='text-xl font-extrabold tracking-wide text-gray-700 md:text-4xl'>
                {data.title}
              </h1>
            </div>

            {/* Third column - 70% - Content */}
            <div className='space-y-6 py-20'>
              {data.content.map((section, index) => (
                <section key={index} className='space-y-3'>
                  <h2 className='font-extrabold text-black'>{section.title}</h2>
                  <p className='leading-relaxed'>{section.description}</p>
                  {'bulletPoints' in section && section.bulletPoints && (
                    <ul className='list-disc space-y-2 pl-4'>
                      {section.bulletPoints.map((point, i) => (
                        <li key={i}>
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BgPattern>
  );
}
