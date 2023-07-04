import Image from 'next/image';
import {useRouter} from "next/router";
import React, {FC, memo} from 'react';

import {aboutData, cvData, education, experience, heroData, languages, links, skills} from '../../data/data';
import styles from './Document.module.scss';
import {SkillGroup} from './Skills';
import TimelineItem from "./TimelineItem";

const Document: FC = memo(() => {
  const router = useRouter();
  const company: string | undefined = router.query.company?.toString();
  const photo: boolean = router.query.photo !== undefined ? true : false;

  return (
    <div className={['bg-white', styles.cvContainer].join(' ')}>
      <header className="border-fog-500 border-b-2 px-0 py-4">
        {photo && !!aboutData.profileImageSrc && (
          <div className="col-span-1 flex justify-end">
            <div className="absolute h-48 overflow-hidden">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={aboutData.profileImageSrc} />
            </div>
          </div>
        )}
        <h1 className="text-6xl font-medium">{heroData.name}</h1>
        <h3 className="py-4 text-xl font-normal">{cvData.wantedJobTitle}</h3>
      </header>

      <div className="flex">
        <div className={'border-fog-500 border-r-2 px-0 py-6 pr-8 ' + styles.leftColumn}>
          <div className={styles.address}>
            <h2 className="mb-4 text-xl font-semibold">Details</h2>
            <h4>Location</h4>
            <p>{cvData.location}</p>
            <h4>Phone</h4>
            <p>{cvData.phone}</p>
            <h4>Email</h4>
            <p>{cvData.email}</p>
          </div>

          <div>
            <h2 className="mb-4 mt-6 text-xl font-semibold">Links</h2>
            <div className="grid justify-items-start gap-6">
              {links.map(({label, Icon, href}) => (
                <a
                  aria-label={label}
                  className="flex items-center"
                  href={href}
                  key={label}>
                  <Icon />
                  <span className="pl-3">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 mt-6 text-xl font-semibold">Skills</h2>
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
            <SkillGroup key={`${languages.name}`} skillGroup={languages} />
          </div>

          <div>
            <h2 className="mb-4 mt-6 text-xl font-semibold">Interests</h2>
            <p>{aboutData.aboutItems.find(item => item.label === 'Interests')?.text}</p>
          </div>
        </div>

        <div className={'py-6 pl-8 ' + styles.rightColumn}>
          <div className="border-fog-500 border-b-2 pb-10">
            <h2 className="mb-4 text-xl font-semibold">Profile</h2>
            {cvData.profile}
          </div>

          <div className="border-fog-500 border-b-2 pb-10">
            <h2 className="my-6 text-xl font-semibold">Employment History</h2>
            {experience.map((item, index) => (
              <TimelineItem item={item} key={index} />
            ))}
          </div>

          <div className="pb-10">
            <h2 className="my-6 text-xl font-semibold">Education</h2>
            {education.map((item, index) => (
              <TimelineItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      {company && <footer className="border-fog-500 border-t-2 text-sm">
        <p className="pt-2">
          I hereby give consent for my personal data to be processed by {company} for the purpose of conducting
          recruitment for the position for&nbsp;which I&nbsp;am&nbsp;applying.
        </p>
        <p className="pb-1">
          I also consent to processing of my personal data by {company} for the purposes of any future recruitment
          processes.
        </p>
      </footer>}
    </div>
  );
});

export default Document;
