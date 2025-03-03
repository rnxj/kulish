import Image from 'next/image';
import { notFound } from 'next/navigation';

const posts = {
  '1': {
    title: 'Tinkering: The Gateway to Imagination!',
    content:
      "In our Tinkering Lab, students are discovering the joy of creating and exploring. Through hands-on experiments, they're learning to turn ideas into reality, sparking innovation and imagination along the way. This is where the magic of learning begins!",
    heroImage: '/explore-section/1.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 1 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 1 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 1 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 1 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 1 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 1 POPUP/6.jpg'
    ]
  },
  '2': {
    title: 'Earth Day in Action: Learning Through Planting!',
    content:
      "Celebrating Earth Day with action and education! Our students planted saplings and engaged in interactive lessons about environmental conservation, the water cycle, and the benefits of greenery. Through this activity, they've learned that small steps can lead to big changes for a healthier planet.",
    heroImage: '/explore-section/2.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 2 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 2 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 2 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 2 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 2 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 2 POPUP/6.jpg'
    ]
  },
  '3': {
    title: 'Starting the Day with Energy and Balance!',
    content:
      "Active mornings, active minds! In our school, physical activities like yoga and sports during the morning assembly are not just exercises; they're life lessons. Students learn the value of fitness, mindfulness, and teamwork, building habits that support their academic and personal growth.",
    heroImage: '/explore-section/3.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 3 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 3 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 3 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 3 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 3 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 3 POPUP/6.jpg'
    ]
  },
  '4': {
    title: 'Art in Action: Unleashing Imagination!',
    content:
      'At our school, every child is an artist! Through colors and creativity, students bring their imaginations to life, exploring new perspectives and expressing their unique ideas in a supportive and inspiring environment.',
    heroImage: '/explore-section/4.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 4 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 4 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 4 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 4 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 4 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 4 POPUP/6.jpg'
    ]
  },
  '5': {
    title: 'Innovation in Action: Learning Robotics!',
    content:
      "In our robotics lab, students are diving into the world of technology, coding, and engineering. Through hands-on learning, they are building robots that not only ignite their creativity but also develop critical thinking, problem-solving, and teamwork skills. It's more than just robots—it's about preparing for the future!",
    heroImage: '/explore-section/5.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 5 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 5 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 5 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 5 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 5 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 5 POPUP/6.jpg'
    ]
  },
  '6': {
    title: 'Enrichment Programmes',
    content:
      "In our robotics lab, students are diving into the world of technology, coding, and engineering. Through hands-on learning, they are building robots that not only ignite their creativity but also develop critical thinking, problem-solving, and teamwork skills. It's more than just robots—it's about preparing for the future!",
    heroImage: '/explore-section/6.jpg',
    contentSrc:[
      '/explore-section/EXPLORE IMAGE 6 POPUP/1.jpg',
      '/explore-section/EXPLORE IMAGE 6 POPUP/2.jpg',
      '/explore-section/EXPLORE IMAGE 6 POPUP/3.jpg',
      '/explore-section/EXPLORE IMAGE 6 POPUP/4.jpg',
      '/explore-section/EXPLORE IMAGE 6 POPUP/5.jpg',
      '/explore-section/EXPLORE IMAGE 6 POPUP/6.jpg'
    ]
  },
} as const;

type PostKey = keyof typeof posts;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  if (!['1', '2', '3', '4', '5', '6'].includes(slug)) {
    notFound();
  }

  // Create an array of all post entries for the grid
  const allPosts = Object.entries(posts).map(([key, post]) => ({
    id: key,
    ...post,
  }));

  return (
    <main className='min-h-screen'>
      {/* Hero Image Section */}
      <div className='flex h-[calc(100vh-80px)] flex-col'>
        <section className='relative w-full flex-1'>
          <Image
            src={posts[slug as PostKey].heroImage}
            alt={posts[slug as PostKey].title}
            fill
            className='object-cover'
            priority
          />
        </section>

        {/* Curriculum Overview */}
        <div className='bg-gray-100 py-12 text-center font-serif'>
          <div className='mx-auto max-w-4xl px-4'>
            <h3 className='mb-4 text-xl lg:text-3xl'>{posts[slug as PostKey].title}</h3>
            <p>{posts[slug as PostKey].content}</p>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className='bg-blue-100/50 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {(posts[slug as PostKey].contentSrc).map((img) => ( 
              <div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
                <Image
                  src={img}
                  alt="Image"
                  fill
                  className='object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
