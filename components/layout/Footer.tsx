'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-4 text-center">
      <p>© {year} Jesse Lawrence - Always forwards, never backwards</p>
    </footer>
  );
}
