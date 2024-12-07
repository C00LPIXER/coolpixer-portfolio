import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "AMAL",
  lastName: "KRISHNA",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer & Cybersecurity Enthusiast",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/C00lPIXER",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amalkrishanp/",
  },
  {
    name: "X",
    icon: "instagram",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "amalkrishanp@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AMAL KRISHNA</>,
  subline: (
    <>
      Passionate developer crafting web solutions <InlineCode>&</InlineCode>{" "}
      exploring cybersecurity advancements. <br />
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Crafting innovative web experiences with the MERN stack and a passion
        for design. I build responsive, user-centric websites and applications
        that drive engagement and deliver results.
        <br />
        <br /> Cybersecurity expert with a knack for ethical hacking and
        vulnerability assessments. Dedicated to developing secure,
        high-performance web solutions and elevating digital experiences. <br />
        <br />
        I'm ready to collaborate on projects that are both dynamic and secure,
        making a positive impact in the digital world!
      </>
    ),
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Brototype",
        timeframe: "Jun 2024 - Present",
        role: "MERN Stack Developer",
        achievements: [
          <>
            Built Aperture, an e-commerce platform tailored for photographers,
            offering a seamless shopping experience for camera accessories and
            gear, with a robust admin panel for efficient management.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/aperture.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/shoppage.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Try Hack Me",
        timeframe: "Jun 2023 - Present",
        role: "CTF Player",
        achievements: [
          <>Achieved an impressive rank of 94,828 (top 8%).</>,
          <>Completed 47 rooms, building strong cybersecurity skills.</>,
          <>
            Earned 11 badges, demonstrating practical application of my skills..
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/tryhackme.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Brocamp (Jun 2024 - Present)",
        description: (
          <>
            A program focused on learning the MERN stack (MongoDB, Express.js,
            React, and Node.js) through self-learning and peer-to-peer
            education. The hands-on approach allows you to gain practical
            full-stack web development experience by building live projects,
            while also fostering key soft skills like communication, teamwork,
            and leadership.
          </>
        ),
      },
      {
        name: "EC-Council University (Nov 2023 - Jan 2024)",
        description: (
          <>
            Focuses on Cybersecurity, specifically in Security Operations and
            Security Information and Event Management (SIEM). The program covers
            various cybersecurity tools and operations necessary for managing
            and mitigating security risks in organizations.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/tryhackme.png",
            alt: "Brocamp Logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "RedTeam Hacker Academy (Jun 2023 - Jan 2024)",
        description: (
          <>
            This course trains individuals in ethical hacking with a focus on
            Certified Penetration Testing (CPT). The program includes skills in
            Vulnerability Assessment and Penetration Testing (VAPT) as well as
            Social Engineering, providing essential knowledge for identifying
            and exploiting system vulnerabilities.
          </>
        ),
      },
      {
        name: "GVHSS MAKARAPARAMBA (May 2021 - Mar 2023)",
        description: (
          <>
            A Higher Secondary education in Science, with the added experience
            of participating in NSS (National Service Scheme) volunteer
            activities. This foundation in science equipped the individual with
            core scientific knowledge and the opportunity to engage in community
            service through NSS.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Proficient in building full-stack applications using MERN stack
            (MongoDB, Express, React, Node.js), including hands-on experience
            with API development and deployment.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/soc.png",
          //   alt: "Cybersecurity skills",
          //   width: 8,
          //   height: 6,
          // },
        ],
      },
      {
        title: "Cybersecurity",
        description: (
          <>
            Experience with cybersecurity practices, focusing on penetration
            testing, security operations, and SIEM tools.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/soc.png",
            alt: "Cybersecurity skills",
            width: 8,
            height: 6,
          },
          {
            src: "/images/projects/project-01/cpt.png",
            alt: "Cybersecurity skills",
            width: 8,
            height: 6,
          },
          {
            src: "/images/projects/project-01/sql.png",
            alt: "Cybersecurity skills",
            width: 8,
            height: 6,
          },
          {
            src: "/images/projects/project-01/job.png",
            alt: "Cybersecurity skills",
            width: 8,
            height: 6,
          },
        ],
      },
      {
        title: "LeetCode Badge",
        description: (
          <>
            A showcase of my achievements on LeetCode, demonstrating
            problem-solving skills and proficiency in data structures and
            algorithms.
            <br />
            <br /> Explore my LeetCode profile to learn more:&nbsp;
            <a
              href="https://leetcode.com/u/kr_i_s_h__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LeetCode Profile
            </a>
            .
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/2024-50-lg.png", 
            alt: "LeetCode Badge",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "TryHackMe Badges",
        description: (
          <>
            A showcase of TryHackMe badges earned through hands-on challenges,
            demonstrating skills in cybersecurity areas such as web security,
            OSINT, Linux, and defensive security.
            <br />
            <br /> Explore my TryHackMe profile to learn more:&nbsp;
            <a
              href="https://tryhackme.com/r/p/coolpixer"
              target="_blank"
              rel="noopener noreferrer"
            >
              My TryHackMe Profile
            </a>
            .
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/owasptop10.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/ohsint.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/linux.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/blue.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/hashcracker.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/mrrobot.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/linuxprivesc.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/introtosecurityengineering.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
          {
            src: "/images/projects/project-01/webbed.svg",
            alt: "Cybersecurity skills",
            width: 6,
            height: 6,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
