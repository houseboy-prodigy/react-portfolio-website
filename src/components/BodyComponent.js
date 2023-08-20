import React, { useState, useEffect } from 'react';
import './BodyComponent.css';
import { motion } from 'framer-motion';

const BodyComponent = () => {
  const [typedText, setTypedText] = useState('');
  const words = ['Hello', ' World'];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    let animationInterval;

    const animateText = () => {
      const currentWord = words[currentWordIndex];
      const currentLetter = currentWord[currentLetterIndex];

      if (!isDeleting) {
        setTypedText((prevText) => prevText + currentLetter);
        currentLetterIndex++;
      } else {
        setTypedText((prevText) => prevText.slice(0, -1));
        currentLetterIndex--;
      }

      if (currentLetterIndex === currentWord.length) {
        isDeleting = true;
        animationInterval = setTimeout(() => {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
        }, 500);
      }

      if (currentLetterIndex === -1) {
        isDeleting = false;
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }

      animationInterval = setTimeout(animateText, 100);
    };

    animationInterval = setTimeout(animateText, 100);

    return () => {
      clearTimeout(animationInterval);
    };
  }, []);

  return (
    <main className="body-main">
      <div className="content">
        <motion.div>
          <h1>{typedText}</h1>
        </motion.div>
        <p>This is the main content of your page.</p>
      </div>
    </main>
  );
};

export default BodyComponent;
