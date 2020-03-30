/* eslint-disable react/jsx-no-target-blank */

import React from 'react';

export default () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>© {year} Loud KTown</span>
    </footer>
  );
};
