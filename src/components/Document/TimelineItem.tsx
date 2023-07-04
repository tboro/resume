import React, {FC, memo} from 'react';

import {TimelineItem} from '../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <div className="flex flex-col pb-4">
        <h3 className="text-medium font-bold pb-2">
          {title}, <span className="text-normal whitespace-nowrap">{location}</span>
        </h3>
        <div>
          <span className="text-normal">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
