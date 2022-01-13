import './App.css';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfFile from '../src/pdf/pdf_display.pdf'

import React, {useState} from 'react';


function App() {
  const [defaultPdfFile] = useState(pdfFile);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="App">
      <div class = "pdf-container">

      {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!defaultPdfFile&&<>No pdf file selected</>}

      </div>
    </div>
  );
}

export default App;
