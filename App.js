import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import * as firebase from 'firebase';

import { theme } from './src/infrastructure/theme';
import { MainNavigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import SafeArea from './src/utility/SafeArea';

// Initialize Firebase
const firebaseConfig = {
   apiKey: 'AIzaSyDBBm3ijGs6T3q07qZ2-g2Z9aR7hSsxNeQ',
   authDomain: 'food-fast-native.firebaseapp.com',
   projectId: 'food-fast-native',
   storageBucket: 'food-fast-native.appspot.com',
   messagingSenderId: '937023506128',
   appId: '1:937023506128:web:53dc117ee6de939d11c0d5',
   measurementId: 'G-R7MTS4L225',
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <AuthenticationContextProvider>
            <SafeArea>
               <MainNavigation />
               <StatusBar style="auto" />
            </SafeArea>
         </AuthenticationContextProvider>
      </ThemeProvider>
   );
}
