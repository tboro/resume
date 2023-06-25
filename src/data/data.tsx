import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import photoImage1 from '../images/photos/photo-1.jpg';
import photoImage2 from '../images/photos/photo-2.jpg';
import photoImage3 from '../images/photos/photo-3.jpg';
import photoImage4 from '../images/photos/photo-4.jpg';
import photoImage5 from '../images/photos/photo-5.jpg';
import photoImage6 from '../images/photos/photo-6.jpg';
import photoImage7 from '../images/photos/photo-7.jpg';
import photoImage8 from '../images/photos/photo-8.jpg';
import photoImage9 from '../images/photos/photo-9.jpg';
import photoImage10 from '../images/photos/photo-10.jpg';
import photoImage11 from '../images/photos/photo-11.jpg';
import photoImage12 from '../images/photos/photo-12.jpg';
import photoImage13 from '../images/photos/photo-13.jpg';
import photoImage14 from '../images/photos/photo-14.jpg';
import photoImage15 from '../images/photos/photo-15.jpg';
import photoImage16 from '../images/photos/photo-16.jpg';
import photoImage17 from '../images/photos/photo-17.jpg';
import photoImage18 from '../images/photos/photo-18.jpg';
import photoImage19 from '../images/photos/photo-19.jpg';
import photoImage20 from '../images/photos/photo-20.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PhotoItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tomasz Borodziuk`s personal resume website',
  description: 'Software developer resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'intro',
  About: 'about',
  Contact: 'contact',
  Photos: 'photos',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  welcome: `Hello, I'm`,
  name: `Tomasz Borodziuk`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Krakow based <strong className="text-stone-100">Full Stack Software Developer</strong>, currently working
        at{' '}
        <a className="font-bold text-stone-100" href="https://amsterdamstandard.com">
          Amsterdam Standard
        </a>{' '}
        helping build Java Script and PHP projects.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing a good <strong className="text-stone-100">board game</strong>,
        practising <strong className="text-stone-100">piano</strong> playing, or spending time actively{' '}
        <strong className="text-stone-100">hiking</strong> or <strong className="text-stone-100">cycling</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/tomasz-borodziuk-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Developer who combines a keen eye for detail with a clear view of the
    overall picture. His strong analytical skills, honed over a decade in the
    field, enable him to deliver top-quality results across a wide range of
    projects. His professional journey has taken him through diverse
    business landscapes, from educational platforms and the financial
    sector to tourism and beyond, enriching his portfolio with varied
    experiences. Tomasz is currently a whizz in PHP and JavaScript, with a
    robust grounding in TypeScript, Angular, and React to complement his
    skill set. When he's not coding, loves to unwind with a good board game,
    practice piano, or spend time actively hiking or cycling.`,
  aboutItems: [
    {label: 'Location', text: 'Kraków, Poland', Icon: MapIcon},
    {label: 'Age', text: '38', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'bord games, piano practise, mountain trekking, cycling', Icon: SparklesIcon},
    {label: 'Study', text: 'Jagiellonian University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amsterdam Standard', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Polish',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'Java Script',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'JQuery',
        level: 8,
      },
      {
        name: 'HTML5',
        level: 9,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'SCSS',
        level: 9,
      },
      {
        name: 'TailwindCSS',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'MysqlSQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'Symfony',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'Next.js',
        level: 3,
      },
      {
        name: 'Strapi',
        level: 2,
      },
    ],
  },
];

/**
 * Photos section
 */
export const photoItems: PhotoItem[] = [
  {
    title: 'Furkotská dolina',
    description: 'August 2018, Tatra Mountains, Slovakia',
    image: photoImage1,
  },
  {
    title: 'Me with my boyfriend Klaudiusz',
    description: 'May 2019, Sopot, Poland',
    image: photoImage2,
  },
  {
    title: 'On vacation',
    description: 'April 2017, Gran Canaria, Spain',
    image: photoImage3,
  },
  {
    title: 'Sightseeing of the city',
    description: 'September 2022, Berlin, Germany',
    image: photoImage4,
  },
  {
    title: 'Relax in a restaurant',
    description: 'April 2017, Gran Canaria, Spain',
    image: photoImage5,
  },
  {
    title: 'Exploring the coast',
    description: 'April 2023, Marsaxlokk, Malta',
    image: photoImage6,
  },
  {
    title: 'On a way to the peak of Pupov',
    description: 'August 2019, Slovakia',
    image: photoImage7,
  },
  {
    title: 'On a bike tour',
    description: 'August 2018, Pogorzelica - Mrzeżyno, Poland',
    image: photoImage8,
  },
  {
    title: 'On a bike trip',
    description: 'August 2019, Lachowice, Poland',
    image: photoImage9,
  },
  {
    title: 'View from the Krakus Mound',
    description: '2023, Kraków, Poland',
    image: photoImage10,
  },
  {
    title: 'On a walk',
    description: 'April 2023, Valetta, Malta',
    image: photoImage11,
  },
  {
    title: 'Visiting Old Jaffa',
    description: 'April 2023, Tel Aviv, Israel',
    image: photoImage12,
  },
  {
    title: 'On ferry to Gozo',
    description: 'April 2023, Malta',
    image: photoImage13,
  },
  {
    title: 'On the peak of Pilsko',
    description: 'December 2021, Pilsko, Poland',
    image: photoImage14,
  },
  {
    title: 'My cat Gata',
    description: 'June 2023, Kraków, Poland',
    image: photoImage15,
  },
  {
    title: 'My beautiful cat Gata',
    description: 'December 2022, Kraków, Poland',
    image: photoImage16,
  },
  {
    title: 'My cat Gata is supervising me at work',
    description: 'March 2023, Kraków, Poland',
    image: photoImage17,
  },
  {
    title: 'Gata often practises piano with me',
    description: 'March 2023, Kraków, Poland',
    image: photoImage18,
  },
  {
    title: 'On a way to Mlynická dolina',
    description: 'August 2018, Tatra Mountains, Slovakia',
    image: photoImage19,
  },
  {
    title: 'My cat Gata sometimes also plays board games.',
    description: 'June 2023, Kraków, Poland',
    image: photoImage20,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2006-2011',
    location: 'Jagielloninan University',
    title: 'Masters degree',
    content: <p>Electronic Information Processing</p>,
  },
  {
    date: '2013-2014',
    location: 'Jagielloninan University',
    title: 'Postgraduate studies',
    content: <p>Mobile Application Development</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2014 - Present',
    location: 'Amsterdam Standard',
    title: 'Full-Stack Developer',
    content: (
      <div className="timelineItemContent">
        <p>
          <span>Technologies: </span>
          <span>
            Java Script, Type Script, PHP, SQL, MongoDB, React JS, JQuery, Bootstrap, Zend Framework, Vegas CMF,
            Symfony, Git, Composer, Linux, Docker
          </span>
        </p>
        <ul>
          <li>developed JS, TS and PHP projects</li>
          <li>wrote technical documentation of newly developed features</li>
          <li>cooperated with other developers, project managers, project owners and clients</li>
          <li>preformed routine maintenance activity of existing projects and developed new features for them</li>
        </ul>
        <p>Worked on:</p>
        <ul>
          <li>
            <span>04.2023 - now:</span>
            <span>Development of a company website,</span>
            <span>tech-stack: React, TypeScript, Tailwind CSS, Next JS,Strapi</span>
          </li>
          <li>
            <span>12.2021 - 03.2023:</span>
            <span>Development of a project for the advertising industry,</span>
            <span>
              tech-stack: Angular JS, TypeScript, NodeJS, PHP, Symfony, SQL, PhpUnit, Composer, Docker, RabbitMQ
            </span>
          </li>
          <li>
            <span>05.2021 - 11.2021:</span>
            <span>Development of a project for the golf industry,</span>
            <span>tech-stack: PHP, Symfony, MySQL, JQuery</span>
          </li>
          <li>
            <span>01.2021 - 04.2021:</span>
            <span>Development of a project for the finance industry,</span>
            <span>tech-stack: Laravel, PHP, React, Docker, PostgreSQL</span>
          </li>
          <li>
            <span>10.2020 - 01.2021:</span>
            <span>Development of a project for the construction industry,</span>
            <span>tech-stack: PHP, PostgreSQL, JQuery, Docker</span>
          </li>
          <li>
            <span>11.2017 - 12.2021:</span>
            <span>Development of a project for the solar energy industry,</span>
            <span>
              tech-stack: PHP, Symfony, PostgreSQL, Redis, Haxe, PhpUnit, Composer, React, npm, Yarn, Cypress, Docker
            </span>
          </li>
          <li>
            <span>03.2014 - 09.2019:</span>
            <span>Development of various projects (industries: E-commerce, Events, Holidays and Travel, Media),</span>
            <span>tech-stack: PHP, Zend Framework, MySQL, Composer, JavaScript, JQuery</span>
          </li>
          <li>
            <span>02.2015 - 06.2018:</span>
            <span>
              Development of various projects (industries: Real Estates, Media, Education, Trainings, E-commerce,
              Recruitment, Tourism, Amusement park, Business Services),
            </span>
            <span>tech-stack: PHP, Vegas CMF, MongoDB, Composer, JavaScript, JQuery</span>
          </li>
          <li>11.2014: Development of Drupal plugin for Tokenizer (open source), tech-stack: PHP, Drupal.</li>
          <li>
            <span>08.2014 - 10.2017:</span>
            <span>Development of Vegas CMF (open source),</span>
            <span>tech-stack: PHP, MongoDB, Phalcon PHP Framework, PhpUnit, JQuery</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: '2012 - 2014',
    location: 'Hewlett-Packard Polska',
    title: 'Software Designer I/Technical Solutions Consultant II',
    content: (
      <div className="timelineItemContent">
        <p>Technologies: PHP, JS, HTML, XML, CSS, SQL, Drupal, SVN, Linux</p>
        <ul>
          <li>defined areas for improvement in software updating and developed relevant tools to optimize them,</li>
          <li>
            designed and programmed an application for making pre-installation back-ups and for installing updates of HP
            Hiflex Webshop which significantly shortened the time required for installing,
          </li>
          <li>
            developed a tool for updating, merging and converting software dictionary which optimized the processes,
          </li>
          <li>evaluated updates, installations and configurations and made recommendations for resolutions,</li>
          <li>
            responded to technical questions on subjects such as features (including programming issues), specifications
            and repairs on products and options,
          </li>
          <li>
            proactively assisted internal and external businesses and end-users to avoid or reduce the incidence of
            technical problems,
          </li>
          <li>resoled technical issues from incoming internal and external contacts and notification systems,</li>
          <li>checked software functionalities and debugged source code</li>
        </ul>
      </div>
    ),
  },
  {
    date: '2012',
    location: 'Hiflex Poland',
    title: 'Technical Support Engineer / Junior PHP Developer',
    content: (
      <div className="timelineItemContent">
        <p>Technologies: PHP, JS, HTML, CSS, Drupal</p>
        <ul>
          <li>
            diagnosed software errors and warnings and implemented relevant changes in the source code (debugging and
            bug fixing),
          </li>
          <li>checked software functionalities,</li>
          <li>communicated with customers and developers</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Have a project for me? Send me an email or write a message using the contact form.',
  items: [
    {
      type: ContactType.Email,
      text: 'tomasz.borodziuk@gmail.com',
      href: 'mailto:tomasz.borodziuk@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kraków, Poland',
      href: 'https://www.google.pl/maps/place/%C5%9Awitezianki+2,+31-563+Krak%C3%B3w-%C5%9Ar%C3%B3dmie%C5%9Bcie/@50.0620732,19.9779643,17z/data=!3m1!4b1!4m6!3m5!1s0x47165b2c34eed1eb:0xcedf82f2b49bfe5c!8m2!3d50.0620698!4d19.9805392!16s%2Fg%2F11cp92_5tb?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'tboro',
      href: 'https://github.com/tboro',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tboro'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tomasz-borodziuk-3aa76a54/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/tomasz.borodziuk.5'},
];
