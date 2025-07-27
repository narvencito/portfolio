import { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    const move = (e) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);
  return null;
};

export default CursorGlow;