import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import ExportPDF from './components/ExportPDF';

function App() {
  const [generatedContent, setGeneratedContent] = useState('');

  return (
    <div className="App">
      <PortfolioForm setGeneratedContent={setGeneratedContent} />
      {generatedContent && <ExportPDF content={generatedContent} />}
    </div>
  );
}

export default App;
