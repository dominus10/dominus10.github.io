import { Typography } from "@mui/material"
import { useEffect, useState } from "react";
const Home: React.FC = () => {
  const items = [
    'Hello!',
    'My name is Nicholas Inggih, and I am a Javascript fullstack engineer and Flutter application developer, hailing from Indonesia.',
    'I am capable to build range from simple static HTML to cross platform application.',
    'Outside of programming, I draw illustration as well, and I also enjoy to play both strategy-themed board and video games.'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < items.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="fade-in-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`fade-in-item ${currentIndex === index ? 'visible' : ''}`}
          style={{ animationDelay: `${index * 1000}ms` }}
        >
          <Typography marginX={10} variant="h5">{item}</Typography>
        </div>
      ))}
    </div>
  );
};

export { Home }