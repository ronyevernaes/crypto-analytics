import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';

import { List } from './components/Widgets/List/List';
import { Header } from './components/Widgets/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Header title='Exchange Analyticszzz' />
      <List />
    </QueryClientProvider>
  );
}

export default App;
