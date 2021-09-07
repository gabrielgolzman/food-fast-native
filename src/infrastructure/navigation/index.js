import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

import AccountNavigator from './AccountNavigator';
import RestaurantNavigator from './RestaurantNavigator';

export const MainNavigation = () => {
   const { isAuthenticated } = useContext(AuthenticationContext);

   return (
      <NavigationContainer>
         {isAuthenticated ? <RestaurantNavigator /> : <AccountNavigator />}
      </NavigationContainer>
   );
};
