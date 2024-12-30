import './App.css';
import Desktop from './components/Desktop';

import LoadingScreen from "../src/components/LodeingScreen";
import { useState, useEffect } from 'react';


function App() {



  
  const [isLoading, setIsLoading] = useState(true); // State to track if loading

  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
     
      {isLoading ? <LoadingScreen /> : (
        <>
          <Desktop />
          
          
        </>
      )}
    </>
  );
}

export default App;

