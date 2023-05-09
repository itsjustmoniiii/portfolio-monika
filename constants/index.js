import fhlogo from '../public/assets/fhlogo.png';
import elements from '../public/assets/elements.png';

const technologies = [
  {
    name: 'Tailwind CSS',
    icon: 'assets/logos/tailwind.png',
  },
  {
    name: 'Bootstrap',
    icon: 'assets/logos/bootstrap.png',
  },
  {
    name: 'SASS',
    icon: 'assets/logos/sass.png',
  },
  {
    name: 'JavaScript',
    icon: 'assets/logos/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: 'assets/logos/typescript.png',
  },
  {
    name: 'React JS',
    icon: 'assets/logos/react.png',
  },
  {
    name: 'Vue JS',
    icon: 'assets/logos/vue.png',
  },
  {
    name: 'Next JS',
    icon: 'assets/logos/nextjs.svg',
  },
  {
    name: 'Express JS',
    icon: 'assets/logos/express.png',
  },
  {
    name: 'MongoDB',
    icon: 'assets/logos/mongodb.png',
  },
  {
    name: 'Prisma',
    icon: 'assets/logos/prisma.png',
  },
  {
    name: 'Git',
    icon: 'assets/logos/git.png',
  },
  {
    name: 'Flutter',
    icon: 'assets/logos/flutter.png',
  },
  {
    name: 'Figma',
    icon: 'assets/logos/figma.png',
  },
  {
    name: 'Adobe XD',
    icon: 'assets/logos/adobexd.png',
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'elements',
    icon: elements,
    iconBg: '#383E56',
    date: 'July 2022 - October 2022',
    info: 'My internship at element was a defining experience in my journey as a developer. As a frontend developer, I was given the opportunity to work on a range of exciting projects using cutting-edge web frameworks like React and Vue. It was an incredible feeling to bring complex designs to life through code, turning static images into dynamic, interactive web components.',
  },
  {
    title: 'Student',
    company_name: 'FH St.Pölten',
    icon: fhlogo,
    iconBg: '#E6DEDD',
    date: 'September 2020 - September 2023',
    info: 'During my studies, I had the opportunity to gain valuable experience in a wide variety of programming languages and technologies. Whether working alone or as part of a team, each project presented its own unique set of challenges and opportunities to learn and grow as a developer.',
  },
];

const projects = [
  {
    name: 'travelfam',
    short_description: 'Travelfam - A Social Media Plattform for Travelers',
    long_description:
      'Travelfam - A Social Media Plattform for Travelers is a social media platform for travelers. You can publish posts with images, follow other travel users and see the top 10 trending posts as well as users.',
    tag: {
      name: '#programming',
      color: 'bg-gradient-to-r from-[#06666d] to-[#12bbc8]',
    },
    tagsDetail: [
      {
        name: 'reactjs',
        image: 'assets/logos/react.png',
      },
      {
        name: 'nextjs',
        image: 'assets/logos/nextjs.svg',
      },
      {
        name: 'mongodb',
        image: 'assets/logos/mongodb.png',
      },
      {
        name: 'tailwind',
        image: 'assets/logos/tailwind.png',
      },
      {
        name: 'prisma',
        image: 'assets/logos/prisma.png',
      },
      {
        name: 'typescript',
        image: 'assets/logos/typescript.png',
      },
    ],
    image: '/assets/travelfam.png',
    website_link: 'https://travelfam-ts.vercel.app',
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "assets/logos/adobexd.png",
  //   source_code_link: "https://github.com/",
  // },
];

export { experiences, technologies, projects };
