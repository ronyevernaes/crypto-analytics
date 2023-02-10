import React from 'react';

import { Toolbar } from './components/Widgets';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      {/* TODO: Add 'header' for semantic tag and proper branding */}

      <Toolbar />
    </div>
  );
}

export default App;
