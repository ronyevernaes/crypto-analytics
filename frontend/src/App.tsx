import React from 'react';
import { CssBaseline } from '@mui/material';

import { Toolbar } from './components/Widgets';
import { List } from './components/Widgets/List/List';

function App() {
  return (
    <div>
      <CssBaseline />
      {/* TODO: Add 'header' for semantic tag and proper branding */}
      <Toolbar />
      <List />
    </div>
  );
}

export default App;
