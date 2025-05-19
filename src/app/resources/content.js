import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Mohammed Sinan",
  lastName: "AR",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "IoT Engineer",
  avatar: "/images/avatar.jpg",
  email: "mhdsinan1284@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Email</>,
  description: (
    <>
      Software engineer passionate about embedded systems, IoT , robotics, coding, automation, AI, and exploring emerging tech innovation
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sinan-1284",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhdsinan1284/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/sinan_1284",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Innovative Software Engineer Driving Embedded Systems, IoT, and Emerging Tech Solutions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Tempro</strong></>,
    href: "/work/tempro",
  },
  subline: (
    <>
      I'm Sinan, Passionate about creating, teaching, and evolving with technology.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software engineer passionate about embedded systems, IoT , robotics, coding, automation, AI, and exploring emerging tech innovation
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NextBot Labs",
        timeframe: "2025 - Present",
        role: "Founder, CEO",
        achievements: [
          <>
            Delivered hands-on IoT and robotics training to high school and college students across multiple institutions.
          </>,
          <>
           Collaborated with schools and colleges to conduct certified workshops and bootcamps.
          </>,
          <>
           Led interactive, curriculum-aligned sessions covering Arduino, IoT, and robotics fundamentals with real-time demos.</>
        ],
        images: [],
      },
       {
        company: "Curiosity Weekends",
        timeframe: "2024 - Present",
        role: "Co-founder,Senior Iot Engineer",
        achievements: [
          <>
           Enabled over 100 students to build their first IoT and robotics projects through hands-on workshops and mentorship.
          </>,
          <>
           provided young innovators with space, tools, and guidance to build and develop their tech projects.
          </>,
          <>
           Collaborated with schools and colleges to introduce practical tech education through workshops and project-based learning.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Govt. Technical Institute",
        description: <>Studing Electronic and communication.</>,
      },
      {
        name: "Little Kites",
        description: <>Studied programming,Iot.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ME",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
