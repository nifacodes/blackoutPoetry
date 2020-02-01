import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { MyDocument } from '../Newspaper/Sections/Content/Content';

const PrintableNewspaper = () => (
  <div>
    <PDFDownloadLink document={MyDocument} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);

export default PrintableNewspaper;
