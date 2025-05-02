import React from 'react';
import { jsPDF } from 'jspdf';

const ExportPDF = ({ content }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save('portfolio.pdf');
  };

  return <button onClick={exportToPDF}>Export as PDF</button>;
};

export default ExportPDF;
