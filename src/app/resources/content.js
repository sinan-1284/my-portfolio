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
  location: "Asia/Kolkata",
  languages: [],
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
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "NextBot Labs",
        timeframe: "2025 - Present",
        role: "Founder, CEO",
        achievements: [
          <>Delivered hands-on IoT and robotics training to high school and college students across multiple institutions.</>,
          <>Collaborated with schools and colleges to conduct certified workshops and bootcamps.</>,
          <>Led interactive, curriculum-aligned sessions covering Arduino, IoT, and robotics fundamentals with real-time demos.</>
        ],
        images: [],
      },
      {
        company: "Curiosity Weekends",
        timeframe: "2024 - Present",
        role: "Co-founder, Senior IoT Engineer",
        achievements: [
          <>Enabled over 100 students to build their first IoT and robotics projects through hands-on workshops and mentorship.</>,
          <>Provided young innovators with space, tools, and guidance to build and develop their tech projects.</>,
          <>Collaborated with schools and colleges to introduce practical tech education through workshops and project-based learning.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Govt. Technical Institute",
        description: <>Studying Electronics and Communication.</>,
      },
      {
        name: "Little Kites",
        description: <>Studied programming, IoT.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "IoT Project Prototyping and Deployment",
        description: <>Experienced in building and deploying IoT systems using ESP8266, sensors, actuators, and cloud platforms.</>,
        images: [],
      },
      {
        title: "C/C++ (Arduino)",
        description: <>Skilled in developing embedded systems using C/C++ for Arduino microcontrollers.</>,
        images: [],
      },
      {
        title: "MicroPython (ESP8266)",
        description: <>Comfortable programming ESP8266 boards using MicroPython for rapid IoT development.</>,
        images: [],
      },
      {
        title: "Blynk",
        description: <>Able to design IoT dashboards and remote controls using Blynk for real-time interaction.</>,
        images: [],
      },
      {
        title: "Git & GitHub",
        description: <>Proficient in version control and collaboration using Git and GitHub.</>,
        images: [],
      },
      {
        title: "VS Code & Arduino IDE",
        description: <>Efficient in coding, debugging, and managing projects using Visual Studio Code and Arduino IDE.</>,
        images: [],
      },
      {
        title: "Local Server Setup",
        description: <>Experienced in setting up and using local servers for IoT data collection and dashboard hosting.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Familiar with building full-stack web apps using Next.js, optimized for performance and SEO.</>,
        images: [],
      },
      {
        title: "Figma",
        description: <>Proficient in designing UI/UX prototypes using Figma for web and mobile interfaces.</>,
        images: [],
      },
      {
        title: "Robotics",
        description: <>Knowledgeable in robotics concepts and hands-on experience with Arduino-based robotics projects.</>,
        images: [],
      },
      {
        title: "AI & Automation",
        description: <>Interested in exploring AI and automation technologies for IoT applications.</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Basic knowledge of web development concepts and technologies.</>,
        images: [],
      },
      {
        title: "Teaching & Mentoring",
        description: <>Passionate about teaching and mentoring students in IoT and robotics.</>,
        images: [],
      },
      {
        title: "Public Speaking",
        description: <>Experienced in delivering talks and workshops on IoT and robotics topics.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ME",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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
