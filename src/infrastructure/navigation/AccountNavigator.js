import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/account/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/account/RegisterScreen/RegisterScreen';

const AccountNavigator = () => {
   const AccountStack = createStackNavigator();
   return (
      <AccountStack.Navigator headerMode="none">
         <AccountStack.Screen name="login" component={LoginScreen} />
         <AccountStack.Screen name="register" component={RegisterScreen} />
      </AccountStack.Navigator>
   );
};

export default AccountNavigator;
