import { useState, useEffect } from 'react';

const Typewriter = ({ words, speed = 150, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Humanize typing speed (random variance)
    const randomVariance = Math.random() * 50;
    const currentSpeed = reverse
      ? 75 // Backspacing is faster and more constant
      : speed + randomVariance; // Typing has variance

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(
        currentSpeed,
        subIndex === words[index].length ? 1000 : 20 // Minimum delay
      )
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  return (
    <span className="inline-flex items-center">
      {/* The Text */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
        {words[index] ? words[index].substring(0, subIndex) : ''}
      </span>

      {/* The Cursor */}
      <span
        className={`
          ml-1 w-[3px] md:w-[5px] h-[1em] bg-accent 
          transition-opacity duration-100
          shadow-[0_0_10px_rgba(213,159,15,0.8)]
          ${blink ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </span>
  );
};

export default Typewriter;
