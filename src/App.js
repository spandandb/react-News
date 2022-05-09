import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(10);

  return (
    <div className='App'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <NewsComponent setProgress={setProgress} />
    </div>
  );
}

export default App;
