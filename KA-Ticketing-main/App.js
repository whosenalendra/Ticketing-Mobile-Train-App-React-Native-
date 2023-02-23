import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Navigation from './Navigation/Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2445ed',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}
