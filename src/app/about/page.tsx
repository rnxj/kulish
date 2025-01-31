'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { BgPattern } from '@/components/bg-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AboutPage() {
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

      {/* About Content */}
      <div className='grid min-h-[600px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-2'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex items-center'
        >
          <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
            About Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex items-center'
        >
          <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='item-1' className='border-sky-500'>
              <AccordionTrigger>The Kulish School</AccordionTrigger>
              <AccordionContent>
                The Kulish School is dedicated to providing excellence in education while nurturing
                individual growth and development.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2' className='border-sky-500'>
              <AccordionTrigger>The Patrika Group</AccordionTrigger>
              <AccordionContent>
                The Patrika Group represents our commitment to quality education and holistic
                development.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3' className='border-sky-500'>
              <AccordionTrigger>Legacy</AccordionTrigger>
              <AccordionContent>
                Our legacy is built on years of educational excellence and commitment to nurturing
                future leaders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-5' className='border-sky-500'>
              <AccordionTrigger>Our Vision</AccordionTrigger>
              <AccordionContent>
                To be a leading institution that empowers students with knowledge, skills, and
                values for a successful future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-6' className='border-sky-500'>
              <AccordionTrigger>Our Mission</AccordionTrigger>
              <AccordionContent>
                To provide quality education that develops well-rounded individuals prepared for the
                challenges of tomorrow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-4' className='border-sky-500'>
              <AccordionTrigger>Welcome Message From The Principal</AccordionTrigger>
              <AccordionContent>
                Welcome to The Kulish School. We are committed to providing a nurturing environment
                where students can thrive academically and personally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-7' className='border-sky-500'>
              <AccordionTrigger>Approach & Outlook</AccordionTrigger>
              <AccordionContent>
                We follow a student-centric approach that combines traditional values with modern
                educational methods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-8' className='border-sky-500'>
              <AccordionTrigger>Traditional Values</AccordionTrigger>
              <AccordionContent>
                We uphold traditional values while embracing modern educational practices to create
                a balanced learning environment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>

      {/* Info Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.1 },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.9, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.33, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.3 },
          { orientation: 'horizontal', start: 0, end: 0.3, position: 0.5, variant: 'dashed' },
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6'
          >
            <p className='text-gray-800'>
              Welcome to The Kulish School (TKS), one of Jaipur's premier institutions dedicated to
              providing holistic education that caters to students from diverse backgrounds.
            </p>

            <p className='text-gray-800'>
              At The Kulish School, we combine academic excellence with personal growth, preparing
              students to become curious, creative, and independent learners with a global
              perspective. We are committed to fostering inquiry-driven, hands-on, and experiential
              learning, seamlessly integrating with our curricular framework.
            </p>

            <p className='text-gray-800'>
              The Kulish School is a candidate school for the IB-PYP. The school is pursuing
              authorization as an IB World School. These are schools that share a common philosophy
              as commitment to high quality, challenging, international that The Kulish School
              believes in for enriching the lives of students.
            </p>

            <p className='text-sm text-gray-700'>
              *Only schools authorized by the IB Organization can offer any of its four academic
              programmes: the Primary Years Programme (PYP), the Middle Years Programme (MYP), the
              Diploma Programme, or the Career-related Programme (CP). Candidate status gives no
              guarantee that authorization will be granted. For further information about the IB and
              its programmes, visit{' '}
              <a href='http://www.ibo.org' className='text-blue-600 hover:underline'>
                www.ibo.org
              </a>
            </p>
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
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[2fr_1fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex h-full flex-col justify-center space-y-6 lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              The Patrika Group
            </h2>

            <p className='text-gray-800'>
              The Kulish School is associated with the Patrika Group, one of the most widely
              recognized and accomplished media houses in the world. The Patrika Group is dedicated
              to democracy and promotes cherished values enshrined in the Indian Constitution.
              Forbes describes it as "Keeping readers above advertisers", The New York Times calls
              it "Civic-minded hyper-local with large circulation", and a Wharton University article
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

      {/* Legacy Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex h-full flex-col justify-center lg:p-8'
          >
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Legacy
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
              Karpoor Chadra 'Kulish' was born in the village Soda, Rajasthan. Since childhood, he
              aspired to scale new heights. His fiery verses were revolutionary, promising the
              common man liberation, in a world gripped by chains. His verses articulated the
              essence of strife, the prescience of upheaval to bring about the dawn of a new era; he
              saw the world brimming with the promise of liberation.
            </p>

            <p className='text-gray-800'>
              In his poetic musings, there resided a profound belief in the potential for
              transformation, in the resilience of the human spirit against adversity, drawing
              inspiration from mythological narratives of cosmic battles, where righteousness
              eternally triumphs over malevolence. Karpoor Chandra adopted the pen name "Kulish,"
              which signified the very lightning that the Vedic Indra wielded against the demon of
              darkness, Vritra. He embraced the essence of this piercing weapon as his being,
              resonating with the symbolism of the ultimate divine weapon wielded for the
              restoration of righteousness when darkness looms large.
            </p>

            <p className='text-gray-800'>
              Rooted deeply in Vedic wisdom, Kulishji, as he was fondly known, delved into profound
              research, culminating in the monumental compilation of the Vedas and Puranas into
              Shada Veda. These timeless principles, interwoven with his spirit, form the foundation
              of The Kulish School, seeking to inspire generations to embrace truth and
              enlightenment.
            </p>

            <p className='text-gray-800'>
              Kulish's journalistic crusade endowed him with a profound understanding of life's
              intricacies, infusing his vision with a dynamic spirit grounded in real-world
              application—a vision that The Kulish School embraces.
            </p>
          </motion.div>
        </div>
      </BgPattern>

      {/* Future Vision Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.07, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.93, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'vertical', start: 0.07, end: 0.93, position: 0.67, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative w-full'
          >
            <Image
              src='/about/students.jpg'
              alt='The Kulish School Students'
              width={1200}
              height={400}
              className='w-full object-cover'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mx-auto max-w-3xl space-y-4 text-center'
          >
            <div className='flex justify-center'>
              <Image
                src='/about/butterfly.png'
                alt='Butterfly Icon'
                width={80}
                height={80}
                className='opacity-60'
              />
            </div>

            <blockquote className='text-lg text-gray-600'>
              "A baby born today will be thirty-something in 2050. If all goes well, that baby will
              still be around in 2100, and might even be an active citizen in the 22nd century. What
              should we teach that baby that will help him or her survive and flourish in the world
              of 2050 or of the 22nd century? What kind of skills will he or she need in order to
              get a job, understand what is happening around them and, navigate the maze of life?"
            </blockquote>

            <div className='space-y-1 pt-4'>
              <p className='font-medium text-gray-800'>Yuval Noah Harari</p>
              <p className='text-sm text-gray-600'>Futurist and renowned author</p>
            </div>
          </motion.div>
        </div>
      </BgPattern>

      {/* Principal's Message Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          <div className='flex h-full flex-col justify-center lg:p-8'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Welcome Message From The Principal
            </h2>
          </div>

          <div className='flex h-full flex-col justify-center space-y-6 lg:p-8'>
            <p className='text-gray-800'>
              Welcome to The Kulish School! As we stand on the threshold of an exciting new chapter,
              I am filled with immense pride and optimism. The Kulish School is more than just a
              place of learning; it is a community where students are nurtured to become curious,
              compassionate, and confident individuals who are ready to embrace the challenges of
              the future.
            </p>

            <p className='text-gray-800'>
              Inspired by Kurt Hahn's words, "There is more in us than we know," we are committed to
              unlocking the full potential of every student. Through our unique blend of the IB PYP
              framework, Vedic values, and Round Square principles, we aim to foster holistic
              development that prepares students for a rapidly evolving world.
            </p>

            <h3 className='font-medium text-gray-800'>Our Educational Pathway</h3>
            <p className='text-gray-800'>
              At The Kulish School, we believe in the transformative power of education. Guided by
              the philosophy of "Evolved Learning," our approach is grounded in three key
              principles:
            </p>

            <ul className='space-y-4 text-gray-800'>
              <li>
                <span className='font-medium'>Purpose:</span> We align our vision with NEP 2020,
                ensuring that our educational objectives respond to the needs of our time, foster
                adaptability, and combat inequity.
              </li>
              <li>
                <span className='font-medium'>Pedagogy:</span> Our pedagogical practices emphasize
                experiential, hands-on learning. From innovation labs to language immersion in
                Sanskrit, we cultivate an environment where learning is engaging and meaningful.
              </li>
              <li>
                <span className='font-medium'>Position:</span> Every element of our curriculum is
                designed to support our mission of nurturing globally aware, ethically driven
                citizens who are committed to making a positive impact.
              </li>
            </ul>

            <h3 className='font-medium text-gray-800'>Holistic Growth and Cultural Preservation</h3>
            <p className='text-gray-800'>
              Our curriculum goes beyond academics to include a rich array of activities aimed at
              personal growth and cultural immersion. From Taekwondo to classical music, from
              Devanagari script learning to environmental stewardship, our students are encouraged
              to explore diverse paths of learning and self-expression. Rooted in the values of the
              Vedas, we emphasize the importance of controlling our senses while exposing students
              to the world of creativity, innovation, and collaboration.
            </p>

            <h3 className='font-medium text-gray-800'>
              A Commitment to Data-Driven Decision Making
            </h3>
            <p className='text-gray-800'>
              We are more conscious than ever that data lies at the heart of effective
              decision-making. Through collaborative learning and the thoughtful collection of data
              from our classrooms, playgrounds, and activities, we ensure that every decision made
              benefits both our students and the larger community. Empathy and mindfulness guide us
              as we work together toward a shared vision of success.
            </p>

            <p className='text-gray-800'>
              In this founding year, we dedicate ourselves to creating a culture where learning is a
              shared, continuous journey. Our motto, विद्या अमृतम् अश्नुते ("By knowledge is eternal
              life attained"), serves as our guiding light.
            </p>

            <div className='pt-4'>
              <p className='font-medium text-gray-800'>Warm wishes,</p>
              <p className='text-gray-800'>Principal, The Kulish School</p>
            </div>
          </div>
        </div>
      </BgPattern>

      {/* Vision & Mission Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0.06, end: 0.94, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0.06, end: 0.94, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.06, end: 0.94, position: 0.5, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.06, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.94, variant: 'dashed' },
        ]}
      >
        <div className='relative min-h-[700px]'>
          {/* Top-right squares - centered at (94%, 3%) */}
          <div className='absolute right-[calc(6%-12px)] top-[calc(3%-12px)] hidden grid-cols-3 gap-1 lg:grid'>
            {[...Array(9)].map((_, i) => (
              <div key={`tr-${i}`} className='h-2 w-2 bg-sky-500' />
            ))}
          </div>

          {/* Bottom-left squares - centered at (6%, 97%) */}
          <div className='absolute bottom-[calc(3%-12px)] left-[calc(6%-12px)] hidden grid-cols-3 gap-1 lg:grid'>
            {[...Array(9)].map((_, i) => (
              <div key={`bl-${i}`} className='h-2 w-2 bg-sky-500' />
            ))}
          </div>

          {/* Content */}
          <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-2'>
            {/* Vision Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex h-full flex-col space-y-6 lg:p-16'
            >
              <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                Vision
              </h2>
              <p className='text-gray-800'>
                The Kulish School will empower future leaders with a focus on innovation, global
                citizenship, and compassionate caregiving-- blending the skills of futuristic
                learning and traditional Indian values. Our vision is to nurture adaptable, creative
                thinkers ready to excel in a dynamic, interconnected world.
              </p>
            </motion.div>

            {/* Mission Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex h-full flex-col space-y-6 lg:p-8'
            >
              <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
                Mission
              </h2>
              <div className='space-y-6'>
                <p className='text-gray-800'>
                  The Kulish School is committed to shaping the future by preparing students to
                  excel in a globally connected India. Our mission is defined by the acronym
                  L.E.A.D.E.R.S:
                </p>

                <ul className='space-y-4 text-gray-800'>
                  <li>
                    <span className='font-medium'>Leadership Skills:</span> Cultivating effective,
                    compassionate leadership abilities in our students.
                  </li>
                  <li>
                    <span className='font-medium'>Excellence in Academics:</span> Ensuring academic
                    rigour and excellence in education.
                  </li>
                  <li>
                    <span className='font-medium'>Awareness:</span> Promoting cultural awareness and
                    sensitivity.
                  </li>
                  <li>
                    <span className='font-medium'>Diversity:</span> Embracing diverse backgrounds to
                    enrich the learning experience.
                  </li>
                  <li>
                    <span className='font-medium'>Ethical Citizenship:</span> Instilling principles
                    of ethical behaviour and responsible citizenship.
                  </li>
                  <li>
                    <span className='font-medium'>Rich Cultural Heritage:</span> Integrating India's
                    rich cultural heritage into our educational approach.
                  </li>
                  <li>
                    <span className='font-medium'>Social Contribution:</span> Preparing students to
                    actively contribute to society, both locally and globally.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </BgPattern>

      {/* Approach and Traditional Values Section */}
      <BgPattern
        lines={[
          { orientation: 'horizontal', start: 0, end: 1, position: 0.03, variant: 'dashed' },
          { orientation: 'horizontal', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0, end: 1, position: 0.97, variant: 'dashed' },
          { orientation: 'vertical', start: 0.03, end: 0.97, position: 0.33, variant: 'dashed' },
        ]}
      >
        <div className='grid min-h-[700px] grid-cols-1 gap-8 p-4 md:p-12 lg:grid-cols-[1fr_2fr]'>
          {/* Left Column */}
          <div className='flex h-full flex-col space-y-6 lg:p-8'>
            <h2 className='font-serif text-4xl font-light text-gray-700 underline decoration-gray-300 decoration-1 underline-offset-8'>
              Approach and outlook
            </h2>
            <p className='text-gray-800'>
              The Kulish School emerges as a future-ready institution, guided by a visionary
              approach to education. It is a school at the forefront of cutting-edge knowledge, and
              evolved learning.
            </p>
          </div>

          {/* Right Column */}
          <div className='flex h-full flex-col justify-between space-y-12 lg:p-8'>
            {/* Approach Section */}
            <div className='space-y-6'>
              <p className='text-gray-800'>
                At The Kulish School, we are dedicated to fostering the holistic development of our
                students, valuing both internal and external growth. Internally, we prioritize the
                cultivation of knowledge, expertise, and essential soft skills. Externally, we
                recognize the significance of being well-informed in a world driven by information.
                Embracing the uniqueness of each individual, our school provides an environment
                conducive to expression and self-actualization.
              </p>

              <p className='text-gray-800'>
                We understand the importance of preparing students for the challenges of the post-AI
                era and a world grappling with disruptions like climate change. Our commitment lies
                in creating a nurturing space that goes beyond conventional education. We aim to
                equip students not just with academic prowess but with the skills and mindset needed
                for an explorative future. The Kulish School stands as a beacon for those seeking an
                education that transcends boundaries, preparing young minds for a dynamic world.
              </p>
            </div>

            {/* Traditional Values Section */}
            <div className='space-y-6'>
              <h3 className='font-serif text-3xl font-light text-gray-700'>Traditional Values</h3>

              <p className='text-gray-800'>
                At The Kulish School, we take pride in fostering traditional Indian values rooted in
                respect, hospitality, and the belief that the world is one family— वसुधैव कुटुम्बकम्
                (vasudhaiva kutumbakam). Our school is committed to honouring India's rich cultural
                heritage while embracing the universal principles of unity and sustainability that
                these traditions embody.
              </p>

              <p className='text-gray-800'>
                We celebrate India's diverse festivals such as Diwali, Eid, Christmas, and seasonal
                events, recognizing their deeper meanings and their connections to global
                sustainability goals. These observances promote respect for nature, unity among
                communities, and a spirit of inclusivity that aligns with our nation's commitment to
                secularism.
              </p>

              <p className='text-gray-800'>
                The Kulish School is committed to cultivating a culture of mutual respect,
                discipline, and inclusivity. We embrace the unique needs and abilities of all
                learners, nurturing a learning environment that honours both individual potential
                and collective growth, in line with India's timeless values.
              </p>
            </div>
          </div>
        </div>
      </BgPattern>
    </main>
  );
}
