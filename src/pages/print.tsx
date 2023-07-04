import {FC, memo} from 'react';

import Document from '../components/Document/Document';
import Page from '../components/Layout/Page';
import {pageMeta} from '../data/data';

const Print: FC = memo(() => {
  const {title, description} = pageMeta;
  return (
    <Page description={description} title={title}>
      <Document />
    </Page>
  );
});

export default Print;
