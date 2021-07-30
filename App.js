import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import SafeArea from './src/utility/SafeArea';
import Layout from './src/utility/Layout/Layout';

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <SafeArea>
            <Layout>
               <MenuScreen />
            </Layout>
            <StatusBar style="auto" />
         </SafeArea>
      </ThemeProvider>
   );
}
