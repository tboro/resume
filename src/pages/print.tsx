import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

const Cv: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Resume />
    </Page>
  );
});

export default Cv;