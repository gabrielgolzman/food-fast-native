import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

import RestaurantScreen from './src/screens/RestaurantScreen/RestaurantScreen';
import SafeArea from './src/utility/SafeArea';
import Layout from './src/utility/Layout/Layout';

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <SafeArea>
            <Layout>
               <RestaurantScreen />
            </Layout>
            <StatusBar style="auto" />
         </SafeArea>
      </ThemeProvider>
   );
}
