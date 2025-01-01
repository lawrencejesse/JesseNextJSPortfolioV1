
'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-4 text-center">
      <p>© {year} Jesse Lawrence - Always forwards, never backwards</p>
    </footer>
  );
}
