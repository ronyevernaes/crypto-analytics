import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';

import { Toolbar } from './components/Widgets';
import { List } from './components/Widgets/List/List';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      {/* TODO: Add 'header' for semantic tag and proper branding */}
      <Toolbar />
      <List />
    </QueryClientProvider>
  );
}

export default App;
