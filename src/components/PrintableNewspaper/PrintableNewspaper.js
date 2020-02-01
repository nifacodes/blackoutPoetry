import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

import { MyDocument } from '../Newspaper/Sections/Content/Content';


console.log(MyDocument);

const PrintableNewspaper = () => (
  <div>
    <PDFDownloadLink document={MyDocument} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);

export default PrintableNewspaper;
