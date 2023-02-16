import { useState, useEffect } from 'react';

export const Typewriter = ({ text }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(index === text.length ? text.length : index + 1),
      100 + Math.floor(Math.random() * 300)
    );
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <span>{text.slice(0, index)}</span>
      <span className="typewriter__cursor">|</span>
      <span style={{ opacity: 0 }}>{text.slice(index)}</span>
    </>
  );
};
