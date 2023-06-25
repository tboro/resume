import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {photoItems, SectionId} from '../../data/data';
import {PhotoItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Photos: FC = memo(() => {
  return (
    <Section className="bg-neutral-950" sectionId={SectionId.Photos}>
      <div className="flex flex-col gap-y-8">
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {photoItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Photos.displayName = 'Photos';
export default Photos;

const ItemOverlay: FC<{item: PhotoItem}> = memo(({item: {title, description}}) => {
  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        'opacity-0 hover:opacity-80',
      )}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-center text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
});
