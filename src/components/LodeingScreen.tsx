import { useState, useEffect } from 'react';
import "./lodeingScreen.css"

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with your actual data fetching or processing)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  if (isLoading) {
    return (
        
        <div className="window">
        <div className="logo">
          <p className="top">Microsoft</p>
          <p className="mid">Windows
            <p className='xp'>XP</p></p>
          <p className="bottom">Crack</p>
        </div>
        <div className="container">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      
      
    </div>
  );
}

export default LoadingScreen;