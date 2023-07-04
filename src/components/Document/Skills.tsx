import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills, className} = skillGroup;
  return (
    <div className={`flex flex-col break-inside-avoid ${className}`}>
      <span className="pt-8 pb-4 text-left text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col break-inside-avoid">
      <span className="mt-2 pb-1 text-normal font-medium">{name}</span>
      <div className="h-2 w-full overflow-hidden bg-neutral-300">
        <div className="h-full bg-neutral-900" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
