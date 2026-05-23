import React from 'react';

/**
 * ClassicContainer
 *
 * A stylized container that evokes an ancient, classic look.
 * It provides a dark parchment‑like background with a subtle border
 * and soft inner shadow, suitable for wrapping major page sections.
 */
export default function ClassicContainer({ children }) {
  return (
    <div className="ancient-container mx-auto my-6 max-w-5xl">
      {children}
    </div>
  );
}
