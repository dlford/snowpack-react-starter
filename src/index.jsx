import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
/* eslint-disable no-constant-condition */
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
