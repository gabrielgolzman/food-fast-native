import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RestaurantNavigator from './RestaurantNavigator';

export const MainNavigation = () => {
   return (
      <NavigationContainer>
         <RestaurantNavigator />
      </NavigationContainer>
   );
};
