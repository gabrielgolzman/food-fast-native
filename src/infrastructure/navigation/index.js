import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuNavigator from './MenuNavigator';

export const MainNavigation = () => {
   return (
      <NavigationContainer>
         <MenuNavigator />
      </NavigationContainer>
   );
};
