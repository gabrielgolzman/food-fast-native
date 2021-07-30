import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

import SafeArea from './src/utility/SafeArea';
import { MainNavigation } from './src/infrastructure/navigation';

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <SafeArea>
            <MainNavigation />
            <StatusBar style="auto" />
         </SafeArea>
      </ThemeProvider>
   );
}
