import React from 'react';

import '../styles/global.css';

export default function CompletionButton({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Get Certificate
    </button>
  );
}

