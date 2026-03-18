import { useState, useEffect } from 'react';
import './styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 18 + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setFading(true), 200);
          setTimeout(() => {
            setHidden(true);
            onComplete();
          }, 800);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`loading-screen${fading ? ' loading-fade' : ''}`}>
      <div className="loading-content">
        <span className="loading-initials">FS</span>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <span className="loading-label">loading portfolio</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
