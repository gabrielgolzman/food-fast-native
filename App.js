import { StatusBar } from 'expo-status-bar';
import React from 'react';

import RestaurantScreen from './src/screens/RestaurantScreen';
import SafeArea from './src/utility/SafeArea';
import Layout from './src/utility/Layout/Layout';

export default function App() {
   return (
      <SafeArea>
         <Layout>
            <RestaurantScreen />
         </Layout>
         <StatusBar style="auto" />
      </SafeArea>
   );
}
